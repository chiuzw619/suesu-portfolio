import { onBeforeUnmount, onMounted } from 'vue'

// Cosmic night mode for Illustration: the page fades to deep space (#13152a via
// --night / --night-color in style.css) and a fixed canvas draws a twinkling
// starfield — loose clusters, a few bright four-point sparkles drawn as thin
// lines like the illustrations, three parallax depths that drift as the page
// scrolls, and an occasional shooting star. setLevel takes a 0–1 strength.
const SKY = '#13152a'

export function useStars(canvas) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
  const DEPTHS = [0.04, 0.1, 0.2]
  let ctx, w, h, stars = [], sparkles = [], shooting = null, nextShot = 0
  let raf = 0, target = 0, alpha = 0

  const star = (x, y, small) => ({
    x, y,
    r: small ? 0.3 + Math.random() * 0.6 : 0.4 + Math.random() * 1.1,
    a: 0.35 + Math.random() * 0.6,
    speed: 0.6 + Math.random() * 2.2,
    phase: Math.random() * Math.PI * 2,
    depth: DEPTHS[(Math.random() * DEPTHS.length) | 0],
    tint: Math.random() < 0.25 ? '210, 220, 255' : Math.random() < 0.2 ? '255, 236, 210' : '255, 255, 255',
  })

  const build = () => {
    stars = []
    for (let i = 0, n = Math.round((w * h) / 2600); i < n; i++) stars.push(star(Math.random() * w, Math.random() * h))
    // Clusters: a few loose gaussian groups of small stars.
    for (let c = 0; c < 6; c++) {
      const cx = Math.random() * w, cy = Math.random() * h, spread = 30 + Math.random() * 60
      for (let i = 0; i < 40; i++) {
        const g = () => (Math.random() + Math.random() + Math.random() - 1.5) * spread
        stars.push(star(cx + g(), cy + g(), true))
      }
    }
    sparkles = Array.from({ length: Math.max(6, Math.round((w * h) / 90000)) }, () => ({ ...star(Math.random() * w, Math.random() * h), len: 5 + Math.random() * 9 }))
  }

  const resize = () => {
    const dpr = window.devicePixelRatio || 1
    w = window.innerWidth; h = window.innerHeight
    canvas.value.width = w * dpr; canvas.value.height = h * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    build()
    if (!raf) draw(performance.now())
  }

  // Wrap a star's position vertically so parallax scrolling never runs out of sky.
  const screenY = (s) => {
    const y = (s.y - (reduced.matches ? 0 : window.scrollY * s.depth)) % h
    return y < 0 ? y + h : y
  }

  function draw(now) {
    const still = reduced.matches
    alpha = still ? target : alpha + (target - alpha) * 0.08
    const t = now / 1000
    ctx.clearRect(0, 0, w, h)

    for (const s of stars) {
      const tw = still ? 1 : 0.55 + 0.45 * Math.sin(t * s.speed + s.phase)
      ctx.fillStyle = `rgba(${s.tint}, ${s.a * tw * alpha})`
      ctx.beginPath()
      ctx.arc(s.x, screenY(s), s.r, 0, Math.PI * 2)
      ctx.fill()
    }

    ctx.lineCap = 'round'
    for (const s of sparkles) {
      const tw = still ? 1 : 0.4 + 0.6 * Math.max(0, Math.sin(t * s.speed * 0.6 + s.phase))
      const y = screenY(s), l = s.len * (0.6 + 0.4 * tw)
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.9 * tw * alpha})`
      ctx.lineWidth = 0.7
      ctx.beginPath()
      ctx.moveTo(s.x - l, y); ctx.lineTo(s.x + l, y)
      ctx.moveTo(s.x, y - l); ctx.lineTo(s.x, y + l)
      ctx.stroke()
      ctx.fillStyle = `rgba(255, 255, 255, ${tw * alpha})`
      ctx.beginPath()
      ctx.arc(s.x, y, 1.2, 0, Math.PI * 2)
      ctx.fill()
    }

    if (!still && alpha > 0.5) {
      if (!shooting && now > nextShot) {
        shooting = { x: w * (0.2 + Math.random() * 0.7), y: h * Math.random() * 0.4, vx: -(7 + Math.random() * 5), vy: 3 + Math.random() * 3, life: 0 }
      }
      if (shooting) {
        const s = shooting
        s.x += s.vx; s.y += s.vy; s.life++
        const fade = Math.min(1, s.life / 10) * Math.max(0, 1 - s.life / 70)
        const grad = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * 12, s.y - s.vy * 12)
        grad.addColorStop(0, `rgba(255, 255, 255, ${0.9 * fade * alpha})`)
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)')
        ctx.strokeStyle = grad
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(s.x, s.y); ctx.lineTo(s.x - s.vx * 12, s.y - s.vy * 12)
        ctx.stroke()
        if (s.life > 70) { shooting = null; nextShot = now + 5000 + Math.random() * 5000 }
      }
    }

    raf = !still && (target > 0 || alpha > 0.01) ? requestAnimationFrame(draw) : 0
  }

  const setLevel = (value) => {
    const level = Math.max(0, Math.min(1, Number(value)))
    if (level === target) {
      if (reduced.matches && level > 0) draw(performance.now())
      return
    }
    target = level
    const root = document.documentElement
    root.style.setProperty('--night', level)
    root.classList.toggle('night', level >= 0.5)
    if (!raf) draw(performance.now())
  }

  onMounted(() => {
    document.documentElement.style.setProperty('--night-color', SKY)
    ctx = canvas.value.getContext('2d')
    nextShot = performance.now() + 2500
    resize()
    window.addEventListener('resize', resize)
  })
  onBeforeUnmount(() => {
    cancelAnimationFrame(raf)
    window.removeEventListener('resize', resize)
    const root = document.documentElement
    root.classList.remove('night')
    root.style.removeProperty('--night')
    root.style.removeProperty('--night-color')
  })

  return { setLevel }
}

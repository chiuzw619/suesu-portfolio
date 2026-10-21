import { onBeforeUnmount, onMounted } from 'vue'

// Night mode shared by Home (hovering the illustration) and Exhibition (while the
// video plays): the page turns #252320 (html.night in style.css) and thin white
// strokes fall like rain on a fixed canvas, echoing the illustration's line work.
export function useRain(canvas) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
  const SLANT = 0.12
  let ctx, w, h, drops = [], raf = 0, on = false, alpha = 0

  const drop = (anywhere) => ({
    x: Math.random() * (w + h * SLANT),
    y: anywhere ? Math.random() * h : -Math.random() * h * 0.3,
    len: 14 + Math.random() * 40,
    speed: 3 + Math.random() * 6,
    o: 0.15 + Math.random() * 0.5,
  })

  const resize = () => {
    const dpr = window.devicePixelRatio || 1
    w = window.innerWidth; h = window.innerHeight
    canvas.value.width = w * dpr; canvas.value.height = h * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    drops = Array.from({ length: Math.round((w * h) / 9000) }, () => drop(true))
    if (!raf) draw()
  }

  function draw() {
    const still = reduced.matches
    alpha = still ? (on ? 1 : 0) : alpha + ((on ? 1 : 0) - alpha) * 0.08
    ctx.clearRect(0, 0, w, h)
    ctx.lineWidth = 0.8
    ctx.lineCap = 'round'
    for (const d of drops) {
      if (!still) { d.y += d.speed; d.x -= d.speed * SLANT }
      if (d.y - d.len > h) Object.assign(d, drop(false))
      ctx.strokeStyle = `rgba(255, 255, 255, ${d.o * alpha})`
      ctx.beginPath()
      ctx.moveTo(d.x, d.y)
      ctx.lineTo(d.x + d.len * SLANT, d.y - d.len)
      ctx.stroke()
    }
    raf = !still && (on || alpha > 0.01) ? requestAnimationFrame(draw) : 0
  }

  const setRain = (value) => {
    if (value === on) return
    on = value
    document.documentElement.classList.toggle('night', on)
    if (!raf) draw()
  }

  onMounted(() => { ctx = canvas.value.getContext('2d'); resize(); window.addEventListener('resize', resize) })
  onBeforeUnmount(() => {
    cancelAnimationFrame(raf)
    window.removeEventListener('resize', resize)
    document.documentElement.classList.remove('night')
  })

  return { setRain, isOn: () => on }
}

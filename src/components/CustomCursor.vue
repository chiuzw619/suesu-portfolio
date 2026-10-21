<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

// A fine-line cursor in the portfolio's style: a small dot with a thin ring that
// trails behind it. Both use mix-blend-mode: difference so they read on white and
// in night mode. The ring grows over links and buttons and turns into a "View"
// badge over images that open in the lightbox. Only for mouse/trackpad users.
const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
const enabled = fine.matches
const dot = ref(null)
const ring = ref(null)
const mode = ref('')
const hidden = ref(true)
let x = 0, y = 0, rx = 0, ry = 0, raf = 0

const loop = () => {
  const k = reduced.matches ? 1 : 0.2
  rx += (x - rx) * k
  ry += (y - ry) * k
  ring.value.style.transform = `translate(${rx}px, ${ry}px)`
  raf = Math.abs(x - rx) + Math.abs(y - ry) > 0.1 ? requestAnimationFrame(loop) : 0
}
const onMove = (e) => {
  x = e.clientX; y = e.clientY
  if (hidden.value) { rx = x; ry = y; hidden.value = false }
  dot.value.style.transform = `translate(${x}px, ${y}px)`
  const t = e.target
  mode.value = t.closest?.('.zoomable') ? 'view' : t.closest?.('a, button, [role="button"], .home-art') ? 'link' : ''
  if (!raf) raf = requestAnimationFrame(loop)
}
// The pointer leaves the page, or enters the YouTube player, which has its own cursor.
const onOver = (e) => { if (e.target.tagName === 'IFRAME') hidden.value = true }
const onLeave = () => { hidden.value = true }

onMounted(() => {
  if (!enabled) return
  document.documentElement.classList.add('custom-cursor')
  document.addEventListener('mousemove', onMove, { passive: true })
  document.addEventListener('mouseover', onOver)
  document.documentElement.addEventListener('mouseleave', onLeave)
})
onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  document.documentElement.classList.remove('custom-cursor')
  document.removeEventListener('mousemove', onMove)
  document.removeEventListener('mouseover', onOver)
  document.documentElement.removeEventListener('mouseleave', onLeave)
})
</script>

<template>
  <template v-if="enabled">
    <div ref="ring" class="cursor-ring" :class="[mode, { hidden }]" aria-hidden="true"><span>View</span></div>
    <div ref="dot" class="cursor-dot" :class="[mode, { hidden }]" aria-hidden="true"></div>
  </template>
</template>

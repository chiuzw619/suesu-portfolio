<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

// Click (or Enter on) a content image to see it enlarged; arrows and the arrow
// keys step through the page's zoomable images. Left out: images marked
// .no-zoom (logos, small reference pictures, the portrait), the video poster and
// Home's illustration (which has its own hover effect).
const SELECTOR = 'main img:not(.yt img):not(.home-art):not(.no-zoom)'
const images = ref([])
const index = ref(-1)
const current = computed(() => images.value[index.value])
const closeButton = ref(null)
let opener = null

const open = (i, el) => {
  opener = el
  index.value = i
  document.documentElement.style.overflow = 'hidden'
  nextTick(() => closeButton.value?.focus())
}
const close = () => {
  index.value = -1
  document.documentElement.style.overflow = ''
  opener?.focus({ preventScroll: true })
}
// Any click outside the picture and the controls closes the lightbox. The <img>
// box fills the screen (object-fit: contain), so a click on it only counts as on
// the picture when it lands inside the letterboxed image itself.
const onPictureArea = (e) => {
  const img = e.target
  if (img.tagName !== 'IMG' || !img.naturalWidth) return false
  const r = img.getBoundingClientRect()
  const scale = Math.min(r.width / img.naturalWidth, r.height / img.naturalHeight)
  const w = img.naturalWidth * scale, h = img.naturalHeight * scale
  const x = e.clientX - (r.left + (r.width - w) / 2), y = e.clientY - (r.top + (r.height - h) / 2)
  return x >= 0 && y >= 0 && x <= w && y <= h
}
const onBackdropClick = (e) => { if (!e.target.closest('button') && !onPictureArea(e)) close() }
const step = (d) => { index.value = (index.value + d + images.value.length) % images.value.length }
const onKey = (e) => {
  if (index.value < 0) return
  if (e.key === 'Escape') close()
  else if (e.key === 'ArrowLeft') step(-1)
  else if (e.key === 'ArrowRight') step(1)
}

onMounted(() => {
  const els = [...document.querySelectorAll(SELECTOR)]
  images.value = els.map((el) => ({ src: el.currentSrc || el.src, alt: el.alt }))
  els.forEach((el, i) => {
    el.classList.add('zoomable')
    el.tabIndex = 0
    el.setAttribute('role', 'button')
    el.setAttribute('aria-label', el.alt ? `Enlarge image: ${el.alt}` : 'Enlarge image')
    el.addEventListener('click', () => open(i, el))
    el.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(i, el) } })
  })
  document.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKey)
  document.documentElement.style.overflow = ''
})
</script>

<template>
  <Transition name="lb">
    <div v-if="current" class="lightbox" role="dialog" aria-modal="true" :aria-label="current.alt || 'Image'" @click="onBackdropClick">
      <figure class="lb-figure">
        <img :key="current.src" :src="current.src" :alt="current.alt">
        <figcaption v-if="current.alt">{{ current.alt }}</figcaption>
      </figure>
      <button ref="closeButton" type="button" class="lb-close" aria-label="Close" @click="close"></button>
      <template v-if="images.length > 1">
        <button type="button" class="lb-arrow lb-prev" aria-label="Previous image" @click="step(-1)">
          <svg width="28" height="56" viewBox="0 0 28 56" aria-hidden="true"><path d="M26 2L2 28l24 26" /></svg>
        </button>
        <button type="button" class="lb-arrow lb-next" aria-label="Next image" @click="step(1)">
          <svg width="28" height="56" viewBox="0 0 28 56" aria-hidden="true"><path d="M2 2l24 26L2 54" /></svg>
        </button>
        <p class="lb-count">{{ index + 1 }} / {{ images.length }}</p>
      </template>
    </div>
  </Transition>
</template>

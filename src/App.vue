<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { layout, page } from './site'
import SiteHeader from './components/SiteHeader.vue'
import SectionIndex from './components/SectionIndex.vue'
import ImageLightbox from './components/ImageLightbox.vue'
import CustomCursor from './components/CustomCursor.vue'
import HomePage from './pages/HomePage.vue'
import ProjectPage from './pages/ProjectPage.vue'
import ExhibitionPage from './pages/ExhibitionPage.vue'
import IllustrationPage from './pages/IllustrationPage.vue'
import GraphicDesignPage from './pages/GraphicDesignPage.vue'
import ContactPage from './pages/ContactPage.vue'

const pages = {
  home: HomePage,
  project: ProjectPage,
  exhibition: ExhibitionPage,
  illustration: IllustrationPage,
  'graphic-design': GraphicDesignPage,
  contact: ContactPage,
}
const current = layout[page] ? page : 'home'
const meta = layout[current]

// The column's height is the measured bottom of its content plus a margin, rather
// than the original Wix page height (which left a large empty area at the end).
const BOTTOM_SPACE = 160
const col = ref(null)
const height = ref(meta.height)
const fitHeight = () => {
  if (current === 'home') return
  const top = col.value.getBoundingClientRect().top
  const bottom = Math.max(...[...col.value.querySelectorAll('.a')].map((el) => el.getBoundingClientRect().bottom))
  height.value = Math.ceil(bottom - top + BOTTOM_SPACE)
}

// From 1000px up the page is the exact Wix desktop composition. Below that the
// CSS switches to a single reflowing column; only .fig blocks (diagrams and
// overlapping collages) keep their internal layout and are scaled to fit.
const mobile = window.matchMedia('(max-width: 999px)')
const fitFigures = () => {
  document.querySelectorAll('.fig').forEach((el) => {
    el.style.zoom = ''
    if (mobile.matches) el.style.zoom = Math.min(1, el.parentElement.clientWidth / parseFloat(el.style.width))
  })
}

// The Top button stays in the bottom-right corner once the reader has scrolled.
const showTop = ref(false)
const onScroll = () => { showTop.value = window.scrollY > 400 }
const toTop = () => window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })

onMounted(() => {
  fitFigures(); onScroll(); fitHeight()
  document.fonts.ready.then(fitHeight)
  window.addEventListener('resize', fitFigures)
  window.addEventListener('resize', fitHeight)
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', fitFigures)
  window.removeEventListener('resize', fitHeight)
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <div id="top" class="wix" :class="`wix-page-${current}`">
    <div ref="col" class="wix-col" :style="{ height: `${height}px` }">
      <SiteHeader />
      <main id="main"><component :is="pages[current]" /></main>
    </div>
    <template v-if="current !== 'home'">
      <SectionIndex />
      <a class="top-button" :class="{ show: showTop }" href="#top" :tabindex="showTop ? 0 : -1" :aria-hidden="!showTop" @click.prevent="toTop">Top</a>
      <ImageLightbox />
    </template>
    <CustomCursor />
  </div>
</template>

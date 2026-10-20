<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import { layout, page } from './site'
import SiteHeader from './components/SiteHeader.vue'
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
onMounted(() => { fitFigures(); window.addEventListener('resize', fitFigures) })
onBeforeUnmount(() => window.removeEventListener('resize', fitFigures))
</script>

<template>
  <div id="top" class="wix" :class="`wix-page-${current}`">
    <div class="wix-col" :style="{ height: `${meta.height}px` }">
      <SiteHeader />
      <main id="main"><component :is="pages[current]" /></main>
      <a v-if="meta.top" class="a top-button" href="#top" :style="{ top: `${meta.top}px` }">Top</a>
    </div>
  </div>
</template>

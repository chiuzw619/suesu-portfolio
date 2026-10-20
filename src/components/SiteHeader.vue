<script setup>
import { nav, page, siteRoot } from '../site'

// Inner-page menu cells, measured from the Wix header (left edge 244px).
const innerWidths = [83, 100, 125, 143, 168, 111]
const homeWidths = [96, 113, 137, 155, 180, 120]
const widths = page === 'home' ? homeWidths : innerWidths
// The Wix contact page sits its header 10px lower than the other pages.
const offset = page === 'contact' ? 10 : 0
</script>

<template>
  <header v-if="page === 'home'">
    <h1 class="a site-name-home"><a :href="siteRoot">Wei Chu Su</a></h1>
    <nav class="a site-nav" aria-label="Main navigation" style="left: 80px; top: 140px">
      <a v-for="(item, i) in nav" :key="item.id" :href="item.href" :style="{ width: `${widths[i]}px` }" :aria-current="page === item.id ? 'page' : undefined">{{ item.label }}</a>
    </nav>
  </header>
  <header v-else>
    <p class="a site-name" :style="{ top: `${107 + offset}px` }"><a :href="siteRoot">Wei Chu Su</a></p>
    <nav class="a site-nav" aria-label="Main navigation" :style="{ left: '244px', top: `${101 + offset}px` }">
      <a v-for="(item, i) in nav" :key="item.id" :href="item.href" :style="{ width: `${widths[i]}px` }" :aria-current="page === item.id ? 'page' : undefined">{{ item.label }}</a>
    </nav>
  </header>
</template>

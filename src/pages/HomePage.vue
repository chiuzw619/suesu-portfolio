<script setup>
import { ref } from 'vue'
import { siteRoot } from '../site'
import { useRain } from '../rain'

// Hovering the illustration (tapping it on touch screens) turns on night mode.
// home-1-cutout.webp is home-1.avif with its white margin made transparent.
const canvas = ref(null)
const { setRain, isOn } = useRain(canvas)
const onEnter = (e) => { if (e.pointerType === 'mouse') setRain(true) }
const onLeave = (e) => { if (e.pointerType === 'mouse') setRain(false) }
const onTap = (e) => { if (e.pointerType !== 'mouse') setRain(!isOn()) }
</script>

<template>
  <div class="page">
    <canvas ref="canvas" class="rain" aria-hidden="true"></canvas>
    <img class="a fade home-art" :src="`${siteRoot}images/home/home-1-cutout.webp`" alt="Wei Chu Su floral illustration"
      style="left: 209px; top: 230px; width: 547px; height: 547px; object-fit: cover" @pointerenter="onEnter"
      @pointerleave="onLeave" @pointerup="onTap">
  </div>
</template>

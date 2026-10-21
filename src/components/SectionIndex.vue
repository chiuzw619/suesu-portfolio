<script setup>
import { onBeforeUnmount, onMounted, ref, shallowRef } from 'vue'

// Bottom-left index of the page's sections (<section class="blk">), labelled by
// their headings. On desktop a section's children are absolutely positioned, so
// the section has no box of its own and its top is taken from its children.
const items = shallowRef([])
const active = ref('')
const open = ref(false)
const nav = ref(null)
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')

const slug = (s, i) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || `section-${i + 1}`
const topOf = (el) => Math.min(...[...el.children].map((c) => c.getBoundingClientRect().top)) + window.scrollY

let frame = 0
const track = () => {
  frame = 0
  const line = window.scrollY + window.innerHeight * 0.35
  let current = items.value[0]?.id
  for (const it of items.value) if (topOf(it.el) <= line) current = it.id
  active.value = current
}
const onScroll = () => { if (!frame) frame = requestAnimationFrame(track) }

const go = (it) => {
  open.value = false
  window.scrollTo({ top: topOf(it.el) - 32, behavior: reduced.matches ? 'auto' : 'smooth' })
  history.replaceState(null, '', `#${it.id}`)
}
const onDocClick = (e) => { if (open.value && !nav.value?.contains(e.target)) open.value = false }
const onKey = (e) => { if (e.key === 'Escape') open.value = false }

onMounted(() => {
  const used = new Set()
  items.value = [...document.querySelectorAll('.blk')].map((el, i) => {
    const label = el.dataset.label || el.querySelector('h1, h2')?.innerText.replace(/\s+/g, ' ').trim() || `Section ${i + 1}`
    if (!el.id) {
      let id = slug(label, i)
      for (let n = 2; used.has(id); n++) id = `${slug(label, i)}-${n}`
      el.id = id
    }
    used.add(el.id)
    return { el, id: el.id, label }
  })
  track()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onKey)
  const target = items.value.find((it) => `#${it.id}` === location.hash)
  if (target) document.fonts.ready.then(() => go(target))
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onKey)
})
</script>

<template>
  <nav v-if="items.length > 1" ref="nav" class="toc" :class="{ open }" aria-label="Page sections">
    <button class="toc-toggle" type="button" :aria-expanded="open" aria-controls="toc-list" @click="open = !open">Index</button>
    <ol id="toc-list">
      <li v-for="it in items" :key="it.id">
        <a :href="`#${it.id}`" :aria-current="active === it.id ? 'location' : undefined" @click.prevent="go(it)">{{ it.label }}</a>
      </li>
    </ol>
  </nav>
</template>

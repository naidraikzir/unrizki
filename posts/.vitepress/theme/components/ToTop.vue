<script setup>
import { ref, onMounted } from 'vue'

const hidden = ref(true)

onMounted(() => {
  addEventListener('scroll', () => {
    hidden.value = window.scrollY < 1080
  })
})

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <button type="button" :class="{ hidden }" @click="scrollToTop">
    ▲
  </button>
</template>

<style lang="scss">
button {
  align-items: center;
  background: var(--color-background-dark);
  border-radius: 0.25em;
  bottom: 3em;
  color: var(--color-text-dark);
  display: flex;
  font-size: 1em;
  height: 2em;
  justify-content: center;
  margin: 0;
  opacity: 0.75;
  position: fixed;
  right: 1em;
  transition: 0.3s;
  width: 2em;

  &.hidden {
    opacity: 0;
    visibility: hidden;
  }
}
</style>

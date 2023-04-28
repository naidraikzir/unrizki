<script setup>
import { ref, onMounted } from 'vue'

const loaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    loaded.value = true
  }, 150)
})
</script>

<template>
  <div class="greet" :class="{ loaded: loaded }">
    <Content />
  </div>
</template>

<style lang="scss" scoped>
:deep(a) {
  border: 0;
  font-weight: 600;
  text-decoration: none;
}

.greet {
  opacity: 0;
  transform: scale(1.05) translateY(-1%);
  transition: 0.5s cubic-bezier(0, 0, 0, 1.5);

  &.loaded {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>

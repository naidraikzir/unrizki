<script setup>
import { format, getYear } from 'date-fns'
import { useData } from 'vitepress'
import { ref, onMounted } from 'vue'
import Utterances from './Utterances.vue'

const { frontmatter } = useData()
const loaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    loaded.value = true
  }, 150)
})

function formatDate(date = new Date()) {
  return format(
    new Date(date),
    `MMMM d${getYear(new Date()) > getYear(new Date(date)) ? ', yyyy' : ''}`
  )
}
</script>

<template>
  <div class="wrapper" :class="{ loaded: loaded }">
    <div class="head">
      <h2>{{ frontmatter.title }}</h2>
      <b>{{ formatDate(frontmatter.date) }}</b>
    </div>

    <Content />

    <hr />

    <Utterances />
  </div>
</template>

<style lang="scss" scoped>
hr {
  margin-bottom: 1em;
  opacity: 0.5;
}

.wrapper {
  min-height: calc(100vh - (2 * 63px + 2em));
  opacity: 0;
  transform: translateY(-2em);
  transition: 0.5s cubic-bezier(0, 0, 0, 1.5);

  &.loaded {
    opacity: 1;
    transform: translateY(0);
  }
}

.head {
  margin-bottom: 1.5em;

  h2 {
    margin-top: 0;
    margin-bottom: 0.25em;
  }

  b {
    font-size: 0.9em;

    &::before {
      content: '⏤';
      font-weight: 700;
      margin-right: 0.5em;
    }
  }
}
</style>

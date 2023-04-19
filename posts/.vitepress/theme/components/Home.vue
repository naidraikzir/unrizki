<script setup>
import { format, getYear } from 'date-fns'
import { ref, onMounted } from 'vue'
import { data as posts } from '../posts.data.js'

const loaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    loaded.value = true
  }, 250)
})

function formatDate(date) {
  return format(
    new Date(date),
    `MMMM d${getYear(new Date()) > getYear(new Date(date)) ? ', yyyy' : ''}`
  )
}
</script>

<template>
  <div
    class="title"
    v-for="(post, index) in posts"
    :key="index"
    :style="{ transitionDelay: (index * 0.15) + 's' }"
    :class="{ 'shown': loaded }"
  >
    <h3>
      <a :href="post.url">
        {{ post.frontmatter.title }}
      </a>
    </h3>
    <small>
      <b>{{ formatDate(post.frontmatter.date) }}</b>
    </small>
  </div>
</template>

<style lang="scss" scoped>
section {
  height: 10em;
}

.title {
  opacity: 0;
  transform: scale(1.1);
  transition:
    opacity 0.5s,
    transform 0.5s cubic-bezier(0, 0, 0, 1.5);

  &.shown {
    opacity: 1;
    transform: scale(1);
  }

  & + & {
    margin-top: 2.5em;
  }

  h3 {
    margin: 0;
  }

  a {
    border: 0;
  }
}
</style>

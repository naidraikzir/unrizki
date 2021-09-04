<template>
  <div class="wrapper">
    <article class="head">
      <h2>{{ $page.title }}</h2>
      <b>{{ formatDate($page.frontmatter.date || $page.lastUpdated) }}</b>
    </article>
    <article>
      <Content />
    </article>
  </div>
</template>

<script>
import { format, getYear } from 'date-fns'

export default {
  methods: {
    formatDate: date => format(
      new Date(date),
      `MMMM d${getYear(new Date()) > getYear(new Date(date)) ? ', yyyy' : ''}`
    )
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: calc(100vh - (2 * 63px + 2em));
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

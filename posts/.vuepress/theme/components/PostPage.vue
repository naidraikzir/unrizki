<template>
  <div
    class="wrapper"
    :class="{ 'mounted': mounted }"
  >
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
  data: () => ({
    mounted: false
  }),

  mounted() {
    setTimeout(() => {
      this.mounted = true
    }, 150)
  },

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
  opacity: 0;
  transform: translateY(-2em);
  transition: 0.5s cubic-bezier(0, 0, 0, 1.5);

  &.mounted {
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

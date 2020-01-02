<template>
  <div>
    <transition name="fade">
      <section v-if="loading">
        <loader />
      </section>
    </transition>
    <article
      class="head"
      :class="{ 'shown': !loading }"
    >
      <h2>{{ $page.title }}</h2>
      <b>{{ formatDate($page.frontmatter.date || $page.lastUpdated) }}</b>
    </article>
    <article
      class="content"
      :class="{ 'shown': !loading }"
    >
      <Content />
    </article>
  </div>
</template>

<script>
import { format, getYear } from 'date-fns'
import Loader from './Loader'

export default {
  components: {
    Loader
  },

  data: () => ({
    loading: true
  }),

  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 1000)
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
.head {
  margin-bottom: 1.5em;
  opacity: 0;
  transform: translateY(-5em);
  transition: 0.3s cubic-bezier(0, 0, 0, 1.2);

  &.shown {
    opacity: 1;
    transform: translateY(0);
  }

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

.content {
  opacity: 0;
  transform: translateY(5em);
  transition: 0.3s cubic-bezier(0, 0, 0, 1.2);

  &.shown {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

<template>
  <article>
    <section v-if="loading">
      <loader />
    </section>
    <div
      v-for="(page, index) in posts"
      :key="page.key"
      :style="{ transitionDelay: (index * 0.15) + 's' }"
      class="title"
      :class="{ 'shown': !loading }"
    >
      <div
        v-if="index > 0"
        class="separator"
      >
        ———
      </div>
      <h3>
        <router-link :to="page.path">
          {{ page.title }}
        </router-link>
      </h3>
      <small>
        <b>{{ formatDate(page.frontmatter.date || page.lastUpdated) }}</b>
      </small>
    </div>
  </article>
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

  computed: {
    posts() {
      return this.$site.pages
        .filter(p => !['/', '/about.html'].includes(p.path))
        .sort((a, b) =>
          new Date(
            b.frontmatter.date || b.lastUpdated
          ) - new Date(a.frontmatter.date || a.lastUpdated)
        )
    }
  },

  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 500)
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
section {
  height: 10em;
}

.title {
  opacity: 0;
  transform: translateX(-2em);
  transition: 0.3s cubic-bezier(0, 0, 0, 1.2);

  &.shown {
    opacity: 1;
    transform: translateX(0);
  }

  h3 {
    margin: 0;
  }

  a {
    border: 0;
  }
}

.separator {
  margin: 1.5em 0;
}
</style>

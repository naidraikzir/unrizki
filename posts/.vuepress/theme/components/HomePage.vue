<template>
  <article>
    <div
      class="title"
      v-for="(page, index) in posts"
      :key="page.key"
      :style="{ transitionDelay: (index * 0.15) + 's' }"
      :class="{ 'shown': !loading }"
    >
      <div
        class="separator"
        v-if="index > 0"
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

export default {
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
    }, 250)
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
article {
  min-height: calc(100vh - (2 * 63px + 36px));
}

section {
  height: 10em;
}

.title {
  opacity: 0;
  transform: scale(1.05);
  transition: 0.35s cubic-bezier(0, 0, 0, 1.2);

  &.shown {
    opacity: 1;
    transform: scale(1);
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

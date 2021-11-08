<template>
  <article>
    <div
      class="title"
      v-for="(page, index) in posts"
      :key="page.key"
      :style="{ transitionDelay: (index * 0.15) + 's' }"
      :class="{ 'shown': !loading }"
    >
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
  min-height: calc(
    100vh
    - (/* header */ 1 * 1.5rem + 2rem + 2rem)
    - (/* footer */ 1.5 * 0.75rem + 2rem + 2rem)
    /* line-height * font-size + y-margins + y-paddings */
  );
}

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

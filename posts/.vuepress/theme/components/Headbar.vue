<template>
  <header>
    <a href="/">
      <h3>Unr.</h3>
    </a>
    <nav>
      <router-link
        v-for="menu in menus"
        :to="{ path: menu.path }"
        :key="menu.name"
        :exact="menu.exact"
        class="item"
      >
        {{ menu.text }}
      </router-link>
    </nav>
    <a
      class="theme-toggle"
      @click.prevent="setTheme('light')"
      v-if="theme === 'dark'"
    >
      🌙
    </a>
    <a
      class="theme-toggle"
      @click.prevent="setTheme('dark')"
      v-else
    >
      ☀️
    </a>
  </header>
</template>

<script>
export default {
  data: () => ({
    theme: 'light',
    menus: [
      {
        path: '/',
        text: 'Home',
        name: 'home',
        exact: true
      },
      {
        path: '/about.html',
        text: 'About',
        name: 'about',
        exact: false
      }
    ]
  }),

  created() {
    this.detectTheme()
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', e => {
        this.setTheme(e.matches ? 'dark' : 'light')
      })
  },

  methods: {
    detectTheme() {
      const storageTheme = localStorage.getItem('theme')
      if (
        (storageTheme && storageTheme === 'dark')
        || (!storageTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        this.setTheme('dark')
      } else {
        this.setTheme('light')
      }
    },
    setTheme(theme) {
      this.theme = theme
      localStorage.setItem('theme', theme)
      document.documentElement.setAttribute('data-theme', theme)
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  margin: auto;
  margin-bottom: 2em;
  max-width: 48em;
  padding: 1em;
}

h3 {
  color: var(--color-text-default);
  margin: 0;
}

a {
  border: 0;
}

nav {
  margin-left: auto;
}

.item {
  border: 0;
  color: var(--color-text-default);
  font-weight: 700;
  margin-left: 0.75em;
  position: relative;
  transition: 0.3s;

  &.router-link-active {
    color: var(--color-text-link);
  }
}

.theme-toggle {
  display: inline-block;
  margin-left: 0.75em;
  user-select: none;
}
</style>

<script setup>
import { ref, onMounted } from 'vue'
import { useData } from 'vitepress'

const menu = [
  {
    path: '/',
    text: 'Home',
    name: ''
  },
  {
    path: '/about',
    text: 'About',
    name: 'About'
  }
]

const { page } = useData()
const theme = ref('light')

onMounted(() => {
  detectTheme()
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => setTheme(e.matches ? 'dark' : 'light'))
})

function detectTheme() {
  const storageTheme = localStorage.getItem('theme')
  if (
    (storageTheme && storageTheme === 'dark') ||
    (!storageTheme &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    setTheme('dark')
  } else {
    setTheme('light')
  }
}

function setTheme(newTheme) {
  theme.value = newTheme
  localStorage.setItem('theme', theme.value)
  document.documentElement.setAttribute('data-theme', theme.value)
}
</script>

<template>
  <header>
    <a href="/">
      <h3>Unr.</h3>
    </a>
    <nav>
      <a
        v-for="item in menu"
        :href="item.path"
        :key="item.path"
        :class="{ active: page.title === item.name }"
        class="item"
      >
        {{ item.text }}
      </a>
    </nav>
    <span
      class="theme-toggle"
      @click.prevent="setTheme(theme === 'dark' ? 'light' : 'dark')"
    />
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  margin-bottom: 2em;
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

  &::after {
    bottom: 0;
    content: '·';
    left: 0;
    line-height: 0;
    opacity: 0;
    position: absolute;
    transition: 0.3s;
  }

  &.active::after {
    opacity: 1;
  }
}

.theme-toggle {
  cursor: pointer;
  display: inline-block;
  margin-left: 0.75em;
  user-select: none;

  &::before {
    content: '☀️';
  }

  [data-theme='dark'] &::before {
    content: '🌙';
  }

  @media (prefers-color-scheme: dark) {
    &::before {
      content: '🌙';
    }

    [data-theme='light'] &::before {
      content: '☀️';
    }
  }
}
</style>

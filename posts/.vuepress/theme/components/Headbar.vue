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
  </header>
</template>

<script>
export default {
  data: () => ({
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
  })
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
  position: relative;
  transition: 0.3s;

  &.router-link-active {
    color: var(--color-text-link);
  }

  & + & {
    margin-left: 0.75em;
  }
}
</style>

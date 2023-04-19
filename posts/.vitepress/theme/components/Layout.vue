<script setup>
import { useData } from 'vitepress'
import Header from './Header.vue'
import Footer from './Footer.vue'
import Home from './Home.vue'
import Post from './Post.vue'
import About from './About.vue'
import NotFound from './NotFound.vue'

const { page, frontmatter } = useData()
</script>

<template>
  <div class="wrapper">
    <Header />
    <div class="content">
      <Home v-if="frontmatter.home" />
      <About v-else-if="page.title === 'About'" />
      <NotFound v-else-if="page.isNotFound" />
      <Post v-else />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.wrapper {
  margin: 0 auto;
  max-width: 48em;
}

.content {
  min-height: calc(
    100vh
    - (/* header */ 1 * 1.5rem + 2rem + 2rem)
    - (/* footer */ 1.5 * 0.75rem + 2rem + 2rem)
    /* line-height * font-size + y-margins + y-paddings */
  );
  padding: 1em;
}
</style>

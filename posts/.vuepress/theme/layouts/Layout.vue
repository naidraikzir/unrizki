<template>
  <div>
    <Headbar />
    <div class="content">
      <ClientOnly>
        <HomePage v-if="isHome" />
        <PostPage v-else />
      </ClientOnly>
    </div>
    <Footbar />
  </div>
</template>

<script>
import Headbar from '../components/Headbar'
import Footbar from '../components/Footbar'
import HomePage from '../components/HomePage'
import PostPage from '../components/PostPage'

export default {
  components: {
    Headbar,
    Footbar,
    HomePage,
    PostPage
  },

  computed: {
    isHome() {
      return this.$page.path === '/'
    }
  }
}
</script>

<style scoped>
.content {
  min-height: calc(
    100vh
    - (/* header */ 1 * 1.5rem + 2rem + 2rem)
    - (/* footer */ 1.5 * 0.75rem + 2rem + 2rem)
    /* line-height * font-size + y-margins + y-paddings */
  );
}
</style>

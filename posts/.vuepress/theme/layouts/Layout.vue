<template>
  <div>
    <Headbar />
    <ClientOnly>
      <HomePage v-if="isHome" />
      <PostPage v-else />
    </ClientOnly>
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

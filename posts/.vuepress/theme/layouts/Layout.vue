<template>
  <div>
    <Headbar />
    <HomePage v-if="isHome" />
    <PostPage v-else />
  </div>
</template>

<script>
import Headbar from '../components/Headbar'
import HomePage from '../components/HomePage'
import PostPage from '../components/PostPage'

export default {
  components: {
    Headbar,
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

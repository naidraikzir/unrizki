<template>
  <div class="wrapper">
    <Headbar />
    <div
      v-if="mounted"
      class="greet"
      :class="{ 'mounted': mounted }"
    >
      <Content />
    </div>
    <Footbar />
  </div>
</template>

<script>
import Headbar from '../components/Headbar'
import Footbar from '../components/Footbar'

export default {
  components: {
    Headbar,
    Footbar
  },

  data: () => ({
    mounted: false
  }),

  mounted() {
    setTimeout(() => {
      this.mounted = true
    }, 100)
  },

  beforeRouteLeave(to, from, next) {
    this.mounted = false
    setTimeout(() => {
      next()
    }, 1500)
  }
}
</script>

<style lang="scss" scoped>
/deep/ a {
  border: 0;
  font-weight: 600;
  color: #222;
  text-decoration: none;
}

.wrapper {
  margin: auto;
  max-width: 52em;
}

.greet {
  min-height: calc(100vh - (2 * 63px + 36px));
  padding: 1em;
}
</style>

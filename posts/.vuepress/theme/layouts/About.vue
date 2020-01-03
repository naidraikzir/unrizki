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
  </div>
</template>

<script>
import Headbar from '../components/Headbar'

export default {
  components: {
    Headbar
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
  padding: 1em;
}
</style>

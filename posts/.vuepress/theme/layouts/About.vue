<template>
  <div class="wrapper">
    <Headbar />
    <div
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
    }, 150)
  }
}
</script>

<style lang="scss" scoped>
/deep/ a {
  border: 0;
  font-weight: 600;
  text-decoration: none;
}

.wrapper {
  margin: auto;
  max-width: 48em;
}

.greet {
  min-height: calc(
    100vh
    - (/* header */ 1 * 1.5rem + 2rem + 2rem)
    - (/* footer */ 1.5 * 0.75rem + 2rem + 2rem)
    /* line-height * font-size + y-margins + y-paddings */
  );
  opacity: 0;
  padding: 1em;
  transform: scale(1.05) translateY(-1%);
  transition: 0.5s cubic-bezier(0, 0, 0, 1.5);

  &.mounted {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>

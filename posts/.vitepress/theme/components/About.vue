<template>
  <div
    class="greet"
    :class="{ 'mounted': mounted }"
  >
    <Content />
  </div>
</template>

<script>
export default {
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
:deep(a) {
  border: 0;
  font-weight: 600;
  text-decoration: none;
}

.greet {
  opacity: 0;
  transform: scale(1.05) translateY(-1%);
  transition: 0.5s cubic-bezier(0, 0, 0, 1.5);

  &.mounted {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>

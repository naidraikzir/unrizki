<template>
  <article>
    <span>©</span>
    <b>Unrizki</b>
    {{ new Date().getFullYear() }}
  </article>
</template>

<style lang="scss" scoped>
article {
  text-align: center;
}

span {
  display: inline-block;
  transform: scaleX(-1);
}
</style>

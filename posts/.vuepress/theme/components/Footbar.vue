<template>
  <article>
    <div>
      <span>©</span>
      <b>Unrizki</b>
      {{ new Date().getFullYear() }}
    </div>
  </article>
</template>

<style lang="scss" scoped>
article {
  text-align: right;

  div {
    font-size: 0.75em;
  }
}

span {
  display: inline-block;
  transform: scaleX(-1);
}
</style>

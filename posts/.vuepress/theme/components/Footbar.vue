<template>
  <footer>
    <div>
      <span>©</span>
      <b>Unrizki</b>
      {{ new Date().getFullYear() }}
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  margin: auto;
  margin-top: 2em;
  max-width: 48em;
  padding: 1em;
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

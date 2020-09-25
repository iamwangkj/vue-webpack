<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

input {
  border-width: 0;
  // border-bottom: 1px solid #000;
  border-bottom-width: 2px;
}
#app {
  position: relative;
}
</style>

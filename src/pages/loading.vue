<template>
  <div>
    <InfiniteLoading spinner="spiral"></InfiniteLoading>
    <InfiniteLoading />

    <div class="loading">
      <div class="circle"></div>
    </div>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
export default {
  components: {
    InfiniteLoading
  }
}
</script>

<style>
html,body {
  margin: 0;
  padding: 0;
  height: 100%;
}
.loading {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.loading > .circle {
  width: 28px;
  height: 28px;
  border: 1px solid #999;
  border-radius: 50%;
  margin: 0 auto;
  position: relative;
  animation: loading-rotating 1.5s ease infinite;
}
.loading > .circle::before {
  content: "";
  display: block;
  width: 6px;
  height: 6px;
  background-color: #999;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 50%;
  margin-top: -3px;
  margin-left: -3px;
}
@keyframes loading-rotating {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
</style>

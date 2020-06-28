<template>
  <div class="btn-wrapper">
    <div class="btn">预览</div>
    <div class="btn bd">预览</div>
    <div class="btn clip">预览clip</div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.btn-wrapper {
  background-color: pink;
}

.btn {
  width: 128px;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  background-color: #fff;
  text-align: center;
}

.bd {
  /* border: 2px solid transparent; */
  /* background-color: #ffcc00; */
  background: linear-gradient(#fff, #fff) content-box, linear-gradient(#e66465, #9198e5) border-box;
}

.clip {
  padding: 5px;
  border: 1px solid transparent;
  /* background-color: transparent;
  background-clip: content-box; */
  background-image: linear-gradient(#eee, #eee), linear-gradient(141deg, rgba(44,107,255,1),rgba(117,23,255,1)); /* 模拟渐变边框 */
  background-clip: padding-box, border-box;
  /* background-origin: border-box; */
}
</style>

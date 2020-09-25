<template>
  <div class="canvas-box">
    <p>下面是canvas</p>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  mounted () {
    const canvas = document.querySelector('#canvas')
    const ctx = canvas.getContext('2d')
    ctx.scale(0.5, 0.5)
    ctx.rotate(45)
    ctx.font = '28px Arial'
    ctx.fillStyle = '#2E2D2D'
    ctx.fillText('wangkj', 0, 28) // 从字体左下角开始算
  },
  methods: {}
}
</script>

<style>
.canvas-box {
  position: relative;
  width: 100%;
  overflow: hidden;
}
canvas {
  /* position: fixed; */
  position: relative;
  /* left: 50%; */
  top: 0;
  background-color: #ff00cc;
}
</style>

<template>
  <div class="">
    <h2>计算ppi</h2>
    <div>
      <input type="number" class="input" placeholder="长(px)" v-model="w" @blur="getPPI">X
      <input type="number" class="input" placeholder="宽(px)" v-model="h" @blur="getPPI">
      <span>英寸:</span>
      <input type="number" placeholder="大小(英寸)" v-model="inch" @blur="getPPI">
      <div>结果：{{res}} ppi</div>
      <p>参考：</p>
      <p>视网膜：326ppi</p>
      <p>LG 21:9：95.80ppi</p>
      <p>imac 27：219.57ppi</p>
    </div>
  </div>
</template>
<script>

export default {
  name: 'tools',
  data () {
    return {
      w: '',
      h: '',
      inch: 27,
      res: 0
    }
  },
  mounted () {
  },
  methods: {
    getPPI () {
      if (this.w && this.h && this.inch) {
        this.res = Math.sqrt(this.w * this.w + this.h * this.h) / this.inch
      } else {
        console.log('输入数据不完整')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.input {
  width: 50px;
}
</style>

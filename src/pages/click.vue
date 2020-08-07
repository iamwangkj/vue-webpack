<template>
  <div class="a">
    <button @click="count">点我</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 0
    }
  },
  methods: {
    count () {
      this.num = ++this.num
      console.log('this.num=', this.num)
    }
  }
}
</script>

<style>

</style>

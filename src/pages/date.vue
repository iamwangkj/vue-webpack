<template>
  <div class="">
    <p>new Date('2020-04-04 20:20:00')在ios无法获取到时间戳，报错了</p>
    <p>但是，new Date('2020-04-04')可以获取到时间戳</p>
    <p>{{time}}</p>
    <p>new Date('2020-04-04 20:20:00')：{{time1}}</p>
    <p>new Date('2020-04-04')：{{time2}}</p>
  </div>
</template>
<script>
import moment from 'moment'

export default {
  name: 'fontSize',
  data () {
    return {
      time: new Date(),
      time1: new Date('2020-04-04 20:20:00'),
      time2: new Date('2020-04-04')
    }
  },
  mounted () {
    console.log('moment的使用例子：')
    console.log(moment('2020-04-04  16:00:00').hour())
    console.log(moment('2020-04-04  16:00:00').hours())
    console.log(moment('2020-04-04  16:00:00').date())
    console.log(moment('2020-04-04  16:00:00').month())
  }
}
</script>
<style lang="scss">
</style>

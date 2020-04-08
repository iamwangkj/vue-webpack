<template>
  <div class="">
    <p>{{isLowPhone}}</p>
  </div>
</template>
<script>
import { isLowPhone } from '@/utils/phone'

export default {
  name: 'fontSize',
  data () {
    return {
      isLowPhone: false
    }
  },
  mounted () {
    this.isLowPhone = isLowPhone()
  }
}
</script>
<style lang="scss">
</style>

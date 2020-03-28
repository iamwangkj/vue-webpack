<template>
  <div class="">
    <div class="nav-item" v-for="(item) in navList" :key="item.path" @click="toPage(item)">
      {{item.path}}
      <!-- <router-link :to="{ name: item.name, params: {}}">{{item.name}}</router-link> -->
    </div>
  </div>
</template>
<script>
import { routes } from '../router/index'
export default {
  name: 'home',
  data () {
    return {
      navList: routes.filter((item) => item.path !== '/')
    }
  },
  methods: {
    toPage (item) {
      const { path } = item
      this.$router.push(path)
    }
  }
}
</script>
<style lang="scss" scoped>
.nav-item {
  width: fit-content;
  background-color: #09bb07;
  color: #fff;
  border-radius: .5em;
  margin-bottom: 1em;
  padding: .5em;
}
</style>

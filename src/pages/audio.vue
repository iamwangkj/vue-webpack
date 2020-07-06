<template>
  <div>
    <audio id="chuyu" controls preload>
      <source src="http://downsc.chinaz.net/Files/DownLoad/sound1/202007/13088.wav" />
    </audio>
    <button @click="playA">playA</button>
  </div>
</template>

<script>
export default {
  mounted () {},
  methods: {
    playA () {
      const audio1 = document.getElementById('chuyu')
      audio1.play()
    }
  }
}
</script>

<style>
</style>

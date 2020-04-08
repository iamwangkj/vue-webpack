<template>
  <div class>
    <h1>video</h1>
    <div style="height: 200px">
      <p>结论：video在用户还没交互前，是不能直接调用play()</p>
    </div>
    <video
      id="live"
      src="https://storage.jd.com/project-video/video-swiper/1.mp4"
      style="object-fit:fill"
      webkit-playsinline="true"
      playsinline
      loop
      preload
    ></video>
  </div>
</template>
<script>

export default {
  name: 'fontSize',
  data () {
    return {
      
    }
  },
  mounted () {
    document.querySelector('#live').play()
  },
  methods: {
  }
}
</script>
<style lang="scss">
#live {
  width: 300px;
  height: 200px;
}
</style>

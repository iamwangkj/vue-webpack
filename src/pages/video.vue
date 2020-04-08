<template>
  <div class>
    <h1>video</h1>
    <div style="height: 200px">
      <p>结论：video在用户还没交互前，是不能直接调用play()，但是静音情况下，是可以的！！！</p>
    </div>
    <video
      id="live"
      src="https://storage.jd.com/project-video/video-swiper/1.mp4"
      style="object-fit:fill"
      webkit-playsinline="true"
      playsinline
      loop
      muted
    ></video>
  </div>
</template>
<script>

export default {
  name: 'fontSize',
  data () {
    return {
      dom: document.querySelector('#live')
    }
  },
  mounted () {
    const dom = document.querySelector('#live')
    dom.addEventListener('canplay', () => {
      console.log('canplay')
      dom.play()
    })
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

<template>
  <div class="video">
    <video-player  class="video-player vjs-custom-skin"
     ref="videoPlayer"
     :playsinline="true"
     :options="playerOptions"
    ></video-player>
    <div class="info">
      <p class="info-title c-hide">{{info.videoName}}</p>
      <div class="flex-box info-box">
        <p>播放量<span>{{info.views}}</span></p>
        <p>评论量<span>{{info.comments}}</span></p>
        <p>点赞量<span>{{info.praise}}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)
export default {
  name: 'Video',
  props: {
    info: Object
  },
  data () {
    return {
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], // 播放速度
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: '',
          src: '' // url地址
        }],
        poster: '', // 你的封面地址
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        }
      },
      curl: '',
      img: ''
    }
  },
  watch: {
    info (val) {
      this.playerOptions.sources[0].src = val.videoUrl
      this.playerOptions.poster = val.images
    }
  }
}
</script>

<style scoped>
  .info {
    padding: 0.26rem;
    background: #fff;
  }
  .info-title {
    font-size: 0.42rem;
  }
  .info-box p {
    font-size: 0.32rem;
    margin-top: 10px;
    color: #aeb1bf;
    margin-right: 10px;
  }
  .info-box p span {
    color: #20b8b0;
    margin-left: 5px;
  }
  .video >>> .vjs-custom-skin > .video-js .vjs-big-play-button {
    border-radius: 50%;
    width: 1.33rem;
    height: 1.33rem !important;
    line-height: 1.33rem !important;
    margin-left: -0.66rem;
    margin-top: -0.66rem !important;
  }
</style>

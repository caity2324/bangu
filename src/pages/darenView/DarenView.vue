<template>
  <div class="views">
    <daren-header :msg="msg" @backPrev="backPrev"></daren-header>
    <div class="wrap">
      <daren-video :info="info"></daren-video>
      <daren-guess :guess="guess"></daren-guess>
    </div>
  </div>
</template>

<script>
import DarenHeader from '../common/Header'
import DarenVideo from './component/Video'
import DarenGuess from './component/Guess'
export default {
  name: 'Views',
  components: {
    DarenHeader, DarenVideo, DarenGuess
  },
  data () {
    return {
      msg: {
        type: true,
        title: ''
      },
      id: '',
      info: {},
      guess: []
    }
  },
  methods: {
    // 上一页
    backPrev () {
      this.$router.go(-1)
    },
    // 获取视频信息
    getVideo () {
      var that = this
      that.$axios.post('/api/pc/v1/dynamic/videoDetail', {id: that.id}).then(res => {
        console.log(res)
        var ret = res.data
        if (ret.code === '200') {
          that.info = ret.data.dynamic
          that.guess = ret.data.guessRec
          that.msg.title = ret.data.dynamic.videoName
        }
      })
    }
  },
  mounted () {
    this.id = this.$route.params.id // 接收列表传递的数据
    console.log(this.id)
    this.getVideo()
  }
}
</script>

<style scoped>
  .wrap {
    padding-top: 1.06rem;
  }
</style>

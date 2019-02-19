<template>
  <div>
    <div class="star mb-10" :class="starType">
      <span class="star-item iconfont" v-for="(itemClass, index) in itemClassess" :class="itemClass" :key="index"></span>
      <span class="c-num">{{score}}%</span>
    </div>
  </div>
</template>

<script>
const LENGTH = 5// 星星个数
const CLS_ON = 'on'// 满星状态
const CLS_HALF = 'half'// 半星状态
const CLS_OFF = 'off'// 无星状态

export default {
  name: 'Start',
  props: {
    size: Number,
    score: Number
  },
  data () {
    return {
      newScore: this.score / 20
    }
  },
  computed: {
    starType () { // 设置星星尺寸
      return 'star-' + this.size
    },
    itemClassess () {
      var that = this
      let result = []// 记录状态的数组
      if (that.newScore > 5) {
        that.newScore = 5
      }
      let score = Math.floor(that.newScore * 2) / 2
      let hasDecimal = score % 1 !== 0
      let integer = Math.floor(score)// 向下取整
      // 全星
      for (let i = 0; i < integer; i++) {
        result.push(CLS_ON)
      }
      // 半星
      if (hasDecimal) {
        result.push(CLS_HALF)
      }
      // 无星
      for (var i = 0; i < 5; i++) {
        if (result.length < LENGTH) {
          result.push(CLS_OFF)
        }
      }
      for (var j in result) {
        if (result[j] === 'half') {
          result[j] = 'icon-unie615 half'
        }
        if (result[j] === 'on') {
          result[j] = 'icon-A-content-icon-starFull on'
        }
        if (result[j] === 'off') {
          result[j] = 'icon-A-content-icon-starFull off'
        }
      }
      return result
    }
  }
}
</script>

<style>
  .star {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
  }
  .c-num {
    color: #d6d6d6
  }
  .star-48 .star-item {
    margin-right: 0.05rem;
    background-repeat: no-repeat;
    background-size: 0.53rem 0.53rem;
  }
  .star-48 .star-item:last-child {
      margin-right: 0px;
  }
  .star-48 .star-item.on {
    color: #1ac3be
  }
  .star-48 .star-item.half {
      color: #1ac3be
  }
  .star-48 .star-item.off {
      color: #d6d6d6
  }
  .star-36 .star-item {
    margin-right: 0.0.5rem;
    background-repeat: no-repeat;
    background-size: 0.4rem 0.4rem;
  }
  .star-36 .star-item:last-child {
      margin-right: 0px;
  }
  .star-36 .star-item:last-child {
      margin-right: 0px;
  }
  .star-36 .star-item.on {
      color: #1ac3be
  }
  .star-36 .star-item.half {
      color: #1ac3be
  }
  .star-36 .star-item.off {
      color: #d6d6d6
  }
  .star-24 .star-item {
    margin-right: 0.05rem;
    background-repeat: no-repeat;
    background-size: 0.26rem 0.26rem;
  }
  .star-24 .star-item:last-child {
      margin-right: 0px;
  }
  .star-24 .star-item:last-child {
      margin-right: 0px;
  }
  .star-24 .star-item.on {
    color: #1ac3be;
  }
  .star-24 .star-item.half {
      color: #1ac3be;
  }
  .star-24 .star-item.off {
      color: #d6d6d6;
  }
</style>

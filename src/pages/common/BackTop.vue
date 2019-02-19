<template>
  <div class="top" @click="goTop" v-show="goTopShow">
    <i class="iconfont icon-top c-white-color"></i>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      scrollTop: '',
      goTopShow: false
    }
  },
  methods: {
    goTop () {
      var timer = null
      var _that = this
      cancelAnimationFrame(timer)
      timer = requestAnimationFrame(function fn () {
        if (_that.scrollTop > 0) {
          _that.scrollTop = -150
          document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop
          timer = requestAnimationFrame(fn)
        } else {
          cancelAnimationFrame(timer)
          _that.goTopShow = false
        }
      })
    },
    handleScroll () {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (this.scrollTop > 500) {
        this.goTopShow = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
  .top {
    position: fixed;
    bottom: 0.26rem;
    right: 0.26rem;
    background: rgba(34,34,34,0.8);
    border-radius: 50%;
    padding: 0.26rem
  }
</style>

<template>
  <div class="home">
    <home-header :msg="msg"></home-header>
    <div class="wrap">
      <home-banner :bannerList="bannerList"></home-banner>
      <home-item></home-item>
      <home-like :likeList="likeList"></home-like>
    </div>
  </div>
</template>
<script>
import HomeHeader from '../common/Header'
import HomeBanner from '../common/Banner'
import HomeItem from './component/Item'
import HomeLike from './component/Like'
export default {
  name: 'Home',
  components: {
    HomeHeader, HomeBanner, HomeItem, HomeLike
  },
  data () {
    return {
      msg: {
        type: false,
        title: '帮游旅游'
      },
      bannerList: [],
      likeList: []
    }
  },
  mounted () {
    this.banner()
    this.like()
  },
  methods: {
    // banner
    banner () {
      this.$axios.post('/api/pc/v1/subjects/indexRollAll').then(res => {
        // console.log(res)
        var ret = res.data
        if (ret.code === '200') {
          this.bannerList = ret.data
        }
      })
    },
    // 猜你喜欢
    like () {
      this.$axios.post('/api/pc/v1/subjects/home', {cityId: 235}).then(res => {
        console.log(res)
        var ret = res.data
        if (ret.code === '200') {
          this.likeList = ret.data.guess
          console.log(this.likeList)
        }
      })
    }
  }
}
</script>

<style scoped>
  .wrap {
    padding-top: 1.06rem
  }
</style>

<template>
  <div class="wrap">
    <detail-header :msg="msg" @backPrev="backPrev"></detail-header>
    <div class="container">
      <detail-banner :bannerList="bannerList"></detail-banner>
     <detail-desc :descList="descList"></detail-desc>
    </div>
  </div>
</template>

<script>
import DetailHeader from '../common/Header'
import DetailBanner from '../common/Banner'
import DetailDesc from './component/Desc'
export default {
  name: 'DepartureDetail',
  components: {
    DetailHeader, DetailBanner, DetailDesc
  },
  data () {
    return {
      msg: {
        type: true,
        title: '出境游'
      },
      id: '',
      bannerList: [],
      descList: {}
    }
  },
  methods: {
    // 上一页
    backPrev () {
      this.$router.go(-1)
    },
    // banner
    getBannerList () {
      var that = this
      that.$axios.post('/api/pc/v1/lines/detail', {lineId: that.id}).then(res => {
        var ret = res.data
        if (res.status === 200) {
          that.bannerList = ret.picData
          that.descList = ret
        }
      })
    }
  },
  mounted () {
    this.id = this.$route.params.id // 接收列表传递的数据
    this.getBannerList()
  }
}
</script>

<style scoped>
  .container {
    padding-top: 1.06rem
  }
</style>

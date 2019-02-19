<template>
  <div class="detail">
    <daren-header :msg="msg" @backPrev="backPrev"></daren-header>
    <div class="wrap">
      <daren-info :info="info"></daren-info>
      <daren-list :list="list" @changeList="changeList"></daren-list>
    </div>
    <daren-top></daren-top>
  </div>
</template>

<script>
import DarenHeader from '../common/Header'
import DarenInfo from './component/Info'
import DarenList from './component/List'
import DarenTop from '../common/BackTop'
export default {
  name: 'Detail',
  components: {
    DarenHeader, DarenInfo, DarenList, DarenTop
  },
  data () {
    return {
      msg: {
        type: true,
        title: '达人主页'
      },
      info: {},
      page: 1,
      pageSize: 10,
      type: 0,
      expertId: '',
      list: [],
      total: 0
    }
  },
  methods: {
    // 上一页
    backPrev () {
      this.$router.go(-1)
    },
    // 获取达人数据
    getData () {
      var that = this
      that.$axios.post('/api/pc/v1/darens/darenInfo', {anchorId: that.expertId}).then(res => {
        var ret = res.data
        if (ret.code === '200') {
          that.info = ret.data.info
          that.msg.title = that.info.nickName + '达人主页'
        }
      })
    },
    changeList (busy) {
      var that = this
      var newPage = 0
      if (that.total % 10 === 0) {
        newPage = parseInt(that.total / 10)
      } else {
        newPage = parseInt(that.total / 10) + 1
      }
      if (that.page === newPage) {
        that.$toast({
          message: '我也是有底线的',
          position: 'bottom',
          duration: 3000
        })
      } else {
        that.$indicator.open({
          text: '疯狂加载中...',
          spinnerType: 'fading-circle'
        })
        that.$axios.post('/api/pc/v1/dynamic/dataList', {page: that.page++, pageSize: that.pageSize, type: that.type, expertId: that.expertId}).then(res => {
          var ret = res.data
          if (ret.code === '200') {
            that.total = ret.data.total
            busy = false
            that.$indicator.close()
            var arrayList = []
            arrayList = that.list
            for (var i = 0; i < ret.data.data.length; i++) {
              arrayList.push(ret.data.data[i])
            }
            that.list = arrayList
          }
        })
      }
    }
  },
  mounted () {
    this.expertId = this.$route.params.id // 接收列表传递的数据
    this.getData()
  }
}
</script>

<style scoped>
  .wrap {
    padding-top: 1.06rem
  }
  .wrap-banner {
    display:block;
    width: 100%;
    height: 0;
    padding-bottom: 66.67%;
    background: #d6d6d6;
    overflow: hidden;
  }
</style>

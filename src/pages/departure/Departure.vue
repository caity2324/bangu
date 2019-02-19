<template>
  <div class="wrap">
    <departure-header :msg="msg" @backPrev="backPrev"></departure-header>
    <div class="container">
      <departure-list :lists="list" @changeList="changeList"></departure-list>
    </div>
  </div>
</template>

<script>
import DepartureHeader from '../common/Header'
import DepartureList from './component/List'
export default {
  name: 'Departure',
  components: {
    DepartureHeader, DepartureList
  },
  data () {
    return {
      msg: {
        type: true,
        title: '出境游'
      },
      list: [],
      page: 1,
      pageSize: 10,
      type: 0,
      total: 0,
      linetype: 1,
      sort: 0
    }
  },
  methods: {
    // 上一页
    backPrev () {
      this.$router.go(-1)
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
        that.$axios.post('/api/pc/v1/search/lines', {page: that.page++, pageSize: that.pageSize, sort: that.type, linetype: that.linetype}).then(res => {
          console.log(res)
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
            console.log(that.list)
          }
        })
      }
    }
  }
}
</script>

<style scoped>
  .container {
    padding-top: 1.06rem
  }
</style>

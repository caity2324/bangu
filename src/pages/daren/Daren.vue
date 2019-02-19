<template>
  <div class="daren">
    <daren-header :msg="msg" @backPrev="backPrev"></daren-header>
  <!--  <div class="nav flex-box c-white">
      <mt-button
        size="small"
        @click.native.prevent="handleNav"
        class="nav-item"
        v-for="item of nav"
        :key="item.id"
        :data-id="item.id"
        :class="(navIndex == item.id ? 'active' : '')"
      >{{item.title}}</mt-button>
    </div> -->
    <div class="page-tab-container nav-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active">
        <mt-tab-container-item id="3">
          <daren-list :lists="list" @changeList="changeList"></daren-list>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <daren-top></daren-top>
  </div>
</template>

<script>
import DarenHeader from '../common/Header'
import DarenList from './component/List'
import DarenTop from '../common/BackTop'
export default {
  name: 'Daren',
  components: {
    DarenHeader, DarenList, DarenTop
  },
  data () {
    return {
      msg: {
        type: true,
        title: '旅游达人'
      },
      active: '3',
      nav: [
        {
          id: 3,
          title: '综合排行'
        },
        {
          id: 2,
          title: '浏览量'
        },
        {
          id: 1,
          title: '关注量'
        }
      ],
      navIndex: 3, // 导航栏的id,默认显示第一个
      list: [],
      page: 1,
      pageSize: 10,
      total: 0,
      lookList: [], // 浏览量
      attentList: [], // 关注量
      busys: false
    }
  },
  methods: {
    // 上一页
    backPrev () {
      this.$router.go(-1)
    },
    // 切换导航
    handleNav (e) {
      this.navIndex = e.target.dataset.id
      this.active = e.target.dataset.id
      this.page = 1
      if (this.navIndex === '2') {
        this.changeList(this.busys, Number(this.navIndex))
        // this.$refs.look.innerText = '111'
      } else if (this.navIndex === '1') {
        this.changeList(this.busys, Number(this.navIndex))
      }
    },
    // 列表
    changeList (busy, order) {
      var that = this
      console.log(busy)
      var newPage = 0
      if (that.total % 10 === 0) {
        newPage = parseInt(that.total / 10)
      } else {
        newPage = parseInt(that.total / 10) + 2
      }
      console.log('page:' + that.page)
      console.log('newPage:' + newPage)
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
        that.$axios.post('/api/pc/v1/search/PC_searchDaren', {page: that.page++, pageSize: that.pageSize, order: order || 3}).then(res => {
          console.log(res)
          if (res.data.code === '200') {
            busy = false
            that.$indicator.close()
            that.total = res.data.data.total
            console.log(that.total)
            var arrayList = []
            if (order === 1) {
              arrayList = that.attentList
              for (var i = 0; i < res.data.data.data.length; i++) {
                arrayList.push(res.data.data.data[i])
              }
              that.attentList = arrayList
            } else if (order === 2) {
              arrayList = that.lookList
              for (var j = 0; j < res.data.data.data.length; j++) {
                arrayList.push(res.data.data.data[j])
              }
              that.lookList = arrayList
            } else {
              arrayList = that.list
              for (var x = 0; x < res.data.data.data.length; x++) {
                arrayList.push(res.data.data.data[x])
              }
              that.list = arrayList
            }
            busy = true
          }
        })
      }
    }
  }
}
</script>

<style scoped>
  .daren {
    padding-top: 1.06rem;
  }
  .item {
    display: inline-block;
  }
  .nav {
    /* padding: 10px 0; */
    justify-content: space-around;
    /* margin-bottom: 0.26rem; */
    position: fixed;
    top: 1.06rem;
    left: 0;
    z-index: 10;
    width: 100%;
    border-bottom: 0.02rem solid #d6d6d6
  }
  .link {
    color: inherit;
    padding: 20px;
    display: block;
  }
  .nav-item {
    background: #fff;
    border: none;
    box-shadow: none;
    border-bottom: 0.08rem solid transparent;
    border-radius: 0;
    height: 1.2rem;
    width: 33.3%
  }
  .nav-item.active {
    border-bottom-color: #1ac3be;
    color: #1ac3be;
  }
  .nav-container {
    /* padding-top: 1.33rem */
  }
</style>

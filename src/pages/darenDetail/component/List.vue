<template>
  <div class="list">
    <div class="title">动态</div>
    <div class="item"
         v-infinite-scroll="loadMore"
         infinite-scroll-distance="10"
         infinite-scroll-disabled="busy"
    >
      <router-link tag="div" :to="{name: 'DarenViews', params:{id: item.dynamicsId}}" class="item-list" v-for="(item, index) of list" :key="index">
        <div class="item-img">
          <img :src="item.cover" alt="" width="100%">
          <div class="item-bottom">
            <p><i></i>{{item.positionName}}</p>
            <p>{{item.videoShow}}人浏览</p>
          </div>
        </div>
        <div class="item-content">
          <div class="content-name c-hide">{{item.title}}</div>
          <div class="content-box flex-box">
            <div class="content-box-info flex-box">
              <img :src="item.userPhoto" alt="" width="100%" class="info-img">
              <div class="info-desc flex-1">
                <p class="info-desc-name">{{item.userName}}</p>
                <p class="info-desc-common">{{item.comments}}人评论</p>
              </div>
            </div>
            <div class="info-zan"><i></i>{{item.praise}}</div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    list: Array
  },
  data () {
    return {
      busy: false
    }
  },
  methods: {
    loadMore () {
      var that = this
      that.$emit('changeList', that.busy)
    }
  }
}
</script>

<style scoped>
  .list {
    margin-top: 0.26rem;
    padding: 0.26rem 0;
    background: #fff;
  }
  .title {
    padding: 0.26rem;
  }
  .item-img {
    width: 100%;
    height: 0;
    padding-bottom: 66.67%;
    background: #d6d6d6;
    overflow: hidden;
    position: relative;
  }
  .item-img img {
    min-height: 6.66rem;
  }
  .item-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1));
    width: 100%;
    height: 1.06rem;
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 0 0.26rem;
    box-sizing: border-box;
    line-height: 1.06rem;
  }
  .item-bottom i {
    display: inline-block;
    background: url("http://www.1b1u.com/static/img/newpc/dw2.png") no-repeat;
    width: 0.29rem;
    height: 0.37rem;
    vertical-align: middle;
    margin-right: 0.13rem;
  }
  .item-bottom p {
   font-size: 0.37rem;
  }
  .item-content{
    padding: 0.26rem;
  }
  .info-img {
    width: 1.06rem;
    height: 1.06rem;
    background: #d6d6d6;
    border-radius: 50%;
    margin-right: 0.26rem;
  }
  .content-box {
    margin-top: 0.52rem;
  }
  .content-box {
    justify-content: space-between;
    align-items: center;
  }
  .info-desc-name {
    font-size: 0.42rem;
  }
  .info-desc-common {
    margin-top: 0.26rem;
    font-size: 0.32rem;
    color: #aeb1bf;
  }
  .info-zan {
    display: flex;
    align-items: center;
  }
  .info-zan i {
    display: inline-block;
    width: 0.7rem;
    height: 0.7rem;
    background: url('http://www.1b1u.com/static/img/newpc/zan.png') no-repeat;
    margin-right: 0.13rem;
    background-size: cover;
  }
</style>

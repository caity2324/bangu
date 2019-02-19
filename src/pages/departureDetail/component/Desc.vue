<template>
  <div class="desc c-white">
    <div class="item">
      <div class="title">线路特色</div>
        <div class="wrap wrap-content" v-html="tese"></div>
        <div class="title">行程安排</div>
        <div class="content" v-for="(item, index) of list" :key="index">
          <div class="title-small">Day {{item.day}}</div>
          <div class="addr title-common" v-html="item.title"></div>
          <div class="title-small">餐饮</div>
          <ul class="eat-wrap">
            <li>早餐：{{item.breakfirst}}</li>
            <li>午餐：{{item.lunch}}</li>
            <li>晚餐：{{item.supper}}</li>
          </ul>
          <div class="title-small">住宿</div>
          <div class="content-desc">{{item.hotel}}</div>
          <div class="title-small">线路</div>
          <div class="content-desc wrap-desc">{{item.jieshao}}</div>
          <img :src="items.pic" alt="" width="100%" class="content-img" v-for="(items, cindex) of item.picArr" :key="cindex">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailDesc',
  props: {
    descList: Object
  },
  data () {
    return {
      tese: '',
      list: ''
    }
  },
  watch: {
    descList (val) {
      this.tese = val.lineData.features
      this.list = val.lineTripData
    }
  }
}
</script>

<style scoped>
  .desc {
    margin-top: 0.26rem;
    padding: 0.26rem;
  }
  .title {
    font-size: 0.42rem;
  }
  .wrap {
    box-sizing: border-box;
    padding: 0.26rem;
    line-height: 0.66rem;
    font-size: 0.32rem !important;
  }
  .content-desc {
    font-size: 0.37rem;
  }
  .title-small {
    font-size: 0.37rem;
    padding: 0.26rem 0;
  }
  .title-common {
    padding: 0.13rem 0rem;
    font-size: 0.37rem;
    display: flex;
    align-items: center;
  }
  .content {
    padding: 0 0.26rem;
  }
  .eat-wrap li {
    line-height: 0.4rem;
    color: #222;
    font-size: 0.32rem;
  }
  .content-desc {
    color: #222;
    font-size: 0.32rem;
  }
  .content-img {
    display: block;
   margin-top: 0.26rem;
  }
  .wrap-desc {
    line-height: 0.53rem;
  }
  .desc >>> .addr img {
    margin: 0 0.13rem;
    display: inline-block;
  }
  .comment {
    margin-top: 0.52rem;
  }
  .comment-wrap li{
    border-bottom: 0.02rem solid #d6d6d6;
    padding: 0.26rem 0;
  }
  .wrap-avatar {
    display: block;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    background: #d6d6d6;
    margin-right: 0.53rem;
  }
  .desc-name {
    font-size: 0.42rem;
  }
  .desc-common {
    margin: 0.26rem 0;
    font-size: 0.37rem;
  }
  .desc-time {
    color: #aeb1bf;
  }
  .desc >>> .wrap-content img {
    width: 100%;
    display:block;
  }
</style>

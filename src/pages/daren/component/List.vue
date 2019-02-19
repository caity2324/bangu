<template>
  <div class="list c-white"
    v-infinite-scroll="loadMore"
    infinite-scroll-distance="10"
    infinite-scroll-disabled="busy">
    <router-link tag='div' class="list-item flex-box" v-for="(item, index) of lists" :key="index" :to="{name: 'DarenDetail', params:{id: item.anchor_id}}">
      <img :src="item.litpic" alt="item.talk" class="item-img">
      <div class="item-content flex-1">
        <div class="content-name">{{item.nickname}}</div>
        <div class="content-sign">
          <span class="sign-daren sign-icon" ></span>
          <span class="sign-gj sign-icon" v-if="(item.userType == 3 ? true : false)"></span>
        </div>
        <div class="content-desc c-hide">{{item.talk}}</div>
        <div class="content-classify flex-box">
          <div class="classify-item">浏览量<span>{{item.viewCount}}</span></div>
          <div class="classify-item">关注量<span>{{item.attentionCount}}</span></div>
          <div class="classify-item">动态数<span>{{item.dynamicsCount}}</span></div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    lists: Array,
    page: Number,
    pageSize: Number
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
  .list-item {
    border-bottom: 0.02rem dashed #d6d6d6;
    padding: 0.26rem 0;
  }
  .item-img {
    width: 3rem;
    height: 3rem;
    margin-right: 0.26rem;
    margin-left: 0.26rem;
  }
  .content-name {
    font-size: 0.48rem
  }
  .item-content {
    overflow: hidden;
    position: relative
  }
  .sign-icon {
    width: 1.7rem;
    height: 0.64rem;
    background: pink;
    border-radius: 1.33rem;
    display: inline-block;
  }
  .sign-daren {
    background: url("http://www.1b1u.com/static/img/newpc/daren.png") no-repeat;
  }
  .sign-gj {
    background: url("http://www.1b1u.com/static/img/newpc/gj.png") no-repeat;
  }
  .content-sign {
    margin: 0.26rem 0
  }
  .content-desc {
    font-size: 0.37rem
  }
  .content-classify {
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 0.32rem;
    width: 100%
  }
  .classify-item {
    font-size: 0.32rem;
    color: #d6d6d6;
  }
  .classify-item span {
    color: #1ac3be;
    margin-left: 0.13rem;
    margin-right: 0.26rem;
    font-size: 0.24rem;
  }
</style>

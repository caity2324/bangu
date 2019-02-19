<template>
  <div class="list c-white"
    v-infinite-scroll="loadMore"
    infinite-scroll-distance="10"
    infinite-scroll-disabled="busy">
    <router-link tag='div' class="list-item flex-box" v-for="(item, index) of lists" :key="index" :to="{name: 'DepartureDetail', params:{id: item.id}}">
      <img :src="item.mainpic" alt="" class="item-img">
      <div class="item-content flex-1">
        <div class="content-name c-hide">{{item.linename}}</div>
        <div class="content-desc c-hide">{{item.linetitle}}</div>
        <div class="content-list">
          <span v-for="(items, cindex) of item.labelData" :key="cindex">{{items.labelName}}</span>
        </div>
        <div class="content-classify flex-box">
          <div class="classify-item">浏览量<span>{{item.peoplecount}}</span></div>
          <div class="classify-item">满意度<span>{{item.satisfyscore}}</span></div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    lists: Array
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
    font-size: 0.48rem;
    margin-bottom: 0.26rem;
/*    height: 1.33rem;
    line-height: 0.66rem; */
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
    background: url("http://www.1b1u.com/static/img/newpc/daren.png")
  }
  .sign-gj {
    background: url("http://www.1b1u.com/static/img/newpc/gj.png")
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
  .content-list span {
    display: inline-block;
    border: 0.02rem solid #1ac3be;
    margin: 0.13rem 0.13rem 0 0;
    padding: 0.13rem 0.13rem;
    font-size: 0.32rem;
    border-radius: 0.2rem;
    color: #1ac3be;
  }
  .content-list {
    height: 1.6rem;
    overflow: hidden;
  }
</style>

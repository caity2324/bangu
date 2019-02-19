<template>
  <div class="like c-white">
    <div class="like-title">猜你喜欢</div>
    <router-link tag="div" class="like-item" v-for="item of likeList" :key="item.id" :to="{name: 'DepartureDetail', params:{id: item.id}}">
      <div class="item-top">
        <img :src="item.images" class="item-img">
        <span class="item-tips c-white-color">{{item.cityName}}</span>
      </div>
      <div class="item-content">
        <div class="content-title c-hide">{{item.name}}</div>
        <div class="content-bottom flex-box">
          <div class="content-money"><span class="content-pices">¥{{item.price}}</span>起</div>
          <start :size="24" :score="item.satisfyscore"></start>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import Start from '@/pages/common/Start'
export default {
  name: 'Like',
  props: {
    likeList: Array
  },
  components: {
    Start
  }
}
</script>

<style scoped>
  .like {
    margin-top: 0.26rem;
  }
  .like-title {
    width: 100%;
    padding: 0.53rem;
    box-sizing: border-box;
    font-size: 0.42rem;
  }
  .like-item {
    width: 100%;
  }
  .item-top {
    position: relative;
    background: #d6d6d6;
    height: 0;
    overflow: hidden;
    padding-bottom: 60%;
  }
  .item-tips {
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgba(34,34,34,0.5);
    padding: 0.2rem 0.3rem;
    border-radius: 0 0.2rem 0 0;
    font-size: 0.37rem
  }
  .item-img {
    /* display: block; */
    width: 100%
  }
  .item-content {
    width: 100%;
    box-sizing: border-box;
    padding: 0.26rem;
  }
  .content-pices {
    font-size: 0.48rem;
    color: #f00;
  }
  .content-money {
    font-size: 0.32rem
  }
  .content-bottom {
    padding: 0.26rem 0;
    justify-content: space-between;
  }
</style>

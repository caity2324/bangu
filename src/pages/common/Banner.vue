<template>
  <div class="banner">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) of bannerList" :key="index"><img :src="item.pic" alt="item.name" width="100%"></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    bannerList: Array
  }
}
</script>

<style>
 .banner {
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 50%;
    background: #d6d6d6;
  }
  .banner img {
    display: block;
    min-height: 5.52rem;
  }
  .mint-swipe, .mint-swipe-items-wrap {
    height: 0;
    overflow: hidden;
    padding-bottom: 50%;
  }
  .mint-swipe-indicator {
    background: #fff;
    opacity: 0.8
  }
  .mint-swipe-indicator.is-active {
    background: linear-gradient(#49ece7, #22d3cd)
  }
</style>

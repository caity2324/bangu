<template>
  <div class="item">
    <router-link tag="div" class="list" v-for="item of list" :key="item.id" :to="item.url">
      <img :src="item.img" :alt="item.title" class="list-img">
      <span class="list-title">{{item.title}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Item',
  data () {
    return {
      list: [
        {
          id: 0,
          img: require('@/assets/images/cjy.png'),
          title: '出境游',
          url: '/Departure'
        },
        {
          id: 3,
          img: require('@/assets/images/dr.png'),
          title: '旅游达人',
          url: '/daren'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .item {
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 25%;
    background: #d6d6d6;
    display: flex;
    flex-wrap: wrap;
    background: #fff
  }
  .list {
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    overflow: hidden;
    text-align: center;
    font-size: 0.37rem
  }
  .list-img{
    width: 60%;
    margin: 0.26rem auto 0.08rem;
    display: block;
  }
  .list-title {
    font-size: 0.34rem
  }
</style>

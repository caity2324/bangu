<template>
  <div class="guess">
    <div class="title">猜你喜欢</div>
    <div class="item">
      <div class="item-list" v-for="item of guess" :key="item.dynamicsId">
        <div class="list-img">
          <img :src="item.images" alt="" width="100%">
          <div class="list-img-desc">
            <p><i></i>{{item.cityName}}</p>
            <p>{{item.praise}}人观看</p>
          </div>
        </div>
        <div class="list-content flex-box">
          <i></i>
          <span class="flex-1 c-hide">{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Guess',
  props: {
    guess: Array
  }
}
</script>

<style scoped>
  .guess {
    margin-top: 0.26rem;
    background: #fff;
  }
  .title{
    padding: 0.53rem 0.26rem;
    font-size: 0.48rem;
  }
  .list-img {
    width: 100%;
    height: 0;
    padding-bottom: 56.8%;
    overflow: hidden;
    background: #d6d6d6;
    position: relative
  }
  .list-img img {
    min-height: 5.68rem;
  }
  .list-img-desc {
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
  .list-img-desc p {
    font-size: 0.37rem;
  }
  .list-img-desc p i {
    display: inline-block;
    background: url("http://www.1b1u.com/static/img/newpc/dw2.png") no-repeat;
    width: 0.29rem;
    height: 0.37rem;
    vertical-align: middle;
    margin-right: 0.13rem;
  }
  .list-content {
    padding: 0.26rem;
    align-items: center;
  }
  .list-content i {
    display: inline-block;
    width: 1.28rem;
    height: 0.53rem;
    background: url("http://pt-www.1b1u.com/static/img/newpc/jh.png") no-repeat;
    margin-right: 0.13rem;
  }
</style>

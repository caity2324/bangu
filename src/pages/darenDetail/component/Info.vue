<template>
  <div class="info">
    <div class="wrap-banner">
      <img :src="info.banner" alt="" width="100%">
    </div>
    <div class="wrap-info">
      <img :src="info.userPhoto" alt="" width="100%" class="info-avatar">
      <div class="info-content">
        <div class="info-content-name">
          {{info.nickName}}
            <span class="info-classify classify-daren"></span>
            <span :class="info.userType == 1 ? 'classify-gj info-classify' : ''"></span>
          <span class="info-sex" :class="info.gender == 1 ? 'info-sex-man' : 'info-sex-woman'"></span>
        </div>
        <div class="info-content-classify">
          <p>粉丝量<span>{{info.attentionCount}}</span></p>
          <p>访问量<span>{{info.videoViews}}</span></p>
          <p>播放量<span>{{info.views}}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  props: {
    info: Object
  }
}
</script>

<style scoped>
  .wrap-info {
    display: flex;
    padding: 0.26rem;
    background: #fff;
  }
  .wrap-banner {
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 66.67%;
  }
  .wrap-banner img {
    min-height: 6.66rem;
  }
  .info-avatar {
    width: 1.33rem;
    height: 1.33rem;
    background: #d6d6d6;
    border-radius: 50%;
    margin-right: 0.26rem;
  }
  .info-content {
    flex: 1;
  }
  .info-classify {
    width: 1.76rem;
    height: 0.64rem;
    background: #d6d6d6;
    border-radius: 1.33rem;
    display: inline-block;
    margin-left: 0.26rem;
  }
  .classify-daren {
    background: url("http://www.1b1u.com/static/img/newpc/daren.png") no-repeat;
  }
  .classify-gj {
    background: url("http://www.1b1u.com/static/img/newpc/gj.png") no-repeat;
  }
  .info-content-name {
    align-items: center;
    display: flex;
  }
  .info-sex {
    display: inline-block;
    width: 0.48rem;
    height: 0.45rem;
    margin-left: 0.26rem;
  }
  .info-sex-man {
    background: url("http://www.1b1u.com/static/img/newpc/man.png") no-repeat;
  }
  .info-sex-woman {
    background: url("http://www.1b1u.com/static/img/newpc/woman.png") no-repeat;
  }
  .info-content-classify {
    display: flex;
  }
  .info-content-classify p {
    font-size: 0.32rem;
    margin-top: 0.26rem;
    color: #d6d6d6;
    margin-right: 0.53rem;
  }
  .info-content-classify p span {
    color: #1ac3be;
    margin-left: 0.13rem
  }
</style>

<template>
  <div class="header">
    <mt-header :title="msg.title">
      <div slot="left" v-if="msg.type" @click="goBack">
        <mt-button icon="back">返回</mt-button>
      </div>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: Object
  },
  data () {
    return {

    }
  },
  methods: {
    goBack () {
      this.$emit('backPrev')
    }
  }
}
</script>

<style lang='' scoped>
  .header >>> .mint-header-title {
    font-size:0.48rem
  }
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  }
  .header .mint-header {
    background:linear-gradient(to right,#49ece7, #22d3cd);
  }
</style>

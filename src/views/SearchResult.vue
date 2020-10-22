<template>
  <!-- 头部开始 -->
  <div>
    <mt-header fixed>
      <router-link to="/" slot="left"><mt-button  icon="back"></mt-button></router-link>
    <div slot="right" >
        <span>{{cstart}}</span>
        <span>↔</span>
        <span class="cityChange">{{cend}}</span>
      <span><router-link to="">候补抢票</router-link></span>
    </div>
    </mt-header>
  </div>
  <!-- 头部结束 -->
</template>
<script>
export default {
  data () {
    return {
      cstart: '',
      cend: '',
      cday: ''
    }
  },
  mounted () {
    const query = this.$route.query
    this.cstart = query.cstart
    this.cend = query.cend
    this.cday = query.cday
  }
}
</script>
<style scoped>
.cityChange{
  display: inline-block;
  margin-right: 90px;
}
</style>>

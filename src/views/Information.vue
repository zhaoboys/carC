<template>
  <div>
    <mt-header id="header" title="消息">
      <mt-button slot="left" type="primary" icon='back' @click="back"></mt-button>
    </mt-header>
    <div id="line"></div>
  </div>
</template>
<script>
export default {
  methods: {
    back () {
      this.$router.push('/')
    }
  }
}
</script>>
<style scoped>
#line{
  height: 1px;
  background: rgb(219, 214, 214);
}
#header{
  background: #fff;
  color: #000;
}
</style>

<template>
  <div class="about">
    <mt-header title="成功" fixed ></mt-header>
    <button @click = "tr">点击</button>
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  methods: {
    tr () {
      this.axios.get('/').then(res => {
        console.log(res)
      })
    }
  }
}
</script>

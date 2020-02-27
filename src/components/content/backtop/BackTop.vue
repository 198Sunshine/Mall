<template>
  <div class="back-top">
    <img src="~assets/images/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop",
  }
</script>

<style scoped>
  .back-top{
    position: fixed;
    right: 8px;
    bottom: 55px;
  }
  .back-top img{
    width: 40px;
    height: 40px;
    opacity: 0.8;
  }
</style>
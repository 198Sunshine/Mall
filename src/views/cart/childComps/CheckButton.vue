<template>
  <div :class="{check:isCheck}">
    <img src="~assets/images/cart/tick.svg" alt=""/>
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props:{
      isCheck:{
        type:Boolean,
        default:false
      }
    }
  }
</script>

<style scoped>
  .check{
    background-color: orangered;
  }
</style>
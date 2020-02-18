<template>
  <div class="comlist">
      <commodity-item v-for="item in comlist" :comItemlist="item"/>
  </div>
</template>

<script>
  import CommodityItem  from "./CommodityItem";
  export default {
    name: "Commodity",
    components:{
      CommodityItem
    },
    props:{
      comlist:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
 .comlist{
    display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
   background-color: var(--color-background);
   padding: 3px;
 }
</style>
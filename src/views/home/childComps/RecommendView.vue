<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.image" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    font-size: 12px;
    border-bottom: 8px solid #eee;
  }
  .recommend-item{
    flex: 1;
    padding: 10px 0 20px ;
    text-align: center;
  }
  .recommend-item img{
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
  }
  .recommend-item p{
    position: relative;
    font-size: 13px;
    top: 6px;
    left: 0;
    right:0;
  }
</style>

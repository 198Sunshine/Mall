<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
         class="tab-control-item"
         :key="item"
         @click="itemClick(index)
">
      <span :class="{active:index === currentIndex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles:{
        type:Array,
        default(){
          //默认为空数组
          return []
        }
      }
    },
    data(){
      return{
        currentIndex:0,
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    width: 100%;
    height: 30px;
    font-size: 15px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background: #ffffff;
    z-index: 10;
}
  .tab-control-item{
    flex: 1;
  }
  .active{
    color:var(--color-high-text);
    border-bottom: 2px solid var(--color-high-text);
  }

</style>

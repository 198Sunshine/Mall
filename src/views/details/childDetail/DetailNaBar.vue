<template>
  <nav-bar class="nav">
    <img slot="left" src="~assets/images/common/back.png" @click="imgClick">
    <div
        class="detail-item"
        slot="center"
        v-for="(item,index) in titles"
        :class="{active:currentIndex === index}"
        @click="itemClick(index)">
      {{item}}
    </div>
  </nav-bar>

</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  export default {
    name: "detailItem",
    components:{
      NavBar
    },
    data(){
      return{
        titles:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    methods:{
      imgClick(){
        this.$router.back()
      },
      itemClick(index){
        this.currentIndex = index
        this.$emit('titleClick',index)
      }
    }
  }
</script>

<style scoped>
  .nav{
    display: flex;
    font-size: 15px;
  }
  .detail-item{
    flex: 1;
    padding: 0 10px;
    float: left;
  }
  .nav img{
    width: 20px;
    height: 20px;
    margin-top: 13px;
    font-size: 20px;
  }
  .active{
    color: var(--color-high-text);
  }
</style>
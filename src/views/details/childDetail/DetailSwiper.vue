<template>
  <Swiper v-if="topImages.length">
    <SwiperItem class="item" v-for="item in topImages">
      <img :src="item" alt="">
    </SwiperItem>
  </Swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'
  export default {
    name: "DetailSwiper",
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      topImages:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .item{
    height: 300px;
    overflow: hidden;
  }
</style>
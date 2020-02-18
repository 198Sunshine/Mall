<template>
  <swiper v-if="banners.length">
    <swiper-item v-for= "item in banners" :key="item.image" class="swiper-item">
      <a :href= "item.link">
        <img :src="item.image"  @load="imgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import swiper from 'components/common/swiper/Swiper'
  import swiperItem from 'components/common/swiper/SwiperItem'
  export default {
    name: "HomeSwiper",
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        isLoad:false
      }
    },
    components:{
      swiper,
      swiperItem
    },
    methods:{
      imgLoad(){
        //如果加载过，即isLoad为true，则不再提交
        if(!this.isLoad){
          //console.log('---')
          this.$emit('imgSwiperLoad')
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>
 .swiper-item img{
   width: 100%;
   padding-top: 44px;
 }
</style>

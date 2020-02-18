<template>
  <div>
    <Tabar>
    <TabarItem path='/home' activeColor='deeppink'>
      <img slot="item-icon" src="~assets/images/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/images/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </TabarItem>
    <TabarItem path='/cart'>
      <img slot="item-icon" src="~assets/images/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="~assets/images/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </TabarItem>
    <TabarItem path='/category'>
      <img slot="item-icon" src="~assets/images/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="~assets/images/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </TabarItem>
    <TabarItem path='/profile'>
      <img slot="item-icon" src="~assets/images/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/images/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </TabarItem>
    </Tabar>
  </div>
</template>

<script>
import Tabar from 'components/common/tabbar/Tabar'
import TabarItem from 'components/common/tabbar/TabarItem'

export default {
  name: 'MainTabItem',
  components:{
    Tabar,
    TabarItem
  }
}
</script>
<style scoped>
  div{
    font-size: 12px;
  }
  div img{
    width: 40px;
    height: 40px;
    padding: 2px 0 2px ;
  }
</style>

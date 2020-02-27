<template>
  <div id="home">
    <nav-bar class="nav">
      <div slot="center" class="center_text">购物街</div>
    </nav-bar>
    <tab-control
        :titles="['流行','新款','精选']"
        class="tabcontrol"
        @tabClick="tabClick($event)"
        v-show="isTabFixed"
        ref="tabcontrol1"
    />
    <Bscroll
        class="content" ref="Bscroll"
        :probeType ="3"
        @scroll="scrollBack($event,1000)"
        :pullUpLoad="true"
        @pullLoad="pullLoad"
    >
      <!--传入的1200为多少距离显示箭头图-->
      <home-swiper :banners="banners"  @imgSwiperLoad="imgSwiperLoad"/>
      <RecommendView :recommends="recommends"/>
      <feature-view/>
      <tab-control
          :titles="['流行','新款','精选']"
          @tabClick="tabClick($event)"
          ref="tabcontrol2"
      />
      <!--此处$event可省略-->
      <Commodity :comlist="showlist"/>
    </Bscroll>
    <!-- .native 监听原生根元素-->
    <BackTop @click.native="backTop" v-show="isShow"/>
  </div>
</template>

<script>

  //Home子组件
  import HomeSwiper from "./childComps/HomeSwiper"
  import RecommendView from "./childComps/RecommendView"
  import FeatureView  from "./childComps/FeatureView"
  //公共组件
  import NavBar from "components/common/navbar/NavBar"
  import TabControl from "components/content/tabControl/TabControl"
  import Commodity from "components/content/commodity/Commodity"
  //其他方法
  import {getHomeMultidata ,getHomeCommodity} from "network/home"
  import Bscroll from "components/common/bscroll/Bscroll"
  import {imgload,backTop} from "../../common/mixin";

  export default {
    name: 'Home',
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      Commodity,
      Bscroll,

    },
    mixins:[imgload,backTop],
    data(){
      return {
        //保存请求数据
        banners:[],
        recommends:[],
        commodity:{
         'pop':{page:0, list: []},
         'sell':{page:0, list :[]},
         'new':{page:0,list : []}
       },
        currentType:'pop',
        //设置默认isShow为false
        offsetTop: 0,
        isTabFixed:false,
        saveY:0
      }
    },
    computed:{
     showlist(){
        return this.commodity[this.currentType].list
      }
    },
    created() {
      //获取请求数据
      this.getHomeMultidata()

      //获取商品数据
      this.getHomeCommodity('pop')
      this.getHomeCommodity('new')
      this.getHomeCommodity('sell')
    },
    mounted(){
      // //防抖函数,防止频繁刷新
      // let  refresh = debounce(this.$refs.Bscroll.Refresh,500)
      //
      // //当commodity组件图片加载完成接收
      // this.$bus.$on('imgItemLoad',() => {
      //   //重新获取scrollHeight高度
      //   //this.$refs.Bscroll.refersh()
      //   //防抖函数
      //   refresh
      // })
    },
    activated(){
      //console.log(this.saveY);
      this.$refs.Bscroll.Refresh()
      this.$refs.Bscroll.scrollTop(0,this.saveY,0)
    },
    deactivated(){
      //记录离开时的位置
      this.saveY = this.$refs.Bscroll.getScrollY()
      //console.log(this.saveY);

      //取消全局监听
      this.$bus.$off('imgItemLoad',this.imageLoadListen)
    },
    methods:{
      tabClick(index){
        switch (index) {
         //当index为0时
         case 0:
           this.currentType = 'pop'
           break
         //当index为1时
         case 1:
           this.currentType = 'new'
           break
         //当index为2时
         case 2:
           this.currentType = 'sell'
       }
       //点击时，让lainggetabcontaol的currentInde为当前的index
        this.$refs.tabcontrol1.currentIndex = index
        this.$refs.tabcontrol2.currentIndex = index
      },
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          //console.log(res)
          //轮播图数据
          this.banners = res.data.data.banner.list
          this.recommends = res.data.data.recommend.list
        })
      },
      getHomeCommodity(type){
          //封装page
         const page = this.commodity[type].page + 1
          //page更改
          getHomeCommodity(type,page).then(res => {
            //获取商品数据
            //console.log(res)
            //console.log(page)
            //this.commodity[type].list.push(...res.data.data.list)
            //将数组连接并返回
            this.commodity[type].list =  this.commodity[type].list.concat(res.data.data.list)
            this.commodity[type].page += 1

            //完成上拉加载更多
            this.$refs.Bscroll.finishPullup()
        })
      },
      scrollBack(pos,y){
        this.isTabFixed = -pos.y > this.offsetTop - 44
        this.listenBackTop(pos,y)
      },
      pullLoad(){
        this.getHomeCommodity(this.currentType)
      },
      imgSwiperLoad(){
        //获取tabControl组件的offsetTop
        this.offsetTop = this.$refs.tabcontrol2.$el.offsetTop
        //console.log(this.offsetTop);
      }
    }
  }
</script>

<style scoped>
  #home{
    height: 100vh;
    position: relative;
  }
  .nav{
    background-color: var(--color-tint);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    Z-index:15;
  }
  .center_text{
    color: white;
    font-size: 18px;
  }
  .tabcontrol{
    /*当高度达到设置时，position改成 fixed*/
    /*position: absolute;*/
    /*margin-top:50px;*/
    /*left: 0;*/
    /*right:0;*/
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
  }
  .content{
    position: absolute;
    top: 0px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>

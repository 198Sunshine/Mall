<template>
  <div class="detail">
     <detail-na-bar class="nav" @titleClick="titleClick" ref="navbar"/>
        <!--    设置回到顶部距离为1000-->
      <bscroll class="content" ref="Bscroll" :probeType="3" @scroll="contentScroll($event,1000)">
      <detail-swiper :topImages="topImages"/>
      <detail-base-info :commodity="commodity"/>
      <detail-shop-info :shop="shop"/>
      <detail-image :detail-info="detailInfo" class="detail-image" @imgLoad="detailImgLoad"/>
      <detail-goods :goods="goods" class="detail-goods" @imgLoad="detailImgLoad"ref="goodInfo"/>
      <DetailRate :rate="rate" class="detail-rate" @imgLoad="detailImgLoad" ref="rateInfo"/>
      <div class="detail-commend">
        <h2>热门推荐</h2>
        <Commodity :comlist="commend" ref="commendInfo"/>
      </div>
    </bscroll>
    <BackTop @click.native="backTop" v-show="isShow"/>
    <deatil-bottom-bar @addToCat="addToCat"/>
<!--    <toast :message="message" class="toast" :show="show"/>-->
  </div>
</template>

<script>
  import {getDetail,detail,shop ,goods,getCommend} from "network/detail"
  import DetailNaBar from "./childDetail/DetailNaBar"
  import DetailSwiper from './childDetail/DetailSwiper'
  import DetailBaseInfo from "./childDetail/DetailBaseInfo"
  import DetailShopInfo from "./childDetail/DetailShopInfo"
  import DetailImage from "./childDetail/DetailImage"
  import DetailGoods from "./childDetail/DetailGoods"
  import DetailRate from "./childDetail/DetailRate"
  import Commodity from "components/content/commodity/Commodity"
  import DeatilBottomBar from "./childDetail/DeatilBottomBar"
  import Bscroll from "components/common/bscroll/Bscroll"
  import {imgload,backTop} from "common/mixin"
  import  { mapActions } from 'vuex'

  // import toast from "components/common/toast/toast"

  export default {
    name: "detail",
    components:{
     DetailNaBar,
     DetailSwiper,
     DetailBaseInfo,
     DetailShopInfo,
      Bscroll,
      DetailImage,
      DetailGoods,
      DetailRate,
      Commodity,
      DeatilBottomBar,

      // toast
    },
    data(){
      return {
        iid:null,
        topImages:[],
        commodity:{},
        shop:{},
        detailInfo:{},
        goods:{},
        rate:{},
        commend:[],
        titleTop:[],
        getTitleY:null,
        currentIndex:0,
        show:false,
        message:''
      }
    },
    mixins:[imgload,backTop],
    created() {
      this.iid = this.$route.params.iid
      getDetail(this.iid).then(res => {
        const data = res.data.result
        console.log(res);
        this.topImages = data.itemInfo.topImages
        this.commodity = new detail(data.itemInfo,data.columns,data.shopInfo)
        this.shop = new shop(data.shopInfo)
        //商品详情
        this.detailInfo= data.detailInfo
        //参数详情
        this.goods = new goods(data.itemParams.info,data.itemParams.rule)
        //评论
        this.rate = data.rate.list[0]
      })
        //热门推荐
        getCommend().then((res) => {
          this.commend = res.data.data.list
          //console.log(res)
        })
    },
    mounted(){
    },
    // mounted(){
    //   let refresh = debounce(this.$refs.Bscroll.Refresh,500)
    //   this.imageLoadListen = () => {
    //     refresh()
    //   }
    //   this.$bus.$on('imageItemLoad',this.imageLoadListen)
    // },
    updated(){
      this.getTitleY = ()=>{
        this.titleTop = []
        this.titleTop.push(0)
        this.titleTop.push(this.$refs.goodInfo.$el.offsetTop)
        this.titleTop.push(this.$refs.rateInfo.$el.offsetTop)
        this.titleTop.push(this.$refs.commendInfo.$el.offsetTop)
      }
    },
    //取消监听图片加载完成
    destroyed(){
      this.$bus.$off('imageItemLoad',this.imageLoadListen)
    },
    methods:{
      detailImgLoad(){
        this.$refs.Bscroll.Refresh()
        this.getTitleY()
      },
      titleClick(index){
        this.$refs.Bscroll.scrollTop(0,-this.titleTop[index],300)
      },
      contentScroll(pos,y){
        const positionY = -pos.y
        const length = this.titleTop.length
        for(let i=0;i<length;i++){
          if(this.currentIndex !== i &&((i<length - 1) && positionY >= this.titleTop[i] && positionY <= this.titleTop[i+1])
            ||(i===length -1) && positionY >= this.titleTop[i]){
              this.currentIndex = i
            //将当前的currentIndex赋值给导航的currentIndex
            this.$refs.navbar.currentIndex = this.currentIndex
          }
        }
        //回到顶部按钮
        this.listenBackTop(pos,y)
      },

      //将actions的addCart方法映射
      ...mapActions({
        addCart:'addCart'
      }),

      addToCat(){
       //获取购物车的商品信息
        const  product = {}
        product.image = this.topImages[0]
        product.title = this.commodity.title
        product.desc = this.commodity.desc
        product.price = this.commodity.lowPrice
        product.iid = this.iid

        //将商品添加到购物车,返回Promise

       //  this.$store.dispatch('addCart',product).then(res => {
       //    console.log(res);
       //  })

        //映射方法实现
        this.addCart(product).then(res => {
          //提示添加购物车成功
          // this.show = true
          // this.message = res
          // setTimeout(() => {
          //   this.show = false
          //   this.message = ''
          // },2000)
          //console.log(this.$toast.show);
          this.$toast.show('添加到购物车成功',1000)
        })
      }
    }
  }
</script>

<style scoped>
  .detail{
    position: relative;
    z-index:10;
    background-color: white;
    height: 100vh;
  }
  .nav{
    position: relative;
    z-index: 10;
    background-color: white;
  }
  .content{
    height:calc(100% - 44px - 49px);
  }
  .detail-image{
    position: relative;
    z-index: 10;
    background-color: white;
  }
  .detail-goods{
    position: relative;
    z-index: 10;
    background-color: white;
  }
  .detail-rate{
    position: relative;
    z-index:10;
    background-color: white;
  }
  .detail-commend{
    margin-top: 10px;
    text-align: center;
  }
</style>
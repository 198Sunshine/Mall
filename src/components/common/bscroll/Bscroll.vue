<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'

  export default {
    name: "Bscroll",
    props:{
      probeType:{
        type:Number,
        default:1
      },
      pullUpLoad:{
        type:Boolean,
        default: false
      }
      },
    data(){
      return {
        //保存数据
        scroll:null
      }
    },
    mounted() {
      //1.创建Bscroll对象
      this.scroll = new Bscroll(this.$refs.wrapper,{
        probeType: this.probeType,
        click:true,
        pullUpLoad:this.pullUpLoad
      }),

      // 2.将监听事件回调
      this.scroll.on('scroll', pos => {
        //console.log(pos);
        this.$emit('scroll',pos)
      }),
        //3.滚动到底部监听
          this.scroll.on('pullingUp',() => {
            //console.log('再拉就秃了')
            if(this.pullUpLoad){
              this.$emit('pullLoad')
            }
          })
    },
    methods:{
      scrollTop(x,y,time){
       this.scroll && this.scroll.scrollTo(x,y,time)
      },
     finishPullup(){
       this.scroll && this.scroll.finishPullUp()
     },
      //解决加载图片卡顿问题
      Refresh(){
        this.scroll &&  this.scroll.refresh()
      },
      getScrollY(){
        return this.scroll ? this.scroll.y : 0
      }
    }
  }
</script>



<style scoped>

</style>
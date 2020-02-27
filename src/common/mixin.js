import {debounce} from './utils'
import BackTop from "components/content/backtop/BackTop"
export  const imgload = {
   data(){
    return {
      imageLoadListen:null
    }
  },
  mounted(){
    let refresh = debounce(this.$refs.Bscroll.Refresh,500)
    this.imageLoadListen = () => {
      refresh()
    }
    this.$bus.$on('imageItemLoad',this.imageLoadListen)
  }
}
export const backTop = {
  components:{
    BackTop
  },
  data(){
    return{
      isShow:false
    }
    },
  methods:{
    backTop() {
      //坐标，时间
      this.$refs.Bscroll.scrollTop(0,0,1000)
    },
    listenBackTop(pos,y){
      //当pos的负值大于传入的y时，isShow显示为true
      this.isShow = -pos.y > y
    }
  }
}

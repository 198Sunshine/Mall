<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <cart-list/>
    <cart-bottom-bar class="bottom-bar"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import CartList from "./childComps/CartList"
import Bscroll from "../../components/common/bscroll/Bscroll"
import CartBottomBar from "./childComps/CartBottomBar";
import { mapGetters } from  'vuex'
export default {
  name: 'Cart',
  components: {
    CartList,
    NavBar,
    CartList,
    Bscroll,
    CartBottomBar
  },
  computed:{
    // cartLength(){
    //   return this.$store.getters.cartLength
    // }
    //直接映射
    // ...mapGetters(['cartLength'])
    //对应名称
    ...mapGetters({
      length:'cartLength'
    })
  }
}
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
  .nav-bar{
    background-color: var(--color-high-text);
    color: white;
    font-size: 18px;
  }
  .bottom-bar{
    height: 40px;
    position: relative;
  }
</style>

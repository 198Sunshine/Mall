<template>
    <Bscroll class="content" ref="Bscroll">
      <cart-list-item v-for="item in cartList" :product="item"/>
    </Bscroll>
</template>

<script>
  import Bscroll from "components/common/bscroll/Bscroll"
  import CartListItem from "./CartListItem"
  import  {mapGetters} from 'vuex'
  export default {
    name: "CartList",
    components:{
      Bscroll,
      CartListItem
    },
    computed:{
      ...mapGetters({
        cartList:'cartList'
      })
    },
    activated() {
      this.$refs.Bscroll.Refresh()
    }
  }
</script>

<style scoped>
  .content{
    height: calc(100% - 49px - 44px - 40px);
    overflow: hidden;
  }
</style>
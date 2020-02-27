<template>
  <div class="cart">
     <div>
       <check-button class="checkButton" @click.native="checkButton" :is-check="isSelectAll"/>
     </div>
     <span class="text">全选</span>
    <div>
      <div class="price">合计:￥{{totalPrice}}</div>
    </div>
    <div class="cartCount" @click="allPlay">付款:({{cartCount}})</div>
  </div>
</template>

<script>
  import CheckButton from "./CheckButton"
  import { mapGetters } from 'vuex'
  export default {
    name: "CartBottonBar",
    components: {
      CheckButton
    },
    computed:{
      ...mapGetters(['cartList','cartLength']),
      totalPrice(){
       return this.cartList.filter(item => {
         //获取item的check为true
         return item.check
       }).reduce((proValue,item) => {
         return proValue + item.price * item.count
       },0).toFixed(2)
      },
      //计算商品的总数量
      cartCount(){
        return this.cartList.filter(item => {
          return item.check
        }).reduce((proVlaue,item) => {
          return proVlaue + item.count * 1
        },0)
      },
      isSelectAll(){
        if (this.cartLength === 0) return false
        return !this.cartList.find(item => !item.check)
      }
    },
    methods:{
      checkButton(){
        //如果全部选中则将check改成false
         if(this.isSelectAll){
            this.cartList.forEach(item => item.check = false)
         }else{
           //如果部分选中或全不选则将check改成true
           this.cartList.forEach(item => item.check = true)
         }
      },
      //付款提示是否有勾选商品
      allPlay(){
        if(this.cartLength === 0 || this.cartCount === 0){
         this.$toast.show('请先勾选商品',1500)
        }
      }
    }
  }
</script>

<style scoped>
  .cart{
    display: flex;
    height: 40px;
    background: #f6f6f6;
  }
 .checkButton{
   width: 15px;
   height: 15px;
    margin-left: 5px;
    border: 1px solid #e9e9e9;
   border-radius: 50%;
 }
  .checkButton,span{
    margin-left: 5px;
    margin-top: 15px;
    text-align: center;
    text-space: 2;
    font-size: 14px;
    color: #222222;
  }
  .price{
    width: 120px;
    margin-left: 40px;
    margin-top:12px;
    text-align: center;
    font-size: 15px;
    color:orangered;

  }
  .cartCount{
    width: 80px;
    height: 40px;
    background: red;
    font-size: 15px;
    text-align: center;
    line-height: 2.5;
    color: white;
    position: absolute;
    right: 0px;
  }
</style>
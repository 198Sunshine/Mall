import {ADD_COUNT,ADD_TO_CART} from './mutation-types'
export default {
  addCart(context,payload){
   return new Promise((resolve =>{
     //为true将item结果返回
     let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

     if(oldProduct){
     //如果当前有这个商品，数量加1
     //oldProduct.count ++
       context.commit(ADD_COUNT,oldProduct)
       resolve('添加商品数量+1')
     }
     else{
       context.commit(ADD_TO_CART,payload)
       resolve('添加新的商品')
     }
   })
   )}
}
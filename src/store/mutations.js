import {ADD_TO_CART,ADD_COUNT} from "./mutation-types";

export default {
  [ADD_COUNT](state,payload){
    payload.count ++
  },
  [ADD_TO_CART](state,payload){
    payload.check = true
    payload.count = 1
    //将商品添加到carList
    state.cartList.push(payload)
  }
}
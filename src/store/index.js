import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
Vue.use(Vuex)

const state ={
  //将商品添加入数组
    cartList:[]
  }
export  default  new  Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{

  }
})
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        fa:12,
        cartCount:0, //共享购物车数量
      },
      //(2)修改共享数据
      mutations:{
        //修改发量增加 减少发量
        addFa(state){state.fa++},
        subFa(state){state.fa--},
        //添加多个商品数量
        addmCart(state,n){
          state.cartCount=n
        },
        //添加一个商品
        addCart(state){
          state.cartCount++;
        },
        //减少一个商品
        subCart(state){
          state.cartCount--;
        },
        //减少多个商品
        submCart(state,n){
          state.cartCount-=n;
        },
        //清空购物车中商品数量
        clearCart(state){
          state.cartCount=0;
        }
      },
      getters:{
        //获取共享数据
        getFa(state){return state.fa},
        //获取购物车中商品数量
        getCart(state){
          return state.cartCount;
        }
      }
   })
 
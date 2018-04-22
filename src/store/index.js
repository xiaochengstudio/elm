import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex);

const state = {
  latitude: '', // 当前位置纬度
  longitude: '', // 当前位置经度
  geohash:'',//地址geohash值
  cartList: {}, // 加入购物车的商品列表
  shopDetail: null, //商家详情信息
  shopid: null,//商铺id
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})

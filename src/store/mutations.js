import {
  RECORD_ADDRESS,
  SAVE_GEOHASH,
  ADD_CART,
  REDUCE_CART,
  INIT_BUYCART,
  CLEAR_CART,
  RECORD_SHOPDETAIL,
  RECORD_USERINFO,
  GET_USERINFO
} from "./mutation-types";

import {setStore, getStore} from '@/config/mUtils'
import {localapi, proapi} from '@/config/env'

export default {
  //记录当前经纬度
  [RECORD_ADDRESS](state,{latitude,longitude}){
    // 使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名,相当于RECORD_ADDRESS(state,{其他参数}){操作state代码}
    state.latitude = latitude;
    state.longitude = longitude;
  },

  //保存geohash
  [SAVE_GEOHASH](state,geohash){
    state.geohash = geohash;
  },

  //加入购物车
  [ADD_CART](state,{
    shopid,
    category_id,
    item_id,
    food_id,
    name,
    price,
    specs,
    packing_fee,
    sku_id,
    stock
  }){
    let cart = state.cartList;
    let shop = cart[shopid] = (cart[shopid] || {});
    let category = shop[category_id] = (shop[category_id] || {});
    let item = category[item_id] = (category[item_id] || {});
    if (item[food_id]) {
      item[food_id]['num']++;
    } else {
      item[food_id] = {
        "num" : 1,
        "id" : food_id,
        "name" : name,
        "price" : price,
        "specs" : specs,
        "packing_fee" : packing_fee,
        "sku_id" : sku_id,
        "stock" : stock
      };
    }
    state.cartList = {...cart};
    //存入localStorage
    setStore('buyCart', state.cartList);
  },

  // 移出购物车
  [REDUCE_CART](state, {
    shopid,
    category_id,
    item_id,
    food_id,
    name,
    price,
    specs,
  }) {
    let cart = state.cartList;
    let shop = (cart[shopid] || {});
    let category = (shop[category_id] || {});
    let item = (category[item_id] || {});
    if (item && item[food_id]) {
      if (item[food_id]['num'] > 0) {
        item[food_id]['num']--;
        state.cartList = {...cart};
        //存入localStorage
        setStore('buyCart', state.cartList);
      } else {
        //商品数量为0，则清空当前商品的信息
        item[food_id] = null;
      }
    }
  },

  //网页初始化时从本地缓存获取购物车数据
  [INIT_BUYCART](state) {
    let initCart = getStore('buyCart');
    if (initCart) {
      state.cartList = JSON.parse(initCart);
    }
  },

  //清空当前商品的购物车信息
  [CLEAR_CART](state, shopid) {
    state.cartList[shopid] = null;
    state.cartList = {...state.cartList};
    setStore('buyCart', state.cartList);
  },

  //记录商铺详情
  [RECORD_SHOPDETAIL](state, detail) {
    state.shopDetail = detail;
  },

  //记录用户信息
  [RECORD_USERINFO](state,info){
    state.userInfo = info;
    state.login = true;
    setStore('user_id', info.user_id);
  },

  //获取用户信息信息存入vuex
  [GET_USERINFO](state, info) {
    if (state.userInfo && (state.userInfo.username !== info.username)) {
      return;
    };
    if (!state.login) {
      return
    }
    if (!info.message) {
      state.userInfo = {...info};
    } else {
      state.userInfo = null;
    }
  }
}

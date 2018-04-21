import {
  RECORD_ADDRESS,
  SAVE_GEOHASH
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
  }
}

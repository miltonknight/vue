import { getToken, getTokenByKey } from '@/utils/auth'
import { getData, postData } from '@/api/common'

const getDefaultState = () => {
  return {
    access_token: getTokenByKey()
  }
}

const state = getDefaultState()

const actions = {
  // 管理员平台添加订单
  addOrder({ commit }, params) {
    return new Promise((resolve, reject) => {
      postData('/orderTravel/authapi/order?access_token=' + state.access_token, params).then(response => resolve(response)).catch(error => reject(error))
    })
  },

  // 获取用户列表
  queryAllByLimit({ commit }, page) {
    return new Promise((resolve, reject) => {
      getData(state.access_token, page.page, page.limit).then((response) => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 获取需要授权访问的信息-无参或绑定参数
  getAuthData({ commit }, url) {
    return new Promise((resolve, reject) => {
      getData(url + '?access_token=' + state.access_token).then(response => resolve(response)).catch(error => reject(error))
    })
  }
}

export default {
  namespaced: true,
  state,
  actions
}


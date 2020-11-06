// import { login, logout, getInfo, fetchData, addUser } from '@/api/user'
import { login, getData, getAuthData, postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";
import {
  getTokenByKey,
  setTokenByKey,
  removeAllTOken,
  TOKEN_KEYS
} from "@/utils/auth";
import { resetRouter } from "@/router";

const getDefaultState = () => {
  return {
    access_token: getTokenByKey(TOKEN_KEYS.access_key),
    user_name: getTokenByKey(TOKEN_KEYS.username_key),
    full_name: getTokenByKey(TOKEN_KEYS.fullname_key),
    avatar: getTokenByKey(TOKEN_KEYS.avatar_key),
    user_id: getTokenByKey(TOKEN_KEYS.userid_key)
  };
};

const state = getDefaultState();

const mutations = {
  RESET_STATE: state => {
    Object.assign(state, getDefaultState());
  },
  SET_TOKEN: (state, token) => {
    state.access_token = token;
  },
  SET_FULL_NAME: (state, fullname) => {
    state.full_name = fullname;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
  SET_USER_ID: (state, userid) => {
    // 用户ID
    state.user_id = userid;
  },
  SET_USER_NAME: (state, username) => {
    // 用户名，即手机号
    state.user_name = username;
  }
};

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({
        username: username.trim(),
        password: password,
        grant_type: "password",
        client_id: "web_client",
        client_secret: "123456",
        scope: "all"
      })
        .then(response => {
          commit("SET_TOKEN", response.access_token);
          commit("SET_USER_ID", response.uid);
          commit("SET_USER_NAME", response.username);
          setTokenByKey(TOKEN_KEYS.access_key, response.access_token);
          setTokenByKey(TOKEN_KEYS.userid_key, response.uid);
          setTokenByKey(TOKEN_KEYS.username_key, response.username);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // 获取用户列表
  queryAllByLimit({ commit }, page) {
    return new Promise((resolve, reject) => {
      getData(
        LaobingUrl.admin_getUserByPage + "/" + page.page + "/" + page.limit
      )
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // 获取用户个人资料
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      // getData(LaobingUrl.disk_user_getProfile + "/" + state.user_id) // disk
      getData(LaobingUrl.user_getProfile + "/" + state.user_id)
        .then(response => {
          const { code, msg, data } = response;
          console.log(response)
          if (code === 20000 && data != null) {
            console.log(data.avatar, data.fullName);
            commit("SET_AVATAR", data.avatar);
            commit("SET_FULL_NAME", data.fullName);
            setTokenByKey(TOKEN_KEYS.fullname_key, data.fullName);
            setTokenByKey(TOKEN_KEYS.avatar_key, data.avatar);
          }
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  
  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
        removeAllTOken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeAllTOken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};

import request from '@/utils/request'
import { getToken } from '@/utils/auth'
import { LaobingUrl } from './laobing_url'

export function login(data) {
  // console.log(LaobingUrl.user_login)
  return request({
    url: LaobingUrl.user_login,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'post',
    params: data
  })
}

export function getData(url) {
  console.log("[COMMONAPI]GETDATA: ", url)
  return request({
    url: url,
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })
}

export function getAuthData(url) {
  console.log("[COMMONAPI]GETAUTHDATA: ", url)
  return request({
    url: url,
    headers: {
      'Authorization': 'Bearer ' + getToken(),
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })
}

export function getDataWithParams(url, params) {
  return request({
    url: url,
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET',
    params: { params }
  })
}

export function postData(url, data) {
  return request({
    url: url,
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    data: data 
  })
}

export function get(url) {
  return new Promise((resolve, reject) => {
    request({
      url: url,
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    }).then(response => {
        const { code, msg, data } = response;
        if (code === 20000 && data != null) {
          console.log("Get Response: ", data);
          resolve(data);
        } else {
          reject(msg);
        }
      })
      .catch(error => {
        console.log(error);
      });
  });
}

export function post(url, data) {
  return new Promise((resolve, reject) => {
    request({
      url: url,
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      data: data 
    }).then(response => {
        const { code, msg, data } = response;
        if (code === 20000 && data != null) {
          console.log("Post Response: ", data);
          resolve(data);
        } else {
          reject(msg)
        }
      })
      .catch(error => {
        console.log(error);
      });
  })
}

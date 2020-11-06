import requestAuth from '@/utils/authRequest'
import request from '@/utils/request'
import qs from 'qs'

export function login2(data) {
  var params = qs.stringify({
    grant_type: 'password',
    username: '13555800200',
    password: "123456",
    client_id: "web_client",
    client_secret: "123",
    scope: "all"
  })
  return requestAuth({
    url: '/api/oauth/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'post',
    data: params
  })
}

export function login(data) {
  return requestAuth({
    url: '/api/oauth/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'post',
    params: data
  })
}

export function getInfo(uid, access_token) {
  return request({
    url: '/api/profile/authapi/profile/' + uid,
    method: 'get',
    params: { access_token }
  })
}

export function fetchData(access_token, offset, limit) {
  return request({
    url: '/api/user/adminapi/users/' + offset + '/' + limit,
    method: 'get',
    params: { access_token }
  })
}

export function addUser(access_token, username, password) {
  return request({
    url: '/api/user/adminapi/add/user?access_token=' + access_token,
    method: 'POST',
    data: { username, password }
  })
}

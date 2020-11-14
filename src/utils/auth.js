import Cookies from "js-cookie";

export const TOKEN_KEYS = {
  access_key: "laobing_accesstoken",
  username_key: "laobing_username",
  fullname_key: "laobing_fullname",
  userid_key: "laobing_userid",
  avatar_key: "laobing_avatar"
};

export function getTokenByKey(key) {
  return Cookies.get(key);
  
}

export function setTokenByKey(key, token) {
  // return Cookies.set(key, token);
  return Cookies.set(key, token, { expires: 1 }) // set for 1 hour
  // 时间单位是天 1/24为一个小时,  第三个参数不传就是永不过期
  // Cookies.set('access_token', str, { expires: 1 / 24 }); 
}

export function removeAllTOken() {
  Cookies.remove(TOKEN_KEYS.access_key);
  Cookies.remove(TOKEN_KEYS.username_key);
  Cookies.remove(TOKEN_KEYS.fullname_key);
  Cookies.remove(TOKEN_KEYS.userid_key);
  Cookies.remove(TOKEN_KEYS.avatar_key);
}

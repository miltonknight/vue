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
  // 设置超期时间
  const inFifteenMinutes = new Date(new Date().getTime() + 10 * 60 * 60 * 1000);
  console.log(":::::::::::::::::>>>>");
  console.log(inFifteenMinutes);
  // 第三个参数不传就是永不过期
  return Cookies.set(key, token, { expires: inFifteenMinutes }) // set for 1 hour
}

export function removeAllTOken() {
  Cookies.remove(TOKEN_KEYS.access_key);
  Cookies.remove(TOKEN_KEYS.username_key);
  Cookies.remove(TOKEN_KEYS.fullname_key);
  Cookies.remove(TOKEN_KEYS.userid_key);
  Cookies.remove(TOKEN_KEYS.avatar_key);
}

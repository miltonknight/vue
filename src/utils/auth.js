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
  return Cookies.set(key, token);
}

export function removeAllTOken() {
  Cookies.remove(TOKEN_KEYS.access_key);
  Cookies.remove(TOKEN_KEYS.username_key);
  Cookies.remove(TOKEN_KEYS.fullname_key);
  Cookies.remove(TOKEN_KEYS.userid_key);
  Cookies.remove(TOKEN_KEYS.avatar_key);
}

const getters = {
  // 上导航
  // nav: state => state.app.nav,
  navactive: state => state.navactive.navactive,
  // 侧边栏
  sidebar: state => state.app.sidebar,
  // 设备
  device: state => state.app.device,
  // 身份KEY
  access_token: state => state.user.access_token,
  // 头像
  avatar: state => state.user.avatar,
  // 用户名、手机号
  user_name: state => state.user.user_name,
  // 中文名、全名
  full_name: state => state.user.full_name,
  // 用户id
  user_id: state => state.user.user_id
};
export default getters;

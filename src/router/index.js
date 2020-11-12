import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";
import Weblayout from "@/layout/web/index";
import MaLayout from "@/layout/ma/home/index";
import MaCsLayout from "@/layout/ma/courier-station/index";
import MaCsArticalLayout from "@/layout/ma/courier-station/artical";
import MaAnnalsArticalLayout from "@/layout/ma/annals/artical";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/",
    component: () => import("@/views/home/index"),
    hidden: true
  },

  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },

  {
    path: "/register",
    component: () => import("@/views/www/register")
  },

  {
    path: "/laobing",
    component: () => import("@/views/loginlb/index")
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true
  },

  {
    path: "/admin",
    redirect: "/admin/dashboard",
    name: "dashboard",
    meta: { title: "数据中心", icon: "user" },
    component: Layout,
    children: [
      {
        path: "/admin/dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "数据中心", icon: "dashboard" }
      }
    ]
  },
  //test pages edited by Ma
  {
    path: "/ma",
    // redirect: "/ma/",
    redirect: "/home/index",
    name: "MaTest",
    meta: { title: "testpage", icon: "user" },
    component: MaLayout,
    children: [
      {
        // path: "/ma/home/index",
        path: "/home/index",
        name: "MaTestindex",
        component: () => import("@/views/ma/home/index"),
        meta: { title: "Ma首页", icon: "dashboard" }
      },
      {
        path: "/courier-station/index",
        name: "MaCourierStationIndex",
        component: () => import("@/views/ma/courier-station/index"),
        meta: { title: "Ma老兵驿站", icon: "dashboard" }
      },
      {
        path: "/courier-station/artical",
        name: "MaCourierStationArtical",
        component: () => import("@/views/ma/courier-station/artical"),
        // component: MaCsArticalLayout,
        meta: { title: "Ma老兵驿站文章", icon: "dashboard" }
      },
      {
        path: "/annals/index",
        name: "MaAnnalsIndex",
        component: () => import("@/views/ma/annals/index"),
        meta: { title: "Ma老兵战史", icon: "dashboard" }
      },
      {
        path: "/annals/artical",
        name: "MaAnnalsArtical",
        component: () => import("@/views/ma/annals/artical"),
        // component: MaCsArticalLayout,
        meta: { title: "Ma老兵战史文章", icon: "dashboard" }
      },
      {
        path: "/case-studies/index",
        name: "MaCaseStudiesIndex",
        component: () => import("@/views/ma/case-studies/index"),
        meta: { title: "Ma成功案例", icon: "dashboard" }
      },
      {
        path: "/case-studies/artical",
        name: "MaCaseStudiesArtical",
        component: () => import("@/views/ma/case-studies/artical"),
        // component: MaCsArticalLayout,
        meta: { title: "Ma成功案例文章", icon: "dashboard" }
      },
      {
        path: "/temp_upload/article",
        name: "MaUploadArtical",
        component: () => import("@/views/ma/temp_upload/article"),
        // component: MaCsArticalLayout,
        meta: { title: "Ma文章录入（临时）", icon: "dashboard" }
      }

    ]
  },
  // //courier-station
  // {
  //   path: "/courier-station",
  //   redirect: "/courier-station/index",
  //   name: "MaCourierStation",
  //   meta: { title: "M测试老兵驿站", icon: "user" },
  //   component: MaCsLayout,
  //   children: [
  //     {
  //       // path: "/ma/home/index",
  //       path: "/courier-station/index",
  //       name: "MaCourierStationIndex",
  //       component: () => import("@/views/ma/courier-station/index"),
  //       meta: { title: "Ma测试老兵驿站", icon: "dashboard" }
  //     },
  //     {
  //       // path: "/ma/home/index",
  //       path: "/courier-station/artical",
  //       name: "MaCourierStationArtical",
  //       component: () => import("@/views/ma/courier-station/artical"),
  //       // component: MaCsArticalLayout,
  //       meta: { title: "Ma测试老兵驿站文章", icon: "dashboard" }
  //     }
  //   ]
  // },

  {
    path: "/user",
    component: Layout,
    redirect: "/user/index",
    name: "User",
    meta: { title: "用户管理", icon: "user" },
    children: [
      {
        path: "index",
        name: "UserList",
        component: () => import("@/views/user/index"),
        meta: { title: "用户列表", icon: "user" }
      }
    ]
  },

  {
    path: "/travel",
    component: Layout,
    redirect: "/travel/index",
    meta: { title: "旅游板块", icon: "tree" },
    children: [
      {
        path: "index",
        name: "travel",
        component: () => import("@/views/travel/index"),
        meta: { title: "订单管理", icon: "form" }
      }
    ]
  },

  {
    path: "/culture",
    redirect: "/culture/subject",
    name: "culture",
    meta: { title: "老兵文化", icon: "education" },
    component: Layout,
    children: [
      {
        path: "subject",
        name: "subject",
        meta: { title: "科目管理", icon: "dashboard" },
        component: () => import("@/views/culture/subject")
      },
      {
        path: "article",
        name: "article",
        meta: { title: "文章编辑", icon: "dashboard" },
        component: () => import("@/views/culture/article")
      }
    ]
  },

  {
    path: "/test",
    redirect: "/test/web",
    name: "testPage",
    meta: { title: "测试页面", icon: "example" },
    component: Layout,
    children: [
      {
        path: "reg",
        name: "register",
        meta: { title: "注册", icon: "dashboard" },
        component: () => import("@/views/www/register")
      },
      {
        path: "profile",
        name: "profile",
        component: () => import("@/views/user/profile"),
        meta: { title: "资料提交", icon: "user" }
      },
      {
        path: "validate",
        name: "validate",
        component: () => import("@/views/test/LaobingCodeValidate"),
        meta: { title: "老兵码验证", icon: "star" }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true }
];

const createRouter = () =>
  new Router({
    // mode: 'history',该模式可以去掉地址栏中的#号  // require service support
    // mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;

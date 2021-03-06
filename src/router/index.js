import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";
import MaLayout from "@/layout/ma/home/index";
import MaLayout404 from "@/layout/ma/404";

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
    redirect: "/ma/",
    component: () => import("@/views/ma/home/index"),
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

  // {
  //   path: "/laobing",
  //   component: () => import("@/views/loginlb/index")
  // },

  // {
  //   path: "/404",
  //   component: () => import("@/views/404"),
  //   hidden: true
  // },

  {
    path: "/404",
    name: "dashboard",
    meta: { title: "404", icon: "user" },
    component: MaLayout404,
    children: [
      {
        path: "/404",
        name: "404page",
        component: () => import("@/views/404"),
        meta: { title: "404", icon: "dashboard" }
      }
    ]
  },

  {
    path: "/admin",
    redirect: "/admin/dashboard",
    name: "admin",
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
  // {
  //   path: "/chart",
  //   redirect: "/chart/index",
  //   name: "Chart",
  //   meta: { title: "图表示例", icon: "user" },
  //   component: Layout,
  //   children: [
  //     {
  //       path: "/chart/index",
  //       name: "Charts",
  //       component: () => import("@/views/chart/index"),
  //       meta: { title: "数表中心", icon: "dashboard" }
  //     }
  //   ]
  // },
  // URL for new pages edited by Ma
  {
    path: "/ma",
    // redirect: "/ma/",
    redirect: "/home/index",
    name: "MaTest",
    meta: { title: "LBLB.Wang", icon: "user" },
    component: MaLayout,
    children: [
      {
        // path: "/ma/home/index",
        path: "/home/index",
        name: "MaTestindex",
        component: () => import("@/views/ma/home/index"),
        meta: { title: "首页", icon: "dashboard" }
      },
      {
        path: "/setting/index",
        name: "MaSettingIndex",
        component: () => import("@/views/ma/setting/index"),
        meta: { title: "个人设置", icon: "dashboard" }
      },
      {
        path: "/courier-station/index",
        name: "MaCourierStationIndex",
        component: () => import("@/views/ma/courier-station/index"),
        meta: { title: "老兵驿站", icon: "dashboard" }
      },
      {
        path: "/courier-station/article",
        name: "MaCourierStationArticle",
        component: () => import("@/views/ma/courier-station/article"),
        // component: MaCsArticleLayout,
        meta: { title: "老兵驿站", icon: "dashboard" }
      },
      {
        path: "/annals/index",
        name: "MaAnnalsIndex",
        component: () => import("@/views/ma/annals/index"),
        meta: { title: "老兵战史", icon: "dashboard" }
      },
      {
        path: "/annals/article",
        name: "MaAnnalsArticle",
        component: () => import("@/views/ma/annals/article"),
        // component: MaCsArticleLayout,
        meta: { title: "老兵战史", icon: "dashboard" }
      },
      {
        path: "/case-studies/index",
        name: "MaCaseStudiesIndex",
        component: () => import("@/views/ma/case-studies/index"),
        meta: { title: "成功案例", icon: "dashboard" }
      },
      {
        path: "/case-studies/article",
        name: "MaCaseStudiesArticle",
        component: () => import("@/views/ma/case-studies/article"),
        // component: MaCsArticleLayout,
        meta: { title: "成功案例文章", icon: "dashboard" }
      },
      {
        path: "/famous/people/index",
        name: "MaFamousPeopleIndex",
        component: () => import("@/views/ma/famous/people/index"),
        meta: { title: "老兵名人大辞典-老兵风采", icon: "dashboard" }
      },
      {
        path: "/famous/people/article",
        name: "MaFamousPeopleArticle",
        component: () => import("@/views/ma/famous/people/article"),
        // component: MaCsArticleLayout,
        meta: { title: "老兵名人大辞典", icon: "dashboard" }
      },
      {
        path: "/famous/enterprise/index",
        name: "MaFamousEnterpriseIndex",
        component: () => import("@/views/ma/famous/enterprise/index"),
        meta: { title: "老兵名企展播-老兵风采", icon: "dashboard" }
      },
      {
        path: "/famous/enterprise/article",
        name: "MaFamousEnterpriseArticle",
        component: () => import("@/views/ma/famous/enterprise/article"),
        // component: MaCsArticleLayout,
        meta: { title: "老兵名企展播", icon: "dashboard" }
      },
      {
        path: "/culture/on-tao/index",
        name: "MaCultureIndex",
        component: () => import("@/views/ma/culture/on-tao/index"),
        meta: { title: "老兵问道-老兵文化", icon: "dashboard" }
      },
      {
        path: "/culture/on-tao/article",
        name: "MaCultureArticle",
        component: () => import("@/views/ma/culture/on-tao/article"),
        // component: MaCsArticleLayout,
        meta: { title: "老兵问道-老兵文化", icon: "dashboard" }
      },
      {
        path: "/culture/storage/index",
        name: "MaCultureStorage",
        component: () => import("@/views/ma/culture/storage/index"),
        meta: { title: "资料库-老兵文化", icon: "dashboard" }
      },
      {
        path: "/culture/storage/articleVideo",
        name: "MaCultureVideoArticle",
        component: () => import("@/views/ma/culture/storage/articleVideo"),
        // component: MaCsArticleLayout,
        meta: { title: "视频-资料库", icon: "dashboard" }
      },
      {
        path: "/culture/storage/articleMusic",
        name: "MaCultureMusicArticle",
        component: () => import("@/views/ma/culture/storage/articleMusic"),
        // component: MaCsArticleLayout,
        meta: { title: "音乐-资料库", icon: "dashboard" }
      },
      {
        path: "/culture/storage/articlePainting",
        name: "MaCulturePaintingArticle",
        component: () => import("@/views/ma/culture/storage/articlePainting"),
        // component: MaCsArticleLayout,
        meta: { title: "书画-资料库", icon: "dashboard" }
      },
      {
        path: "/culture/storage/articlePicture",
        name: "MaCulturePictureArticle",
        component: () => import("@/views/ma/culture/storage/articlePicture"),
        // component: MaCsArticleLayout,
        meta: { title: "图片-资料库", icon: "dashboard" }
      },
      {
        path: "/culture/new-media/index",
        name: "MaCultureNewMediaIndex",
        component: () => import("@/views/ma/culture/new-media/index"),
        // component: MaCsArticleLayout,
        meta: { title: "新媒体矩阵-资料库", icon: "dashboard" }
      },
      {
        path: "/culture/competition/index",
        name: "MaCultureCompetitionIndex",
        component: () => import("@/views/ma/culture/competition/index"),
        // component: MaCsArticleLayout,
        meta: { title: "比赛活动-资料库", icon: "dashboard" }
      },
      {
        path: "/culture/competition/detail",
        name: "MaCultureCompetitionDetail",
        component: () => import("@/views/ma/culture/competition/detail"),
        // component: MaCsArticleLayout,
        meta: { title: "比赛活动-资料库", icon: "dashboard" }
      },
      {
        path: "/homeland/index",
        name: "MaHomeLand",
        component: () => import("@/views/ma/homeland/index"),
        // component: MaCsArticleLayout,
        meta: { title: "老兵家园", icon: "dashboard" }
      },
      {
        path: "/homeland/law-list",
        name: "MaHomeLandLawList",
        component: () => import("@/views/ma/homeland/law-list"),
        // component: MaCsArticleLayout,
        meta: { title: "法律-老兵家园", icon: "dashboard" }
      },
      {
        path: "/homeland/law-detail",
        name: "MaHomeLandLawDetail",
        component: () => import("@/views/ma/homeland/law-detail"),
        // component: MaCsArticleLayout,
        meta: { title: "法律-老兵家园", icon: "dashboard" }
      },
      {
        path: "/homeland/qa-list",
        name: "MaHomeLandQaList",
        component: () => import("@/views/ma/homeland/qa-list"),
        // component: MaCsArticleLayout,
        meta: { title: "问答-老兵家园", icon: "dashboard" }
      },
      {
        path: "/homeland/qa-detail",
        name: "MaHomeLandQaDetail",
        component: () => import("@/views/ma/homeland/qa-detail"),
        // component: MaCsArticleLayout,
        meta: { title: "问答-老兵家园", icon: "dashboard" }
      },
      {
        path: "/homeland/lawyer-list",
        name: "MaHomeLandLawyerList",
        component: () => import("@/views/ma/homeland/lawyer-list"),
        // component: MaCsArticleLayout,
        meta: { title: "律师-老兵家园", icon: "dashboard" }
      },
      {
        path: "/homeland/lawyer-detail",
        name: "MaHomeLandLawyerDetail",
        component: () => import("@/views/ma/homeland/lawyer-detail"),
        // component: MaCsArticleLayout,
        meta: { title: "律师-老兵家园", icon: "dashboard" }
      },
      {
        path: "/sentiment/index",
        name: "MaSentimentIndex",
        component: () => import("@/views/ma/sentiment/index"),
        meta: { title: "老兵情怀", icon: "dashboard" }
      },
      {
        path: "/sentiment/critical-detail",
        name: "MaSentimentCriticalDetail",
        component: () => import("@/views/ma/sentiment/critical-detail"),
        meta: { title: "大病救助-老兵情怀", icon: "dashboard" }
      },
      {
        path: "/sentiment/orphan-detail",
        name: "MaSentimentOrphanDetail",
        component: () => import("@/views/ma/sentiment/orphan-detail"),
        meta: { title: "孤儿救助-老兵情怀", icon: "dashboard" }
      },
      {
        path: "/sentiment/donate-detail",
        name: "MaSentimentDonateDetail",
        component: () => import("@/views/ma/sentiment/donate-detail"),
        meta: { title: "捐赠众筹-老兵情怀", icon: "dashboard" }
      },
      {
        path: "/sentiment/report-detail",
        name: "MaSentimentReportDetail",
        component: () => import("@/views/ma/sentiment/report-detail"),
        meta: { title: "救助报道-老兵情怀", icon: "dashboard" }
      },
      {
        path: "/policy/index",
        name: "MaPolicyIndex",
        component: () => import("@/views/ma/policy/index"),
        meta: { title: "老兵政策", icon: "dashboard" }
      },
      {
        path: "/policy/article",
        name: "MaPolicyArticle",
        component: () => import("@/views/ma/policy/article"),
        meta: { title: "老兵政策", icon: "dashboard" }
      },
      {
        path: "/profile/index",
        name: "MaProfileIndex",
        component: () => import("@/views/ma/profile/index"),
        meta: { title: "我的文章", icon: "dashboard" }
      },
      {
        path: "/profile/article",
        name: "MaProfileArticle",
        component: () => import("@/views/ma/profile/article"),
        meta: { title: "我的文章", icon: "dashboard" }
      },
      {
        path: "/inbox/index",
        name: "MaInbox",
        component: () => import("@/views/ma/inbox/index"),
        meta: { title: "站内信", icon: "dashboard" }
      },
      {
        path: "/follow/index",
        name: "MaFollow",
        component: () => import("@/views/ma/follow/index"),
        meta: { title: "关注", icon: "dashboard" }
      },
      {
        path: "/articles/index",
        name: "MaArticles",
        component: () => import("@/views/ma/articles/index"),
        meta: { title: "我的文章", icon: "dashboard" }
      },
      {
        path: "/telecom/index",
        name: "MaTelecomIndex",
        component: () => import("@/views/ma/telecom/index"),
        meta: { title: "老兵通讯", icon: "dashboard" }
      },
      {
        path: "/jobs/index",
        name: "MaJobsIndex",
        component: () => import("@/views/ma/jobs/index"),
        meta: { title: "创就业", icon: "dashboard" }
      },
      {
        path: "/jobs/job-detail",
        name: "MaJobsDetail",
        component: () => import("@/views/ma/jobs/job-detail"),
        meta: { title: "创就业", icon: "dashboard" }
      },
      {
        path: "/house-moving/index",
        name: "MaHmIndex",
        component: () => import("@/views/ma/house-moving/index"),
        meta: { title: "老兵搬家", icon: "dashboard" }
      },
      {
        path: "/house-moving/detail",
        name: "MaHmDetail",
        component: () => import("@/views/ma/house-moving/detail"),
        meta: { title: "老兵搬家", icon: "dashboard" }
      },

      // {
      //   path: "/policy/index",
      //   name: "MaPolicyIndex",
      //   meta: { 
      //     title: "老兵政策", 
      //     icon: "dashboard",
      //     layuout: MaPolicyLayout 
      //   },
      //   component: () => import("@/views/ma/policy/index")
      // },
      {
        path: "/temp-upload/article",
        name: "MaUploadArticle",
        component: () => import("@/views/ma/temp-upload/article"),
        // component: MaCsArticleLayout,
        meta: { title: "文章录入（临时）", icon: "dashboard" }
      }

    ]
  },
  // {
  //   path: "/ma/policy",
  //   redirect: "/ma/policy/index",
  //   name: "policy",
  //   meta: { title: "老兵政策", icon: "user" },
  //   component: MaPolicyLayout,
  //   children: [
  //     {
  //       path: "/ma/policy/index",
  //       name: "MaPolicyIndex",
  //       component: () => import("@/views/ma/policy/index"),
  //       meta: { title: "老兵政策", icon: "dashboard" }
  //     }
  //   ]
  // },
  // {
  //   path: "/ma/policy/article",
  //   redirect: "/ma/policy/article",
  //   name: "policyArticle",
  //   meta: { title: "老兵政策", icon: "user" },
  //   component: MaLayout,
  //   children: [
  //     {
  //       path: "/ma/policy/article",
  //       name: "MaPolicyArticle",
  //       component: () => import("@/views/ma/policy/article"),
  //       meta: { title: "老兵政策", icon: "dashboard" }
  //     }
  //   ]
  // },
  // {
  //   path: "/ma/sentiment",
  //   redirect: "/ma/sentiment/index",
  //   name: "sentiment",
  //   meta: { title: "老兵情怀", icon: "user" },
  //   component: MaSentimentLayout,
  //   children: [
  //     {
  //       path: "/ma/sentiment/index",
  //       name: "MaSentimentIndex",
  //       component: () => import("@/views/ma/sentiment/index"),
  //       meta: { title: "老兵情怀", icon: "dashboard" }
  //     },
  //     {
  //       path: "/ma/sentiment/critical-detail",
  //       name: "MaSentimentCriticalDetail",
  //       component: () => import("@/views/ma/sentiment/critical-detail"),
  //       meta: { title: "大病救助-老兵情怀", icon: "dashboard" }
  //     },
  //     {
  //       path: "/ma/sentiment/orphan-detail",
  //       name: "MaSentimentOrphanDetail",
  //       component: () => import("@/views/ma/sentiment/orphan-detail"),
  //       meta: { title: "孤儿救助-老兵情怀", icon: "dashboard" }
  //     },
  //     {
  //       path: "/ma/sentiment/donate-detail",
  //       name: "MaSentimentDonateDetail",
  //       component: () => import("@/views/ma/sentiment/donate-detail"),
  //       meta: { title: "捐赠众筹-老兵情怀", icon: "dashboard" }
  //     },
  //     {
  //       path: "/ma/sentiment/report-detail",
  //       name: "MaSentimentReportDetail",
  //       component: () => import("@/views/ma/sentiment/report-detail"),
  //       meta: { title: "救助报道-老兵情怀", icon: "dashboard" }
  //     }
  //   ]
  // },
  // {
  //   path: "/ma/telecom/index",
  //   redirect: "/ma/telecom/index",
  //   name: "telecom",
  //   meta: { title: "老兵通讯", icon: "user" },
  //   component: MaLayout,
  //   children: [
  //     {
  //       path: "/ma/telecom/index",
  //       name: "MaTelecomIndex",
  //       component: () => import("@/views/ma/telecom/index"),
  //       meta: { title: "老兵通讯", icon: "dashboard" }
  //     }
  //   ]
  // },
  // {
  //   path: "/ma/jobs/index",
  //   redirect: "/ma/jobs/index",
  //   name: "jobs",
  //   meta: { title: "创就业", icon: "user" },
  //   component: MaLayout,
  //   children: [
  //     {
  //       path: "/ma/jobs/index",
  //       name: "MaJobsIndex",
  //       component: () => import("@/views/ma/jobs/index"),
  //       meta: { title: "创就业", icon: "dashboard" }
  //     },
  //     {
  //       path: "/ma/jobs/job-detail",
  //       name: "MaJobsDetail",
  //       component: () => import("@/views/ma/jobs/job-detail"),
  //       meta: { title: "创就业", icon: "dashboard" }
  //     }
  //   ]
  // },
  // {
  //   path: "/ma/house-moving/index",
  //   redirect: "/ma/house-moving/index",
  //   name: "housemoving",
  //   meta: { title: "老兵搬家", icon: "user" },
  //   component: MaLayout,
  //   children: [
  //     {
  //       path: "/ma/house-moving/index",
  //       name: "MaHmIndex",
  //       component: () => import("@/views/ma/house-moving/index"),
  //       meta: { title: "老兵搬家", icon: "dashboard" }
  //     },
  //     {
  //       path: "/ma/house-moving/detail",
  //       name: "MaHmDetail",
  //       component: () => import("@/views/ma/house-moving/detail"),
  //       meta: { title: "老兵搬家", icon: "dashboard" }
  //     }
  //   ]
  // },
  
  // {
  //   path: "/user",
  //   component: Layout,
  //   redirect: "/user/index",
  //   name: "User",
  //   meta: { title: "用户管理", icon: "user" },
  //   children: [
  //     {
  //       path: "index",
  //       name: "UserList",
  //       component: () => import("@/views/user/index"),
  //       meta: { title: "用户列表", icon: "user" }
  //     }
  //   ]
  // },

  // {
  //   path: "/travel",
  //   component: Layout,
  //   redirect: "/travel/index",
  //   meta: { title: "旅游板块", icon: "tree" },
  //   children: [
  //     {
  //       path: "index",
  //       name: "travel",
  //       component: () => import("@/views/travel/index"),
  //       meta: { title: "订单管理", icon: "form" }
  //     }
  //   ]
  // },

  // {
  //   path: "/culture",
  //   redirect: "/culture/subject",
  //   name: "culture",
  //   meta: { title: "老兵文化", icon: "education" },
  //   component: Layout,
  //   children: [
  //     {
  //       path: "subject",
  //       name: "subject",
  //       meta: { title: "科目管理", icon: "dashboard" },
  //       component: () => import("@/views/culture/subject")
  //     },
  //     {
  //       path: "article",
  //       name: "article",
  //       meta: { title: "文章编辑", icon: "dashboard" },
  //       component: () => import("@/views/culture/article")
  //     }
  //   ]
  // },

  // {
  //   path: "/test",
  //   redirect: "/test/web",
  //   name: "testPage",
  //   meta: { title: "测试页面", icon: "example" },
  //   component: Layout,
  //   children: [
  //     {
  //       path: "reg",
  //       name: "register",
  //       meta: { title: "注册", icon: "dashboard" },
  //       component: () => import("@/views/www/register")
  //     },
  //     {
  //       path: "profile",
  //       name: "profile",
  //       component: () => import("@/views/user/profile"),
  //       meta: { title: "资料提交", icon: "user" }
  //     },
  //     {
  //       path: "validate",
  //       name: "validate",
  //       component: () => import("@/views/test/LaobingCodeValidate"),
  //       meta: { title: "老兵码验证", icon: "star" }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true }
];

const createRouter = () =>
  new Router({
    // mode: 'history',该模式可以去掉地址栏中的#号  // require service support
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

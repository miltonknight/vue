export const LaobingUrl = {
  user_login: "/oauth/token",
  user_getProfile: '/profile/authapi/profile',
  user_modify_password: '/user/authapi/modifyPassword',
  user_show_soldier_code: '/profile/authapi/soldierCode',
  user_decode_soldier_code: '/profile/authapi/soldierCode/decode',
  admin_getUserByPage: '/user/adminapi/users',
  admin_add_user: '/user/adminapi/add/user',
  admin_delete_user: '/user/adminapi/delete',
  admin_disable_user: '/user/adminapi/disable',
  admin_get_orderlist: '/orderTravel/adminapi/users',
  admin_generate_code: '/profile/adminapi/laobing/generatecode',
  admin_profile_update: '/profile/adminapi/profile/update',
  admin_new_password: '/user/adminapi/new_password/',
  admin_add_culture_subject: '/cultureSubject/adminapi/add',
  admin_list_culture_subject: '/cultureSubject/adminapi/list',
  disk_query_all_files: '/diskFile/authapi/queryAllFiles',
  disk_delete_file: '/diskFile/authapi/delete',
  disk_generate_download_code: '/diskFile/authapi/generateCode',
  disk_user_getProfile: '/profile/authapi/profile/vue',
  article_add_article: '/cultureArticle/authapi/article/add',
  // -------------------- whole site modulars
  modular_focus: '/article/findModelCarousel', // whole site modular focus
  modular_article_list: '/article/pageArticleBySortId', // whole site article list
  modular_articles: '/article/findArticleDetail', // whole site article
  // -------------------- homepage apis
  index_focus: '/homepage/findHomepageFocus', // index_focus
  // index_coupon: '/homepage/findHomepageFocus', // index_coupon
  index_article: '/homepage/findHomepageModule', // index_article
  famous_people: '/veteranFamous/pageVereranFamous', // famous_list
  user_article_list: '/article/pageArticleByUid', // persenal articles
  qa_index_list: '/lawConsult/findLawConsultLimit', // component qa index
  qa_lsit: '/lawConsult/pageLawConsultList', // qa list
  qa_detail: '/lawConsult/findLawConsultDetailById', // qa detail
  qa_is_useful: '/lawConsult/addAnswerIfUsefulByArticleId', // qa is useful
  lawyer_index_list: '/lawyer/lawFindLawyerListLimit', // component lawyer index
  lawyer_list: '/lawyer/pageLawyer', // lawyer list
  temp_add_article: '/article/insertArticle' // temp add article
}


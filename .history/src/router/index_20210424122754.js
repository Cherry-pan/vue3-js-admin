import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";
const routes = [
  {
    path: "/",
    redirect: "/login",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  // 登录
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/account/Login.vue"),
  },
  // 注册
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/account/Register.vue"),
  },
  // 忘记密码
  {
    path: "/forgetPassword",
    name: "ForgetPassword",
    component: () => import("../views/account/ForgetPassword.vue"),
  },
  //首页
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/layout/Index.vue"),
  },
  // 信息管理
  {
    path: "/news",
    name: "News",
    component: () => import("../views/layout/Index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  NProgress.start();
  return true; //取消跳转 explicitly return false to cancel the navigation  true的时候跳转
});

router.afterEach((to, from) => {
  NProgress.done();
});

export default router;

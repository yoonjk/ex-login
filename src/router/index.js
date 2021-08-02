import Vue from "vue"
import VueRouter from "vue-router"

import store from "../store"

const beforeAuth = isAuth => (from, to, next) => {
  const isAuthenticated = store.getters["isAuthenticated"]
  if ((isAuthenticated && isAuth) || (!isAuthenticated && !isAuth)) {
    return next()
  } else {
    // 홈 화면으로 이동
    next("/jwt/home")
  }
}

Vue.use(VueRouter)

const routes = [
  // code..
  {
    path: "/jwt/home",
    name: "JwtHome",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    name: "JwtLogin",
    component: () => import("../views/Login.vue"),
    beforeEnter: beforeAuth(false),
  },
  {
    path: "/register",
    name: "JwtRegister",
    component: () => import("../views/Register.vue"),
    beforeEnter: beforeAuth(false),
  },
  {
    path: "/mypage",
    name: "JwtMypage",
    component: () => import("../views/Mypage.vue"),
    beforeEnter: beforeAuth(true),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
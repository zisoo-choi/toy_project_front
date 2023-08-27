import SignUpPage from "@/views/signUp/SignUpPage.vue";
import HomeView from "@/views/HomeView";
import OAuthComplete from "@/views/signUp/OAuthComplete";

const signUpRouter = [
  {
    path: "/sign-up-page",
    name: "SignUpPage",
    component: SignUpPage,
  },
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/oauth-complete-page",
    name: "OAuthComplete",
    component: OAuthComplete,
  },
  // {
  //   path: "/authentication/kakao/login",
  //   name: "AccessToken",
  //   component: AccessToken
  // },
  {
    path: "/login-page",
    name: "LoginPage",
    component: () => import("@/views/logIn/LoginPage.vue"),
    //component: LoginPage
  },
  // {
  //   path: "/authentication/kakao/login",
  //   name: "kakao",
  //   component: () => import("@/components/authentication/AccessToken.vue"),
  // },
  {
    path: "/authentication/kakao/callback",
    name: "kakao",
    component: () => import("@/components/authentication/AccessToken.vue"),
    props: route => ({ code: route.query.code }), // 이 부분을 추가하여 query 파라미터를 props로 전달합니다.
  }
]

export default signUpRouter

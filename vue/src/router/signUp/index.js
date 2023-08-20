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
]

export default signUpRouter

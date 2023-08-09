import SignUpPage from "@/views/signUp/SignUpPage.vue";
import HomeView from "@/views/HomeView";

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
]

export default signUpRouter

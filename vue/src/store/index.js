import { createStore } from 'vuex'

import SignUpModule from "@/store/signUp/SignUpModule"
import KakaoModule from './kakao/KakaoModule'

export default createStore({
  modules: {
    signUpModule: SignUpModule,
    KakaoModule: KakaoModule
  }
})
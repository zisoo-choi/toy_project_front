import { createStore } from 'vuex'

import SignUpModule from "@/store/signUp/SignUpModule"

export default createStore({
  modules: {
    signUpModule: SignUpModule
  }
})
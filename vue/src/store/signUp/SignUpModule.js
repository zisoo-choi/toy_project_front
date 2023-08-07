import mutations from "@/store/signUp/mutations"
import actions from "@/store/signUp/actions"
import state from "@/store/signUp/states"

const SignUpModule = {
    namespaced: true,
    state, // 게시물 상태
    actions,
    mutations,
}

export default SignUpModule
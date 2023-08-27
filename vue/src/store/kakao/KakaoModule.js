import mutations from "@/store/kakao/mutations"
import actions from "@/store/kakao/actions"
import state from "@/store/kakao/states"

const KakaoModule = {
    namespaced: true,
    state, // 게시물 상태
    actions,
    mutations,
}

export default KakaoModule
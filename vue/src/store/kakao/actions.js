import axiosInst from "@/utility/axiosInst";

export default {
  requestKakaoLoginToSpring () {
      return axiosInst.get('/authentication/kakao/login')
      .then((res) => {
        window.location.href = res.data;
    })
  },
  getTokenToSpring(context, payload) {
    axiosInst.get("/authentication/kakao/callback", { params: { code: payload } })
      .then((res) => {
          console.log("token : " + res.data)
          console.log("token : " + res.data.access_token)

          // localStorage.setItem("accesstoken", res.data.access_token)
          // localStorage.setItem("refreshtoken", res.data.refresh_token)
      });
  }
  // async getAccessTokenFromSpringRedirection({ commit }, payload) {
  //   const { code } = payload;

  //   console.log("code: "+code);
  //   try {
  //     const res = await axiosInst.get(`/authentication/kakao/callback?code=${code}`);
  //     // alert("res: " + JSON.stringify(res.data))
  //     localStorage.setItem("userToken", res.data);
  //     commit(GITHUB_LOGIN_COMPLETE, true); // 'commit' 함수를 사용하기 위해 commit 매개변수를 사용
  //   } catch (error) {
  //     alert('문제 발생!');
  //   }
  // }
}
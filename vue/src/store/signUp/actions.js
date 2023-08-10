import axiosInst from "@/utility/axiosInst";

export default {
  requestSignUpToSpring(_, payload) {
    const { userId, userPw, userAddress, userPhone } = payload;

    console.log("userId: ", userId,", userPw:", userPw)
    console.log("userAddress: ", userAddress,", userPhone:", userPhone)
    
    return axiosInst.post("/member/sign-up", { userId, userPw, userAddress, userPhone })
        .then((res) => {
          alert("회원가입이 완료되었습니다.");
          console.log(res);
        })
        .catch(() => {
          console.error
        });
  }
}
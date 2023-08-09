import axiosInst from "@/utility/axiosInst";

export default {
  requestSignUpToSpring(context, payload) {
    const { userId, userPw, userAddress, userPhone } = payload;

    console.log("userId: ", userId,", userPw:", userPw)
    console.log("userAddress: ", userAddress,", userPhone:", userPhone)
    
    return axiosInst.post("/member/sign-up", { userId, userPw, userAddress, userPhone })
        .then(() => {
          alert("회원가입이 완료되었습니다.");
        })
        .catch(() => {
          alert("문제 발생!");
        });
  }
}
import axiosInst from "@/utility/axiosInst";

export default {
  requestSignUpToSpring(context, payload) {
    const { userId, userPw } = payload;

    console.log("userId: ", userId,", userPw:", userPw)
    
    return axiosInst.post("/member/sign-up", { userId, userPw })
        .then(() => {
          alert("회원가입이 완료되었습니다.");
        })
        .catch(() => {
          alert("문제 발생!");
        });
  }
}
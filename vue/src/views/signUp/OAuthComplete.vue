<template>
    <div>
      <div>로그인</div>
      <router-link :to="kakaoLoginUrl">카카오톡 로그인</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        kakaoLoginUrl: 'https://kauth.kakao.com/oauth/authorize?client_id=KEY&redirect_uri=http://localhost:8080/oauth-complete-page&response_type=code'
      }
    }
    // 여기에 필요한 로직을 추가할 수 있습니다.
  }
  </script>
  
  <style scoped>
  /* 필요한 스타일을 추가할 수 있습니다. */
  </style>
  
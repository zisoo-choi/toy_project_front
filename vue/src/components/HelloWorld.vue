<template>
  <v-btn color="orange" @click="goToSignUp">회원가입</v-btn>
  <v-btn color="green" @click="goToOAuth">카카오톡 로그인</v-btn>
</template>

<script>
// import router from "@/router";

export default {
  data() {
    return {

    }
  },
  methods: {
    goToSignUp() {
      // router.push("/sign-up-page").catch(() => {});
      this.$router.push("/sign-up-page");
    },
    goToOAuth() {
      this.$router.push("/oauth-complete-page");
    }
  }
}
</script>

<style>
</style>
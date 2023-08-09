<template>
  <v-btn color="orange" @click="goToSignUp">회원가입</v-btn>
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
    }
  }
}
</script>

<style>
</style>
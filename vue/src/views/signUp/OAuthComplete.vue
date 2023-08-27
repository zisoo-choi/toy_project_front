<template>
  <div>
    <!-- 카카오 OAuth page -->
    <button @click="onSubmit">
      <img :src="require('@/assets/kakaoLogin.png')" />
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
const KakaoModule = 'KakaoModule'

export default {
  data() {
    return {
    }
  },
  methods: {
      ...mapActions(KakaoModule, ['requestKakaoLoginToSpring']),
      onSubmit () {
          this.requestKakaoLoginToSpring()
      },
  }
}
</script>

<style scoped>
</style>

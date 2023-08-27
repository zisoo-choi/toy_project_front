<template>
    <div>
        여긴 콜백 페이지!
    </div>
</template>

<script>
import { mapActions } from 'vuex';
// import router from '@/router';
const KakaoModule = 'KakaoModule'

export default {
    data() {
        return {
            codes: "",
        }
    },
    created() {
        this.create();
    },
    methods: {
        create() {
            this.codes = this.$route.query.code;
            console.log("codes : " + this.codes)

            this.getToken();
            this.$router.push("/")
        },
        async getToken() {
            await this.getTokenToSpring(this.codes)
        },
        ...mapActions(KakaoModule, ['getTokenToSpring'])
    },
}
</script>

<style lang="">
    
</style>
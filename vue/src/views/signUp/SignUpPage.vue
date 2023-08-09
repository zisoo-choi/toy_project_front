<template lang="">
    <div>
        <h2>회원가입</h2>
        <sign-up-form @submit="onSubmit" />
    </div>
</template>

<script>
import SignUpForm from '@/components/signUp/SignUpForm.vue';

const signUpModule = "signUpModule"

import { mapActions } from "vuex";

export default {
    components: {
        SignUpForm
    },
    methods: {
        ...mapActions(signUpModule, ['requestSignUpToSpring']),
        async onSubmit (payload) {
            console.log(payload)
            this.requestSignUpToSpring(payload)
        }
    }    
}
</script>

<style lang="">
    
</style>
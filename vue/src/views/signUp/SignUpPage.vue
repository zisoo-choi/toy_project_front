<template lang="">
    <div>
        안녕 너는 누구니?
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
            await this.requestSignUpToSpring(payload)
        }
    }    
}
</script>

<style lang="">
    
</style>
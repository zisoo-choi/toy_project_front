<template>
    <form @submit.prevent="onSubmit" class="signup-form">
        <input type="text" v-model="userId" placeHolder="아이디"/>
        <input type="password" v-model="userPw" placeHolder="비밀번호"/>
        <input type="text" v-model="userAddress" placeHolder="주소"/>
        <input type="text" v-model="userPhone" placeHolder="전화번호"/>
        <v-btn @click="onSubmit" color="primary">가입하기</v-btn>
    </form>
</template>

<script>
export default {
    data() {
        return {
            userId: '',
            userPw: '',
            userAddress: '',
            userPhone: ''
        }
    },
    methods: {
        onSubmit() {
            this.$emit("submit", {
                userId: this.userId,
                userPw: this.userPw,
                userAddress: this.userAddress,
                userPhone: this.userPhone
            });
        }
    }
}
</script>

<style lang="css">
    .signup-form {
    display: flex;
    flex-direction: column; /* 세로로 나열되도록 설정 */
    align-items: center; /* 가운데 정렬 */
}

.input-field {
    margin: 10px 0; /* 각 input 사이의 간격 조정 */
    padding: 5px;
}
</style>

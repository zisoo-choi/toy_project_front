<template>
    <form @submit.prevent="onSubmit" class="signup-form">
        <input class="formLine" type="text" v-model="userId" placeHolder="아이디"/>
        <input class="formLine" type="password" v-model="userPw" placeHolder="비밀번호"/>
        <input class="formLine" type="text" v-model="userAddress" placeHolder="주소"/>
        <input class="formLine" type="text" v-model="userPhone" placeHolder="전화번호"/>
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
.formLine{
    width: 300px;
    height: 50px;
    background-color: rgb(233, 233, 233);
    border-radius: 5px;
    margin: 5px;
}
.formLine:hover{
    width: 300px;
    height: 50px;
    background-color: rgb(247, 247, 247);
    border-radius: 5px;
    margin: 5px;
}
</style>

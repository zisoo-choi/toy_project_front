<template>
  <SignUpPage />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import SignUpPage from '../views/signUp/SignUpPage.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    SignUpPage
  },
});
</script>

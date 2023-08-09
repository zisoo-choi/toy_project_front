<template>
  <Helloworld />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Helloworld  from '../components/HelloWorld.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    Helloworld
  },
});
</script>

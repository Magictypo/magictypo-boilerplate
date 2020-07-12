<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { mapMutations } from 'vuex';
import { SOME_MUTATION } from '@/store/mutation-types';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  methods: {
    ...mapMutations({
      SOME_MUTATION,
    }),
  },
};
</script>

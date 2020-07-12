import Vue from 'vue';

Vue.mixin({
  computed: {
    isAuthenticated() {
      return this.$store.state.auth.isAuthenticated;
    },
  },
});

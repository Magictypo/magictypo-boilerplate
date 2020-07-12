<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <Header></Header>

    <main role="main" class="pt-3">
      <router-view/>
    </main>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import AuthSvc from '@/services/AuthSvc';
import Header from '@/components/Header.vue';

export default {
  name: 'DashboardLayout',
  // eslint-disable-next-line vue/no-unused-components
  components: { Header, Footer },
  computed: {
    user() {
      return this.$store.getters['auth/currentUser'];
    },
  },
  methods: {
    logOut() {
      this.$router.replace({ name: 'Login' });
      AuthSvc.signOut();
    },
  },
};
</script>

<style scoped>

</style>

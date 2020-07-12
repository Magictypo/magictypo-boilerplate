<template>
  <div>

    <Header></Header>

    <main role="main" class="pt-3">
      <router-view/>
    </main>

    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: { Footer, Header },
};
</script>

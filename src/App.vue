<template id="app">
  <NavBar :logo="logo_src" :alt="app_name"/>
  <router-view/>
  <Footer/>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      logo_src: "./img/logo.png",
      app_name: 'Make Your Burger'
    }
  }
}
</script>

<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Franklin Gothic Medium', sans-serif;
}



.main-container{
  margin: 50px;
  min-height: 330px;
}
</style>

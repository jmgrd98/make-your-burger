<template>
  <Banner/>
  <div class="main-container">
    <h1>Monte o seu burger:</h1>
    <p>Formulário</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue';

export default {

  name: 'HomeView',
  components: {
    Banner
  },
}
</script>

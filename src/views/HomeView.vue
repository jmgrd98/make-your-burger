<template>
  <Banner/>
  <div class="main-container">
    <h1>Monte o seu burger:</h1>
    <Form/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue';
import Form from '@/components/Form.vue';

export default {

  name: 'HomeView',
  components: {
    Banner,
    Form
  },
  
}
</script>

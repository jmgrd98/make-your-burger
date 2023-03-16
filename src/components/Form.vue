<template>
  <form v-on:submit.prevent="submit">
    <input type="text" v-model="nome">
    <input type="text" v-model="role">

    <button type="submit">Submit</button>
  </form>

  <p v-if="submitted">{{ this.newUser.nome }}</p>
  <p v-if="submitted">{{ this.newUser.role }}</p>
</template>

<script>
  export default {
    name: "FormComponent",
    data(){
      return{
        nome: '',
        role: '',
        submitted: false
      }
    },
    methods: {
      submit: function () {
        let newUser = {
          nome: this.nome,
          role: this.role,
        }

        this.submitted = true;
        this.nome = '';
        this.role = '';
      }
    }
  }
</script>

<style>
  form{
    display: flex;
    flex-direction: column;
    width: 250px;
    gap: 20px;
  }
</style>

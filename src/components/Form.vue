<template>
  <form v-on:submit.prevent="submit">
    <input type="text" v-model="nome">
    <input type="text" v-model="role">

    <button type="submit" v-on:click="submit">Submit</button>
  </form>

  <p v-if="submit">{{ nome }}</p>
  <p v-if="submit">{{ role }}</p>
</template>

<script>
  export default {
    name: "FormComponent",
    data(){
      return{
        nome: '',
        role: ''
      }
    },
    methods: {
      submit: function () {
        this.nome;
        this.role;
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

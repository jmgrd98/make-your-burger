<template>
  <h1>Hello, my name is {{ nome }}!</h1>
  <h2 v-if="show">I'm currently working as a {{ role }}</h2>
</template>

<script>

  export default {
    name: 'FirstComponent',
    data(){
      return {
        nome: 'John Doe',
        role: "Developer",
        show: false
      }
    },
    created() {
      setTimeout(() => {
        this.nome = 'Jane Doe'
        this.show = true;
      }, 1000)
    },
    mounted() {
      setTimeout(() => {
        this.nome = 'João'
      }, 2000)
    }
  }
</script>

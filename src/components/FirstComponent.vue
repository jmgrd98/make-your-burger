<template>
  <h1>Hello, my name is {{ nome }}!</h1>
  <h2>I'm currently working as a {{ role }}</h2>
</template>

<script>
  export default {
    name: 'FirstComponent',
    data(){
      return {
        nome: 'John Doe',
        role: "Developer"
      }
    }
  }
</script>

<template>
  <nav id="nav">
    <router-link to="/"><img :src="logo" :alt="alt" id="logo"/></router-link>
    <router-link to="/">Home</router-link> |
    <router-link to="/pedidos">Pedidos</router-link>
  </nav>
</template>

<script>
  export default {
    name: 'NavBar',
    props: ["logo", "alt"]
  }
</script>

<style scoped>

  #nav{
    background-color: #222;
    border-bottom: 4px solid #111;
    padding: 15px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  #nav a{
    color: #fcba03;
    text-decoration: none;
    margin: 0 10px;
    transition: .5s;
  }

  #nav a:hover{
    color: #fff;
  }

  #logo{
    width: 50px;
    height: 50px;
    margin-right: auto;
    justify-self: flex-start;
  }
</style>
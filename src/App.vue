<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
    <router-view/>
    <form-component></form-component>
</template>

<script>
// import FirstComponent from './components/FirstComponent'
import FormComponent from "@/components/Form";

export default {
  name: 'App',
  components: {
    FormComponent,
  }
}
</script>



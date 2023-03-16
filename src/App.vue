<template>
  <FormComponent @newUser-submitted="submit"/>
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



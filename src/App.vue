<template>
  <div id="app">
  
    <NavbarAlt/>
   
     <router-view />
  </div>
</template>

<script>
import NavbarAlt from './components/NavbarAlt.vue'
export default {
  name: 'App',
  components: {
    NavbarAlt
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
</style>

<template>
  <div id="app">
  
    
     <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
body{
  overflow-x:hidden;
}
</style>

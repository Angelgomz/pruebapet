<template>
  <div class="fluid">
  <b-navbar toggleable  class="pt-3 pb-3  pl-2 pr-2">
    <b-navbar-brand href="#" class="pl-2 pr-2 d-flex">
        <img src="../../public/images/pet.jpg" width="50px" height="50px">
    </b-navbar-brand>
      <b-nav-form class="pl-2 pr-2">
          <div class="d-flex justify-content-center align-items-center">
            <b-form-input id="search" v-on:keypress="buscarProducto()" placeholder="Buscar productos y categorias" class="m-2"></b-form-input>
            <div v-on:click="mostrarCart()"><div class="notes"></div>
            <font-awesome-icon class="fa-2x" icon="shopping-bag"/>
            </div>
          </div>
      </b-nav-form>
     
    </b-navbar>
</div>
</template>

<script>
export default {
   name: 'NavbarAlt',
   data(){
        return {
           
        }
    },
     methods:{
       buscarProducto:function(){
           
            this.$emit('buscarProducto', document.getElementById('search').value);
       },
       mostrarCart:function(){
            this.$emit('mostrarCart');
       }
     }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
h1,h2,h3,h4,h5,h6,p{
  font-family: 'Montserrat', sans-serif;
}
nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
        background-image: linear-gradient(to bottom, #739200, #6b8801, #647f02, #5c7503, #556c03);
    color:white;
}
.notes{
    position: absolute;
    color: white;
    font-weight: bold;
    margin-top:-20px;
}
</style>

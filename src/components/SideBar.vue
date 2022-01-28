<template>
   
          <div class="sideBar">
                <h4> Categorias: </h4>
                  <h6 v-bind:categories="categories">  </h6>
                   <div v-for="c in categories" :key="c.id" class="p-2">
                      <h6 class="categories" v-on:click="getDatatocategories(c.id)">  {{ c.name }} </h6>
                   </div>
          </div>
</template>
<script>
import api from '../api.js'
export default {
  name: 'SideBar',
   data(){
        return {
            categories:[],
            categorieselected:[],
            categorieselectedalt:[]
        }
    },
    created(){
        api.getCategories().then(categories => (this.categories = categories));
        api.getDataCategorieSelected().then(categoriesselected => (this.categorieselected = categoriesselected));
    },
    methods:{
        getDatatocategories:function(id){
             
                    this.$emit('getDatatocategories',id);
                
                    
        }
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
h1,h2,h3,h4,h5,h6,p{
  font-family: 'Montserrat', sans-serif;
}
.sideBar{
      width: 100%;
    /* height: 100vh; */
    background: #739200;
    padding: 10% 12% 10% 12%;
    border-radius: 0px;
    color: white;
    font-weight: bolder;
    border-radius: 10px;
    margin: 5%;
}
.categories{
  cursor:pointer;
}
/*.navbar{
  background-color:#0BB2B8;

} */ 
</style>

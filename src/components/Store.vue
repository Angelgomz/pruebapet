<template>
   
          <div class="">
                     <b-col class="pt-1">
                        <b-row>
                            <b-col cols="3" v-for="c in categorieselectedalt" :key="c.id" class="fondoGray m-2 pt-3 d-flex justify-content-center align-items-center flex-column">
                                <div>
                                    <img class="imgProduct" :src="c.photo">
                                </div>
                                <div>
                                    <h6 class="categorieselectedalt bold pt-2">  {{ c.name }} </h6>
                                </div>
                                   <div class="pt-1"><p class="categorieselectedaltprice bold">  $ {{ c.price }} </p></div> 
                                   <div><button class="btn agregar" @click="addCart(c.id)"> <h6>AGREGAR</h6></button></div> 
                            </b-col>
                        </b-row>
                </b-col>
          </div>
</template>
<script>
import api from '../api.js'
export default {
  name: 'Store',
   data(){
        return {
            categorieselected:[],
            categorieselectedalt:[]
        }
    },
     async created(){
           const response = await api.getDataCategorieSelected();
            const users  = await response;
            console.log(users);
       // api.getDataCategorieSelected().then(categoriesselected => (this.categorieselected = categoriesselected));
     
    },
    methods:{
        
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

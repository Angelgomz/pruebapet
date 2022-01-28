<template>
        <b-container fluid class="pl-0">
            <b-row>
                    <b-button v-b-modal.modal-1 id="showModal">Show Modal</b-button>
                   <b-modal id="modal-1" title="" class="myModalTitle textCartPrecio">
                       
                        <b-row class="d-flex">
                                <b-col cols="6">
                                    <img class="imgModal" src="" style="width:90%">
                                </b-col>
                                <b-col cols="6" class="d-flex flex-column">
                                            <p class="categorieselectedaltprice bold textCartPrecio"></p>
                                            <p class="categorieselectedaltprice bold">Descripción</p>
                                    <div class="d-flex justify-content-center align-items-center">
                                            
                                            <p class="textCartDescripcion"></p>
                                    
                                    </div>
                                </b-col>
                                </b-row>
                    </b-modal>   
                <b-col cols="2">
                  <SideBar @getDatatocategories="getDatatocategories">
            
                  </SideBar>
                </b-col>
                <b-col class="pt-4">
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
                  
            </b-row>
        </b-container>
      
    
</template>
<script>
import SideBar from '../components/SideBar.vue'
import api from '../api.js'
export default 
{
    
    name:'Home',
    components:{
        SideBar
    }, 
      data(){
        return {
            categorieselected:[],
            categorieselectedalt:[],
            cart:[]
        }
    },
    mounted(){
        api.getDataCategorieSelected().then(categorieselected => (this.categorieselected = categorieselected));
       
    },
  methods:{
        addCart:function(id){
            var cart = this.cart;
            var name = "";
            var photo = "";
            var precio = "";
            var description = "";
            this.categorieselectedalt.find(function (element) {
               if(element.id == id){
                  cart.push(element); 
                  name = element.name;
                  photo = element.photo;
                  precio = element.price;
                  description = element.description;
               }
            });
            this.cart = cart;
            document.getElementById('showModal').click();
            setTimeout(function(){
             document.getElementsByClassName('modal-title')[0].innerText = 'Producto agregado al carro: ' + name; 
             document.getElementsByClassName('imgModal')[0].setAttribute('src',photo); 
             document.getElementsByClassName('textCartPrecio')[0].innerText = 'Precio: $'+precio; 
             document.getElementsByClassName('textCartDescripcion')[0].innerText = description; 
             document.getElementsByClassName('modal-content')[0].style.height = '400px';
             document.getElementsByClassName('modal-content')[0].style.overflowY = 'scroll';
             }, 1000);
        },
        getDatatocategories:function(id){
                
                    var categorieselected = this.categorieselected;
                    var array = [];
                    for(let i=0;i<categorieselected.length;i++){
                          if(categorieselected[i].category.id == id){
                            let product = [];
                             product['id'] = categorieselected[i].id;
                             product['name'] = categorieselected[i].name;
                             product['photo'] = categorieselected[i].photo;
                             product['price'] = categorieselected[i].price;
                             product['description'] =categorieselected[i].description;
                            array.push(product);
                          }
                    }
                     this.categorieselectedalt = array;
                    
                   
        }
    }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
h1,h2,h3,h4,h5,h6,p{
  font-family: 'Montserrat', sans-serif;
}
#showModal{
    display:none;
}

.fondoGray{
    background: #e9ecef;
    margin-top: 2%;
    margin-bottom: 2%;
    margin-left: 0%;
    margin-right: 0%;
    padding: 0% 0% 1% 1%;
    border-radius:5px;
    cursor:pointer;
}
.imgProduct{
    width: 215px;
    height: 215px;
    border-radius:10px;
}
.imgProduct:hover{
	z-index: 100;
    animation-name: zoomIn;
    animation-duration: 2s;
}
@keyframes zoomIn {
    from {transform: scale(0.9)}
    to {  transform: scale(1.1)}
  }
.categorieselectedalt{
    font-weight:bold;
}
.agregar{
    border-radius: 10px;
    padding: 6%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: #556c03 !important;
    background: #556c03 !important;
    text-transform: capitalize;
    color: white;
    font-weight:bold;
    float:right;
}
.categorieselectedaltprice{
        color: #556c03;
        font-weight:bold;
        margin-bottom: 0.5rem;
}
</style>
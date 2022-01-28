<template>
     <div>
         <NavbarAlt @mostrarCart="mostrarCart" @buscarProducto="buscarProducto" />
        <b-container fluid class="pl-0">
            <b-row>
                    <b-button v-b-modal.modal-1 id="showModal">Show Modal</b-button>
                   <b-modal id="modal-1" title="" class="myModalTitle textCartPrecio" hide-footer="true">
                       
                        <b-row class="d-flex modal-body modalbodyalt">
                           
                                    <b-col cols="6">
                                        <img class="imgModal" src="" style="width:90%">
                                    </b-col>
                                    <b-col cols="6" class="d-flex flex-column">
                                                <p class="categorieselectedaltprice bold textCartPrecio"></p>
                                             
                                        <div class="d-flex justify-content-center align-items-center">
                                                
                                                <p class="textCartDescripcion"></p>
                                        
                                        </div>
                                
                                    </b-col>
                           
                        </b-row>
                        <div class="modal-body-store"> 
                                <div>
                                       
                                </div>
                        </div>
                    </b-modal>   
                <b-col sm="10" md="2">
                  <SideBar @getDatatocategories="getDatatocategories" >
            
                  </SideBar>
                </b-col>
                <b-col class="pt-4 pl-5 pr-2">
                  <b-row>
                     <div  v-for="(tab, index) in tabs" :key="index">
                                    <p class="tab pl-1 pr-1"> {{ tab}} / </p>
                     </div>
                </b-row>
                        <b-row> 
                         
                            <b-col sm="10" md="3" v-for="c in categorieselectedalt" :key="c.id" class="fondoGray m-2 pt-3 d-flex justify-content-center align-items-center flex-column">
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
      
</div>
</template>
<script>
import NavbarAlt from '../components/NavbarAlt.vue'
import SideBar from '../components/SideBar.vue'
import api from '../api.js'
export default 
{
    
    name:'Home',
    components:{
        SideBar,NavbarAlt
    }, 
      data(){
        return {
            categorieselected:[],
            categorieselectedalt:[],
            cart:[],
            notes:0,
            tabs:['home']
        }
    },
    async created(){
         const response = await api.getDataCategorieSelected();
         const productsall  = await response;
         this.categorieselectedalt = productsall; 
         this.categorieselected = productsall;
       
    },
  methods:{
         buscarProducto:function(element){
                var buscador = [];
                var store = this.categorieselected;
                for(let i=0;i<store.length;i++){
                    element = element.toUpperCase()
                    var nombre = store[i].name.toUpperCase()
                    if(nombre.includes(element))
                    {
                        buscador.push(store[i]);
                    }
                }
               this.categorieselectedalt = buscador;
               if(element == 0){
                     this.categorieselectedalt = this.categorieselected;
               }
         },
         mostrarCart:function(){
              var cart = this.cart;
              document.getElementById('showModal').click();
              setTimeout(function(){
                    document.getElementsByClassName('modal-title')[0].innerText = 'Tu carro de productos'; 
                    document.getElementsByClassName('modalbodyalt')[0].style.display ='none';
                    var html = "";
                    var subtotal = 0;
                    for(let i=0;i<cart.length;i++){
                        subtotal = parseInt(subtotal) + parseInt(cart[i][2]);
                        html = html + '<div class="d-flex justify-content-center align-items-center"><div class="col-sm-6"><img width="100px" height="100px" src='+cart[i][1]+'></div><div class="col-sm-6"><p class="textCartPrecio">'+cart[i][0]+'</p><p class="text-green">'+cart[i][2]+'</p></div></div>';
                    }
                      html = html + '<div class="d-flex justify-content-center align-items-center"><h6 class="text-green">Total a pagar: </h6> $'+ subtotal + '</div>'
                    document.getElementsByClassName('modal-body-store')[0].innerHTML = html;
               }, 1000);
         },
        addCart:function(id){
            var name = "";
            var photo = "";
            var precio = "";
            var description = "";
            var cart = this.cart;
            this.categorieselectedalt.find(function (element) {
               if(element.id == id){
                  name = element.name;
                  photo = element.photo;
                  precio = element.price;
                  description = element.description;
                  let productToCart = [element.name,element.photo,element.price,element.description];
                  cart.push(productToCart);
               }
            });
            this.cart = cart;
            document.getElementById('showModal').click();
            
            setTimeout(function(){
            document.getElementsByClassName('modal-body-store')[0].style.display ='none';
             document.getElementsByClassName('modal-title')[0].innerText = 'Producto agregado al carro: ' + name; 
             document.getElementsByClassName('imgModal')[0].setAttribute('src',photo); 
             document.getElementsByClassName('textCartPrecio')[0].innerText = 'Precio: $'+precio; 
             document.getElementsByClassName('textCartDescripcion')[0].innerText = description; 
             document.getElementsByClassName('modal-content')[0].style.height = '400px';
             document.getElementsByClassName('modal-content')[0].style.overflowY = 'scroll';
             }, 1000);
             this.notes = this.notes + 1;
             document.getElementsByClassName('notes')[0].innerText = this.notes;
        },
        getDatatocategories:function(id,name){
                    
                    var categorieselected = this.categorieselected;
                    var array = [];
                    this.tabs = ["home"];
                    this.tabs.push(name);
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
 .text-green{
            color: #556c03;
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
.tab{
     color: #556c03;
     font-weight:bolder;
}

@media(max-width:767px){
   
.sideBar{
margin: 2%
};
.tab{
    display:flex;
    justify-content:center;
    align-items:center;
}
.fondoGray{
    background-color:TRANSPARENT;
}
}
</style>
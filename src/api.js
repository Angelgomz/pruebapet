const url = 'http://sva.talana.com:8000/'

function getCategories() {
  return fetch(`${url}api/product-category`)
    .then(res => res.json())
}
function getDataCategorieSelected(){
    
    return fetch(`${url}api/product`)
    .then(res => res.json())
}
export default {
  getCategories,getDataCategorieSelected
}
import ModelProduct  from "./ModelProduct.js";
import  ViewProduct  from "./ViewProduct.js";

export default class ControllerProduct{
 constructor({publish, subscribe}){
 
     this.model = new ModelProduct();
     this.view = new ViewProduct(this.handleSearch);

    this.publish = publish;
    this.subscribe = subscribe;

    this.subscribe('GET_PRODUCTS_TO_CART', this.handleGetProducts)



     this.model.loadArticles().then(data => this.view.renderArticles(data));
 }

 handleSearch = ev => {
    //  const search = this.view.searchVal;
    //  const data = this.modal.getSearchedData(search);
    //  this.view.renderArticles(data);
    const id = ev.target.dataset.productId
    if(id){
        console.log(`Купили ${id}`)
        this.publish('ADD_TO_CART', id)
    }
 }
 handleGetProducts = (ids) =>{
const products = this.model.getProductsByIds(ids)
this.publish('SET_PRODUCTS_TO_CART', products)

 }
}


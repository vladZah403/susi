import { ModelProduct } from "./ModelProduct.js";
import { ViewProduct } from "./ViewProduct.js";

export class ControllerProduct{
 constructor({publish}){
 
     this.modal = new ModelProduct();
     this.view = new ViewProduct(this.handleSearch);

    this.publish = publish

     this.modal.loadArticles().then(data => this.view.renderArticles(data));
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
}


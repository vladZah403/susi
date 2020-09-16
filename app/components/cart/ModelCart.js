export default class ModelCart{
    cart=[];
    constructor(){
        
    }
    addToCart(id){
        this.cart.push(id);
        console.log(this)
    }
}
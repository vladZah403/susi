export default class ModelCart{
    cart=new Map();
    constructor(){
        
    }
    addToCart(id){
        if(this.cart.has(id)){
            
        }
        this.cart.push(id);
        console.log(this.cart)
        return this.cart.length;
        
    }
}
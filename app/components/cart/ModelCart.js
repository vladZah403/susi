export default class ModelCart{
    cart = new Map();
    constructor(){
        
    }
    addToCart(id){
        let count = 1
        if(this.cart.has(id)){
            count += this.cart.get(id);
            
        }

       this.cart.set(id, count)

        console.log(this.cart)
        return this.countCart();
        
    }
    countCart(){
        let sum = 0;
        this.cart.forEach(count => sum += count);
        return sum
    }
    getCartProdId(){
        return ([...this.cart.keys()]);

    }
}
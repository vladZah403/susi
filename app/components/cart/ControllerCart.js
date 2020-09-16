import ModelCart from "./ModelCart.js";

export default class ControllerCart{
    constructor({subscribe}){

        this.model = new ModelCart()

        this.subscribe = subscribe;
        this.subscribe('ADD_TO_CART', this.handleAddToCart);
    }

    handleAddToCart = (id) => {
        this.model.addToCart(id);
        console.log(`add to cart id: ${id}`)
    }
}
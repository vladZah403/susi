import ModelCart from "./ModelCart.js";
import ViewCart from "./ViewCart.js";

export default class ControllerCart{
    constructor({subscribe}){

        this.model = new ModelCart()
        this.view = new ViewCart(this.handleOpenModal)

        this.subscribe = subscribe;
        this.subscribe('ADD_TO_CART', this.handleAddToCart);
    }

    handleAddToCart = (id) => {
        const count = this.model.addToCart(id);
        console.log(`add to cart id: ${id}`)
        this.view.renderCartCaunt(count)
    }
    
    handleOpenModal =()=>{
        this.view.renderModal()
    }
}
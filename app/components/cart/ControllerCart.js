import ModelCart from "./ModelCart.js";
import ViewCart from "./ViewCart.js";

export default class ControllerCart{
    constructor({subscribe, publish}){

        this.model = new ModelCart()
        this.view = new ViewCart(this.handleOpenModal)

        this.subscribe = subscribe;
        this.publish = publish;
        this.subscribe('ADD_TO_CART', this.handleAddToCart);
        this.subscribe('SET_PRODUCTS_TO_CART', this.handleGetProducts);
    }

    handleAddToCart = (id) => {
        const count = this.model.addToCart(id);
        console.log(`add to cart id: ${id}`)
        this.view.renderCartCaunt(count)
    }

    handleOpenModal =()=>{
        const ids = this.model.getCartProdId();
        this.publish('GET_PRODUCTS_TO_CART', ids)
        
    }
    handleGetProducts = (data) =>{
        console.log(data)
        this.view.renderModal();
    }
}
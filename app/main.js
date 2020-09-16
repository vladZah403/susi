
import{ControllerProduct} from './components/product/ControllerProduct.js';
import Publisher from './components/helpers/publisher.js';
import ControllerCart from './components/cart/ControllerCart.js';

const publisher = new Publisher()

const product = new ControllerProduct(publisher.methods);
const cart = new ControllerCart(publisher.methods)


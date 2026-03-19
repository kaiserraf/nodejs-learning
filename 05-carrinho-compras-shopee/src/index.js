import createItem from './services/item.js';
import * as cartServices from './services/cart.js';

const myCart = [];
const myWishList = [];

console.log("welcome to the your shopee cart!");

const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

console.log(item2.subtotal());

// adiciona item
await cartServices.addItem(myCart, item1);
await cartServices.addItem(myCart, item2);

await cartServices.removeItem(myCart, item2);
// await cartServices.removeItem(myCart, item1);

await cartServices.displayCart(myCart);

// // deleta item do carrinho
// await cartServices.deleteItem(myCart, item2.name);
// await cartServices.deleteItem(myCart, item1.name);

console.log("shopee cart total is:");
await cartServices.calculateTotal(myCart);
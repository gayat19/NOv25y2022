export class CartService{
    cart:number[]
    constructor(){
        this.cart = [];
    }
    getCart(){
        return this.cart;
    }
    addItemsToCart(id:number){
        this.cart.push(id);
    }
}
import * as cartService from "./services/cart.js"
import createItem  from "./services/item.js"   
const myCart = []


console.log("bem vindo ao carrinho da shopee")

const item1 = await createItem("mouse", 99.99, 1 )
const item2 = await createItem("fan", 60, 6 )

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

await cartService.removeItem(myCart, item2)

await cartService.displaycart(myCart)

await cartService.removeItem(myCart)

await cartService.deleteItem(myCart, item2.name)

console.log("total no carrinho é: ")
await cartService.calculateItem(myCart)

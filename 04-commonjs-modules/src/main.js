const product = require("./services/products.js");
const config = require("./services/config.js");
const database = require("./services/database.js");

async function main() {
  console.log("Carrinho compras:");
  //     p.getFullName("408", "mousepad")
  //     p.getProductName("mousepad")
  
  database.connectToDatabase();

  console.log(config.prduction);
}

main();

//todas as funçoes que lidam com produtos

async function getFullName(codeId, productName) {
    console.log("product" + codeId + "---" + productName) 
}

async function getProductName(productName) {
    console.log("product " + productName)
}


module.export = {
    getFullName,
    getProductName,
}
// let i = 0
// while (i > 10){
//     console.log(i)
//     i++
// }


// let i = 0
// do{
//     console.log(i)
// }while(i> 10)

// let resposta = ""

// do{
//     resposta = window.prompt("voce e maior de idade ?")
// }while(resposta.toLocaleLowerCase() != "sim")

// for (let i =10; i>=1; i--){
//     console.log(i)
// }


// ["a", "b"].forEach(function(item){
//     console.log(item)
// })


// let i = 1
// while(i<=10){
//     let resultado = numero * i
//     console.log(resultado)
//     exibirHTML(numero, i, resultado)
//     i++
// }


// for(let i=1; i<= 10; i++){
//     let resultado = numero * i
//     console.log(resultado)
//     exibirHTML(numero, i, resultado)
// }


let numerosTabuada = []
for(let i=1; i<=10; i++){
    numerosTabuada.push(i)
}
numerosTabuada.forEach(function(n){
      let resultado = numero * n
    console.log(resultado)
    exibirHTML(numero, n, resultado)
})


let ul = document.querySelector("#tabuada")
let numero = window.prompt("digite o numero para ver a tabuada")
function exibirHTML(numero, i, resultado){
    let li= document.createElement('li')
    li.innerText = `${numero} * ${i} = ${resultado}`
    ul.appendChild(li)
} 
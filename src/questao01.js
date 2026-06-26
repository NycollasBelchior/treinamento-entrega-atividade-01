import leia from "readline-sync";

let fretSP = 15;
let fretSC = 20;
let fretPR = 25;
let fretRS = 30;

let valor = leia.questionFloat("digite o valor: ");
console.log("valor: R$" + valor);

let estado = leia.keyInSelect(["SP","SC","PR","RS"]);

if (estado === 0 && valor >= 500){
   valor += fretSP;
   console.log("você escolheu SP")
console.log("o valor da compra com juros é : R$"+ valor)

}
else if (estado === 1 && valor >= 500){
valor += fretSC
console.log("você escolheu SC")
console.log("o valor da compra com juros é : R$"+ valor)
}
else if(estado === 2 && valor >= 500){
valor += fretPR
console.log("você escolheu PR")
console.log("o valor da compra com juros é : R$"+ valor)
}
else if (estado === 3 && valor >= 500){
valor += fretRS
console.log("você escolheu RS")
console.log("o valor da compra com juros é : R$"+ valor)
}
else{
    console.log("o produto que comprou é menos de R$500, então é sem fretes")
    console.log("valor total: R$"+valor)
}



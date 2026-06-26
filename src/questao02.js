import leia from "readline-sync";

let idade = leia.questionInt("digite sua idade: ");
let diaSegunda = leia.keyInSelect(["segunda-feira?", "outro dia"])
console.log("você é estudante?")
let identidade = leia.keyInSelect(["sim","não"]);
let ingresso = 40

if (idade <= 12 ){
    ingresso === 15;
    console.log("o valor total é R$15 por vc ser menor de idade")
}
else if (idade > 12 && diaSegunda === 0 && identidade === 0){
ingresso = ingresso * 0.50
console.log("ingresso com desconto de 50% por ser segunda feira e ser estudante, o valor total é de : R$" + ingresso.toFixed(2))
}
else if (idade > 12 && diaSegunda === 1 && identidade === 1){
    console.log("você não tem direito a nenhum desconto");
    console.log("valor total: " + ingresso.toFixed(2))
}
else if (idade > 12 && identidade === 0){
    ingresso = ingresso * 0.70;
    console.log("ingresso com desconto de 30% por ser estudante, o valor total é de : R$" + ingresso.toFixed(2))
}
else if (idade > 12 && diaSegunda === 0 && identidade === 1){
    ingresso = ingresso * 0.50
console.log("ingresso com desconto de 50% por ser segunda feira, o valor total é de : R$" + ingresso.toFixed(2))
}

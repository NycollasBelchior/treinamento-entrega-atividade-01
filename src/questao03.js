import leia from "readline-sync";

let consumo = leia.questionFloat("digite o consumo de energia em kWh: ");
console.log("você é beneficiario?")
let bene = leia.keyInSelect(["sim","não"]);


if (consumo <= 100 && bene === 0){
    let valor1 = (consumo * 0.60) * 0.80
    console.log("você consumiu: "+ consumo + " de kWh!")
    console.log("o preço normal era pra ser: " +  consumo * 0.60);
    console.log("o preço por kWh sendo beneficiario é: R$" + valor1.toFixed(2));
}
else if (consumo > 100 && consumo <=300 && bene === 0){
    let valor2 = (consumo * 0.75) * 0.80
    console.log("você consumiu: "+ consumo + " de kWh!")
    console.log("o preço normal era pra ser: " +  consumo * 0.75);
    console.log("o preço por kWh sendo beneficiario é: R$" + valor2.toFixed(2));
}
else if (consumo > 300 && bene === 0){
    let valor3 = (consumo * 0.90) * 0.80
    console.log("você consumiu: "+ consumo + " de kWh!")
    console.log("o preço normal era pra ser: " +  consumo * 0.90);
    console.log("o preço por kWh sendo beneficiario é: R$" + valor3.toFixed(2));
}else if (consumo <= 100 && bene === 1){
    let valor4 = consumo * 0.60
    console.log("você consumiu: "+ consumo + " de kWh!")
    console.log("o preço sem beneficiario é de: R$" + valor4.toFixed(2) );
}
else if (consumo > 100 && consumo <=300 && bene === 1){
    let valor5 = consumo * 0.75
    console.log("você consumiu: "+ consumo + " de kWh!")
    console.log("o preço sem beneficiario é de: R" +  valor5.toFixed(2));
}
else if (consumo > 300 && bene === 1){
    let valor6 =consumo * 0.90
    console.log("você consumiu: "+ consumo + " de kWh!")
    console.log("o preço sem beneficiario é de: R$" +  valor6.toFixed(2));
}
else {
    console.log("você consumiu: " +consumo + " de kWh")
    console.log(" o valor total de kWh: R$"+ consumo * 0.60)
}
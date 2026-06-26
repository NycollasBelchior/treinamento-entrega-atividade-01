import leia from "readline-sync";

let vitorias = leia.questionInt("você ganhou quantas partidas: ")* 3;
let empates = leia.questionInt("você empantou quantas vezes: ") * 1;
let derrotas = leia.questionInt("você foi derrotado quantas vezes: ");


let pontos = vitorias + empates
if (pontos >= 70 && derrotas <= 10){
    console.log("Pontos: " + pontos)
    console.log("derrotas: "+ derrotas);
    console.log("campeão");
}
else if (pontos >= 45 && pontos < 70 && derrotas <= 10){
    console.log("pontos: "+ pontos);
    console.log("derrotas: "+ derrotas);
    console.log("classificado");
}
else{
    console.log("pontos: " + pontos );
    console.log("derrotas: "+ derrotas);
console.log("você foi rebaixado");
}

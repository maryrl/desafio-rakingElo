let partidas = 0;
let elo = 0; 

function rankingElo(vitorias, derrotas) {
    return partidas = vitorias - derrotas;
}

for(let i = 0; i < partidas.length; i++){
    elo = i++;
}

if (elo <= 100){
    console.log("Ferro")
} else if (elo <= 20){
    console.log("Bronze")
} 
 else if (elo <= 50){
    console.log("Prata")
} 
 else if (elo <= 80){
    console.log("Ouro")
} 
 else if (elo <= 90){
    console.log("Diamante")
} 
 else if (elo <= 100){
    console.log("Lendário")
} 
 else {
    console.log("Imortal")
} 

rankingElo(20, 5)

console.log("O Herói tem de saldo de vitórias:", partidas," É elo Ferro")
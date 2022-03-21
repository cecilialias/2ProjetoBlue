console.clear();
const prompt = require("prompt-sync")();

let elementos = [, `Pedra`, `Papel`, `Tesoura`],
escolhaU,
escolhaIA,
repete = `s`;


while (repete == `s` || repete == `sim`) {
     console.clear();
     let pontosU = 0,
     pontosIA = 0,
     empate = 0,
     rodadasT = 0,
     rodadaA = 0;


     do {
         rodadasT = +prompt(`Quantas rodadas você deseja jogar? `);
         console.clear();
} while (Number.isNaN(rodadasT) || rodadasT > 10 || rodadasT < 1);

console.clear();


for (i = 1; i <= rodadasT; i++) {
     escolhaU = +prompt(`Digite sua escolha (1) Pedra - (2) Papel - (3) Tesoura: `);
     console.clear();


     while (escolhaU < 1 || escolhaU > 3 || isNaN(escolhaU)) {
     console.clear();
     console.log(`Digite 1 para Pedra, 2 para Papel ou 3 para Tesoura`);
     console.log();
      escolhaU = +prompt(
      `Digite sua escolha (1) Pedra - (2) Papel - (3) Tesoura: `
    );
     console.clear();
     }
     escolhaIA = Math.floor(Math.random() * 3 + 1);

    
    (escolhaU = elementos[escolhaU]), (escolhaIA = elementos[escolhaIA]);


     rodadaA++
     console.log(`Rodada ${rodadaA}`);
     console.log(`Você: ${escolhaU}`);
     console.log(`Robô: ${escolhaIA}`);

    if (escolhaU == escolhaIA) {
      console.log();
      console.log(`Empato`);
      empate++;
    } else if (
      (escolhaU == `Papel` && escolhaIA == `Pedra`) ||
      (escolhaU == `Pedra` && escolhaIA == `Tesoura`) ||
      (escolhaU == `Tesoura` && escolhaIA == `Papel`)
    ) {
      console.log();
      console.log(`Parabens você venceu:)`);
      pontosU++;
    } else {
      console.log();
      console.log(`Ifelizmente você perdeu!`);
      pontosIA++;
    }
}
console.log();

console.log(`Resultado`);
console.log();
console.log(`Você venceu ${pontosU}`);
console.log(`Robô venceu ${pontosIA}`);
console.log(`Empates ${empate}`);
console.log();

if (pontosU == pontosIA) {
    console.log(`Vocês empataram`);
} else if (pontosU > pontosIA) {
    console.log(`Parabens você conseguiu`);
} else {
    console.log(`Vôce perdeu!`);
}

console.log();

do {
     repete = prompt(`Tente novamente `).toLowerCase();
     console.clear(`Digite sim para jogar novamente, Digite não para não jogar: `);
} while (
     repete != `s` &&
     repete != `sim` &&
     repete != `n` &&
     repete != `nao`
);
 if (repete == `n` || repete == `nao`) {
    console.log(`Venha jogar novamente, você consegue!`);
  }
}
console.log();
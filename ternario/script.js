let isValid = true;

function verify(isValid) {
     if (isValid) {
          return true
     } else {
          return false
     }
}

// Com ternario

const result = isValid ? true : false;

let zero = 0;

// zero é maior que zero? Se sim 0, se nao -1. Zero nao e maior que zero. Logo, a resposta é -1
const numeroResultado = zero > 0 ? 0 : -1;
console.log(numeroResultado)

// Outro caso:
let velocity = 110;

// if (velocity < 100) {
//      console.log("Estamos numa velocidade aceitável");
// } else { 
//      console.log("Entrando em velocidade de risco");
// }

(velocity > 100) ? console.log("Velocidade maior que 100") : console.log("Velocidade menor que 100")
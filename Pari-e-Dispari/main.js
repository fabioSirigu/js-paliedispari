// Pari e Dispari

//L’utente sceglie pari o dispari 
// l'utente inserisce un numero da 1 a 5. 

const userChoice = (prompt('scegli pari o dispari'));
console.log(userChoice, 'scelta utente');
const userNumber = Number(prompt('scegli un numero da 1 a 5'));
console.log(userNumber, 'numero utente');

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const pcNumber = randomNumber(1,5);
console.log(pcNumber, 'numero del pc');

// Sommiamo i due numeri 
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 

function pariDispari (num_1, num_2){
      const sum = num_1 + num_2;
      console.log(sum, 'somma pari dispari');
      
      if (sum % 2 === 0 ){
            return 'pari';
      } 
      return 'dispari';
}

console.log('numero utente '+ userNumber);
console.log('numero pc '+ pcNumber);

// Dichiariamo chi ha vinto.

if (pariDispari(pcNumber, userNumber) === userChoice){
      alert ('user!');
}else{
      alert ('pc');
}


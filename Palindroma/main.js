// Palidroma

// Chiedere all’utente di inserire una parola 
const userWord = prompt('inserisci una parola');
//console.log(userWord);
const result = palindrome(userWord);

/* let text = userWord; */ //text lo definisco dopo, la funzione subisce l'hoisting
// quando l'index è maggiore della lunghezza di TEXT allora decrementa per tornare indietro

function palindrome (text){
      let reverseWord = '';
      for (let i = text.length; i > 0; i--) {
            let character = text.charAt(i-1);
            reverseWord += character;
      }
      console.log(reverseWord)
      if ( reverseWord === text){
            console.log('palindroma');
      } else {
            console.log('non è palindroma');
      }
}


/* // Creare una funzione per capire se la parola inserita è palindroma
function palindrome(word){  
      // converti la stringa in un array con string.split() function  
      const characters = word.split (''); //   
      
      // usa reverse() per invertire il valore dell'array  
      const charactersReverse = characters.reverse();   
      
      // usa join() per raggruppare i valori dell'array dentro un unica stringa
      const wordReverse = charactersReverse.join('');  
      
      if (userWord == wordReverse){
            // se la condizione è palindroma
            alert('è palindromo'); //  
      } else {
            // se la condizione non è palindroma
            alert ('non è palindromo' );  
      }  
}

// chiamo la funzione con la parola che ha inserito l'utente  
const value = palindrome(userWord);  */

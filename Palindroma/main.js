// Palidroma
// Chiedere all’utente di inserire una parola 
const userWord = prompt('inserisci una parola');
const result = palindrome(userWord);

// Creare una funzione per capire se la parola inserita è palindroma
function palindrome (text){ //text lo definisco dopo, la funzione subisce l'hoisting
      let reverseWord = ''; // gli assegno una variabile con una stringa vuota per poterla "riempire" dopo
      for (let i = text.length; i > 0; i--) { // quando l'index è maggiore della lunghezza di TEXT allora decrementa per tornare indietro
            let character = text.charAt(i-1); // charAt(n) Mi restituisce il carattere corrispondente alla posizione assegnata tra le () (-1 perchè lenght parte da 1 e non da 0 come gli array) 
            reverseWord += character; // la stringa vuota diventa "piena"
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

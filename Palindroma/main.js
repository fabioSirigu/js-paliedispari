// Palidroma

// Chiedere all’utente di inserire una parola 
const userWord = prompt('inserisci una parola');
console.log(userWord);

// Creare una funzione per capire se la parola inserita è palindroma
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
const value = palindrome(userWord); 


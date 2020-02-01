var price = Math.floor(Math.random() * 100) + 1;
console.log(price);
var guessButton = document.querySelector('#guess');

guessButton.addEventListener("click", decideIfWon);
function decideIfWon(){
    var guessField = document.querySelector('#guessField');
    var lowOrHi = document.querySelector('#lowOrHi');
    
    if(guessField.value>price){
        lowOrHi.textContent = 'too high';
    }
    else if(guessField.value<price){
        lowOrHi.textContent = 'too low';
    }
    else{
        lowOrHi.textContent = 'winner';
    }
}
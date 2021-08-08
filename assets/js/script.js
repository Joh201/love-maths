
/* Wait for the DOM to load before running the game */
/* Get the button elements and add event listner to them */

document.addEventListener('DOMContentLoaded', function(){

    let buttons = document.getElementsByTagName('button');

    for(let button of buttons){
        button.addEventListener('click',function(){
            if(this.getAttribute('data-type')==='submit'){
               checkAnswer()
            } else{
                let gametype = this.getAttribute('data-type');
                runGame(gametype);
            }

        })

    }

    runGame('addition')

})

/**
 * The main game loop, called when the script is first loaded and 
 * after the user'S answer has been processed
 */
function runGame(gametype){
    let num1= Math.floor(Math.random()*25) + 1;
    let num2= Math.floor(Math.random()*25) + 1;

    if(gametype ==='addition'){
        displayAdditionQuestion(num1,num2);
    } else{
        alert(`Unknown game type: ${gametype}`)
        throw `Unknown game type: ${gametype}. Aborting!`;
    }
}


/**
 * Checks the first answer against the first element in 
 * the returned calculateCorrectAnswer Array
 */
function checkAnswer(){
 let userAnswer = parseInt(document.getElementById('answer-box').value);
 let calculatedAnswer = calculateCorrectAnswer();
 let isCorrect = userAnswer === calculatedAnswer[0];
 
  if(isCorrect){
     alert('Hey! You got it right! :D');
     incrementScore();
  } else {
     alert(`awww... You answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`)
     incrementWrongAnswer();
  }

  runGame(calculatedAnswer[1]);
}


function calculateCorrectAnswer(){
    let operand1= parseInt(document.getElementById('operand1').innerText);
    let operand2= parseInt(document.getElementById('operand2').innerText);
    let operator= document.getElementById('operator').innerText;

    if(operator = "+"){
        return [operand1 + operand2, "addition"];
    } else{
        alert(`Unemplimented operator${operator}`);
        throw `Unemplimented operator${operator}.Aborting!`;
    }
    
}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore(){
    let oldscore= parseInt(document.getElementById('score').innerText);
     document.getElementById('score').innerText= ++oldscore;
    
}

/**
 * Gets the current score of the wrong answers from the DOM and increments it by 1
 */
function incrementWrongAnswer(){
    let oldscore= parseInt(document.getElementById('incorrect').innerText);
     document.getElementById('incorrect').innerText = ++oldscore;
}

function displayAdditionQuestion(operand1,operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
    
}

function displaySubtractQuestion(){
    
}

function displayMultiplyQuestion(){
    
}


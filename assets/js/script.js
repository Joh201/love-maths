
/* Wait for the DOM to load before running the game */
/* Get the button elements and add event listner to them */

document.addEventListener('DOMContentLoaded', function(){

    let buttons = document.getElementsByTagName('button');

    for(let button of buttons){
        button.addEventListener('click',function(){
            if(this.getAttribute('data-type')==='submit'){
                alert('You clicked the submit button')
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


function checkAnswer(){

}


function calculateCorrectAnswer(){
    
}

function incrementScore(){
    
}

function incrementWrongAnswer(){
    
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


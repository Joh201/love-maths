
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
                alert(`You clicked ${gametype}`);
            }

        })

    }

})

/**
 * The main game loop, called when the script is first loaded and 
 * after the user'S answer has been processed
 */
function runGame(){
    let num1= Math.floor(Math.random()*25) + 1;
    let num2= Math.floor(Math.random()*25) + 1;
}

runGame()
function checkAnswer(){
    
}


function calculateCorrectAnswer(){
    
}

function incrementScore(){
    
}

function incrementWrongAnswer(){
    
}

function displayAdditionQuestion(){
    
}

function displaySubtractQuestion(){
    
}

function displayMultiplyQuestion(){
    
}


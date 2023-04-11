const YourScore = document.getElementById('YourScore');
const AiScore = document.getElementById('AiScore');
const result = document.getElementById('result');
//----------------------------------------------------------------

const paper = document.getElementById('paper');
const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');

//-------------------------------------------------------------

const YourChoice = document.getElementById('YourChoice');
const AiChoice   = document.getElementById('AiChoice');

//-------------------------------------------------------------

const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
//-----------------------------------------------------------

const imagefinale = document.getElementById('imagefinale');
const joke = document.getElementById('joke');
const playagain = document.getElementById('playagain');
//-------------------------------------------------------------

let playerCount = 0;
let AiCount = 0;

//-------------------------------------------------------------

const choices = ["paper.png","rock.png","scissors.png"];





paper.addEventListener('click', function(){
    const choice = choices[Math.floor(Math.random()*choices.length)];
    console.log(choice);

    YourChoice.src = choices[0];
    result.innerHTML = "Please wait for AI's choice";

    setTimeout(function(){
        AiChoice.src = `${choice}`;

        if(choice == "paper.png"){
            result.innerHTML = "Round Draw";
        } else if(choice == "scissors.png"){
            result.innerHTML = "You Lose";
            AiCount++;
            AiScore.innerHTML = `${AiCount}`;
        } else {
            result.innerHTML = "You Win";
            playerCount++;
            YourScore.innerHTML = `${playerCount}`;
        }
        
        setTimeout(function(){
            if(playerCount == 3){
                card1.style.display = "none";
                card2.style.display = "block";
                imagefinale.src = "cat win.jpeg";
                joke.innerHTML = "You Win (Papapapapa Khatir pro pro )"
            }else if(AiCount == 3){
                card1.style.display = "none";
                card2.style.display = "block";
                imagefinale.src = "cat lose.jpeg";
                joke.innerHTML = "You Lose (Wach Nta noob asa7bi 7chuma ga3 Bot Rb7k )"
            }

        },1000)
   
    }, 2000);

});


rock.addEventListener('click', function(){
    const choice = choices[Math.floor(Math.random()*choices.length)];
    console.log(choice);

    YourChoice.src = choices[1];
    result.innerHTML = "Please wait for AI's choice";

    setTimeout(function(){
        AiChoice.src = `${choice}`;

        if(choice == "paper.png"){
            result.innerHTML = "You Lose";
            AiCount++;
            AiScore.innerHTML = `${AiCount}`;
        } else if(choice == "scissors.png"){
            result.innerHTML = "You Win";
            playerCount++;
            YourScore.innerHTML = `${playerCount}`;
           
        } else {
            result.innerHTML = "Round Draw";
          
        }
        
        setTimeout(function(){
            if(playerCount == 3){
                card1.style.display = "none";
                card2.style.display = "block";
                imagefinale.src = "cat win.jpeg";
                joke.innerHTML = "You Win (Papapapapa Khatir pro pro )"
            }else if(AiCount == 3){
                card1.style.display = "none";
                card2.style.display = "block";
                imagefinale.src = "cat lose.jpeg";
                joke.innerHTML = "You Lose (Wach Nta noob asa7bi 7chuma ga3 Bot Rb7k )"
            }

        },1000)
   
    }, 2000);

});
scissors.addEventListener('click', function(){
    const choice = choices[Math.floor(Math.random()*choices.length)];
    console.log(choice);

    YourChoice.src = choices[2];
    result.innerHTML = "Please wait for AI's choice";

    setTimeout(function(){
        AiChoice.src = `${choice}`;

        if(choice == "paper.png"){
            result.innerHTML = "You Win";
            playerCount++;
            YourScore.innerHTML = `${playerCount}`;
        } else if(choice == "scissors.png"){
            result.innerHTML = "Round Draw";
            
        } else {
            result.innerHTML = "You Lose";
            AiCount++;
            AiScore.innerHTML = `${AiCount}`;
          
        }
        
        setTimeout(function(){
            if(playerCount == 3){
                card1.style.display = "none";
                card2.style.display = "block";
                imagefinale.src = "cat win.jpeg";
                joke.innerHTML = "You Win (Papapapapa Khatir pro pro )"
            }else if(AiCount == 3){
                card1.style.display = "none";
                card2.style.display = "block";
                imagefinale.src = "cat lose.jpeg";
                joke.innerHTML = "You Lose (Wach Nta noob asa7bi 7chuma ga3 Bot Rb7k )"
            }

        },1000)
   
    }, 2000);

});







function refreshPage() {
    location.reload();
}

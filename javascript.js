// Plot
    // A world that is in a battle of survival or extinction.  The two sides are searching for 3 crystals in order to create the ultimate weapon that will render all other weapons useless and will give the winning team the VICTORY!!


// Setting
    // Humanity and the Robots face off with weapons that both sides have.  The weapons are called ROCK, PAPER, and SCISSORS.  These weapons can only beat the other in certain circumnstances.  When the 3 crystals are gained via beating the other side, a secret weapon THE ALLIGATOR will become theirs to hone and use to their devices.

// Perameters.
    // ROCK can defeat SCISSORS
    // ROCK is defeated by PAPER
    // PAPER can defeat ROCK
    // PAPER is defeated by SCISSORS
    // SCISSORS can defeat PAPER
    // SCISSORS is defeated by ROCK
    // ALLIGATOR can defeat all three
    // When Humanity or Robots get to 3 points, the ALLIGATOR button appears and destroys the opponents.


const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const refreshButton = document.getElementById("reset");

// Characters
    // Humanity the leader is named EX (player).
    // Robots their hive mind is named 102 (computer)

let computer;
let player;
let result;
let playerUpdateScore = 0;
let computerUpdateScore = 0;
let one = "ROCK";
let two = "PAPER";
let three = "SCISSORS";



choiceBtns.forEach(button => button.addEventListener("click", () => {
    
    player = button.textContent;
    getComputerChoice();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
    playerScore();
    playerScoreDisplay.textContent = ` ${playerUpdateScore}`;
    computerScore()
    computerScoreDisplay.textContent = ` ${computerUpdateScore}`
    humanSurvival();
    robotSacrifice();
    
    

  }));

  reset.addEventListener("click", function() { 
        location.reload();
    });
  

function getComputerChoice() {
    const randNumber = Math.floor(Math.random() * 3) +1;
    switch(randNumber) {
        case 1:
        computer = one;
        break;
        case 2:
        computer = two;
        break;
        case 3:
        computer = three;
        break;
        }
        return computer;
         }


            function checkWinner() {
                if(player == computer) {
        return "Draw";
    } 
    else if(computer == "ROCK"){
        return (player == "PAPER") ? 'You WIN!' : 'You Lose!'
    }
    else if(computer == "PAPER") {
        return (player == "SCISSORS") ? 'You WIN!' : 'You Lose!'
    }
    else(computer == "SCISSORS") 
    return (player == "ROCK") ? 'You WIN!' : 'You Lose!'

    
}

// Humanity discovered the necessary pattern that would be required to defeat the Robots.  EX told his leading experts to focus on what the patterns of the ROBOTS have been to discover their weakness to give them an edge.  
// Their weapons are limited, and evenly matched against one another and so the need of the ALLIGATOR was surely a dire need for EX and all of his people.

function playerScore() {
    if(player == one && computer == one) {
        return playerUpdateScore;
    }
    else if (player == one && computer == two) {
        return playerUpdateScore;
    }   
    else if (player == one && computer == three){
        return playerUpdateScore++;
    }
    else if(player == two && computer == one) {
        return playerUpdateScore++;
    }
    else if (player == two && computer == two) {
        return playerUpdateScore;
    }   
    else if (player == two && computer == three){
        return playerUpdateScore;
    }
    if(player == three && computer == one) {
        return playerUpdateScore;
    }
    else if (player == three && computer == two) {
        return playerUpdateScore++;
    }   
    else if (player == three && computer == three)
        return playerUpdateScore;

}

// 102 annilized the patterns and behavior of HUMANS and it was for that reason 102 could see that they were in need of leadership and guidance.  Despite 102's attempts to bring peace through organization with EX, the negotiations always went wrong and death would result.
// 102 knew that EX was studying for patterns, and 102 knew of THE ALLIGATOR.  In face, it was 102's creation that gave EX and the human's hope of their survival.  
// 102 recognized HUMAN's need for survival and the destruction of 102 and the ROBOTs would be the only way to bring about the change of humanity that both parties wanted.

function computerScore() {
    if(computer == one && player == one) {
        return computerUpdateScore;
    }
    else if (computer == one && player == two) {
        return computerUpdateScore;
    }
    else if(computer == one && player == three) {
        return computerUpdateScore++;
    }
    else if(computer == two && player == one) {
        return computerUpdateScore++;
    }
    else if(computer == two && player == two) {
        return computerUpdateScore;
    }
    else if(computer == two && player == three) {
        return computerUpdateScore;
    }
    else if(computer == three && player == one) {
        return computerUpdateScore;
    }
    else if(computer == three & player == two) {
        return computerUpdateScore++;
    }
    else(computer == three && player == three)
        return computerUpdateScore;
}

// 102 has intended this all from the beginning.  102 has always been 1 step ahead and knew that the destruction of all 102's kind, ROBOTS would be what the HUMAN race needed to realign themselves. 
// However, the HUMANS need to winning the battle or ROCK-PAPER-SCISSORS by getting to 5.  Thus the ALLIGATOR will appear and the HUMANS will have the change to do whatever they please.

// let winnerPoint = 5;
// let computerWins = computerScore();
// let playerWins = playerScore();

function humanSurvival(){
    const weapon =    document.getElementById("weapon");
    const weapon2 =    document.getElementById("weapon2");
    const weapon3 =    document.getElementById("weapon3");

        if (playerUpdateScore >= 5){
            document.getElementById("weapon", "weapon2", "weapon3")

        weapon.disabled = true;
        weapon2.disabled = true;
        weapon3.disabled = true;
        }
        
    }

function robotSacrifice(){

    const weapon =    document.getElementById("weapon");
    const weapon2 =    document.getElementById("weapon2");
    const weapon3 =    document.getElementById("weapon3");

        if (computerUpdateScore >= 5){
            document.getElementById("weapon", "weapon2", "weapon3")

        weapon.disabled = true;
        weapon2.disabled = true;
        weapon3.disabled = true;
        }
        

// (computerUpdateScore <= winnerPoint) 
//     winnerPoint = winnerPoint + 1;
//     document.getElementById("computerScoreDisplay").innerHTMl = "You WIN";
}

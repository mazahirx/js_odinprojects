console.log("Rock - Paper - Secissor");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    if(Math.random()<0.33){
        return "Rock";
    }else if(Math.random()<0.66){
        return "Paper";
    }else{
        return "Secissor";
    }
}


function getHumanChoice(){
    let input = prompt("Enter Your Choice : ");
    console.log(input);
}

function playRound(humanChoice, computerChoice){
    if(humanChoice == "Paper" && computerChoice == "Rock"){
        console.log("You Win ! Paper beats Rock");
        humanScore++;
    }else if(humanChoice == "Secissor" && computerChoice == "Paper"){
        console.log("You Win ! Seccisor beats Paper");
        humanScore++;
    }else if(humanChoice == "Rock" && computerChoice == "Secissor"){
        console.log("You Win ! Rock beats Secissor");
        humanScore++;
    }else if(humanChoice == "Rock" && computerChoice == "Paper"){
        console.log("You Lose ! Paper beats Rock");
        computerScore++;
    }else if(humanChoice == "Paper" && computerChoice == "Secissor"){
        console.log("You Lose ! Seccisor beats Paper");
        computerScore++;
    }else if(humanChoice == "Secissor" && computerChoice == "Rock"){
        console.log("You Lose ! Rock beats Secissor");
        computerScore++;
    }
}

const humanSelection = getComputerChoice();
const computerSelection = getHumanChoice();

playRound(humanSelection, computerSelection);
document.addEventListener("DOMContentLoaded", event => {
    console.log("Rock Paper Scissors!");

    const choices = ["rock","paper","scissors"];
    let playAgain = true;

    while(playAgain){
        let computerChoice = choices[Math.floor(Math.random()*choices.length)]
        let yourChoice = prompt("Choose (type) Rock, Paper or Scissors: ");
        if (yourChoice){ // Needed because cancelling the prompt gives yourChoice as undefined
            yourChoice = yourChoice.toLowerCase();
        }
        if (yourChoice != "rock" & yourChoice != "paper" & yourChoice != "scissors"){
            console.log("Not a valid response, type only one of \"rock, paper, scissors\" ");
        }else {
            let result;
            if (yourChoice == "rock"){
                switch (computerChoice){
                    case "rock":
                        result = "draw";
                        break;
                    case "paper":
                        result = "lose"
                        break;
                    case "scissors":
                        result = "win"
                }
            } else if (yourChoice == "paper"){
                switch (computerChoice){
                    case "rock":
                        result = "win";
                        break;
                    case "paper":
                        result = "draw";
                        break;
                    case "scissors":
                        result = "lose";
                }
            } else {
                switch(computerChoice){
                    case "rock":
                        result = "lose";
                        break;
                    case "paper":
                        result = "win";
                        break;
                    case "scissors":
                        result = "draw";
                }
            }
            console.log(
                `Your choice: ${yourChoice}
                Computer's choice: ${computerChoice}
                Result: ${result}!`);
        }

        playAgain = confirm("Play again? ");
        console.log(`Play again decision: ${playAgain}`);
    }
});
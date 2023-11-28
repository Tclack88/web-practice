document.addEventListener("DOMContentLoaded", () => {
    let playerSelection;
    let computerSelection;

    let playBtn = document.querySelector("#play-btn");
    let selectionBtns = document.querySelector("#selection-btns");
    playBtn.addEventListener("click", () => {
        playBtn.classList.add("hide");
        selectionBtns.classList.remove("hide");
        document.querySelector('.rules').classList.add("hide");
    });

    let playerChoices = document.querySelectorAll("#rock, #paper, #scissors");
    playerChoices.forEach((choice) => 
        choice.addEventListener('click', () =>{
            selectionBtns.value = choice.id;
            game();
        } ));

    const choices = ["rock","paper","scissors"];
    let playAgain = true;

    function getPlayerChoice(){
        let playerSelection = selectionBtns.value;
        return playerSelection;
    }

    function addRow(results){
        let table = document.querySelector("#history");
        // let row = document.createElement("tr");
        let row = table.insertRow(0);

        let c1 = document.createElement("td");
        c1.innerText = results[0]; // computer's choice
        let c2 = document.createElement("td");
        c2.innerText = results[1]; // player's choice
        let c3 = document.createElement("td");
        c3.innerText = results[2]; // game result (win-draw-lose)

        row.appendChild(c1);
        row.appendChild(c2);
        row.appendChild(c3);

        // table.appendChild(row);
    }

    let getcomputerSelection = () => choices[Math.floor(Math.random()*choices.length)]

    function playRound(computerSelection, playerSelection){
        let result;
        if (playerSelection == "rock"){
            switch (computerSelection){
                case "rock":
                    result = "draw";
                    break;
                case "paper":
                    result = "lose"
                    break;
                case "scissors":
                    result = "win"
            }
        } else if (playerSelection == "paper"){
            switch (computerSelection){
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
            switch(computerSelection){
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

        let gameResult = [playerSelection, computerSelection,result];
        return gameResult;

    }

    function tallyResults(){
        let playerWins = 0;
        let computerWins = 0;
        let gameTable = document.querySelector('#history');
        let rows = gameTable.rows;
        for (row of rows){
            let result = row.lastChild.innerText
            switch (result){
                case 'win':
                    playerWins +=1;
                    break;
                case 'lose':
                    computerWins +=1;
                    break;
                case 'draw':
                    break;
            }
        }
        return [playerWins,computerWins,rows.length];
    }

    function checkPlayAgain(){
        let gameTable = document.querySelector('#history');
        let tableLength = gameTable.rows.length;
        if (tableLength >=5){
            return false;
        }
        return true;

    }

    function game(){        

        computerSelection = getcomputerSelection();
        playerSelection = getPlayerChoice();
        let gameResult = playRound(computerSelection, playerSelection);
        addRow(gameResult);

        let resultText = document.querySelector("#results");

        
        playAgain = checkPlayAgain();
        if (playAgain){

            resultText.textContent = (
                `Your choice: ${gameResult[0]}
                Computer's choice: ${gameResult[1]}
                Result: ${gameResult[1]}!`);
        }else{
            selectionBtns.classList.add("hide");
            let finalResults = tallyResults();
            resultText.textContent = `You won ${finalResults[0]}/${finalResults[2]} rounds played`;
            if (finalResults[0] >  finalResults[1]){
                resultText.textContent += 'You Win :]';
            }else if (finalResults[0] <  finalResults[1]){
                resultText.textContent += 'You Lose :[';
            }else resultText.textContent += 'You Tied :/';
        }
    }
});

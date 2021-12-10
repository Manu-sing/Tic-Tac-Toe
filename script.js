
// factory function to create the players objects
const makePlayer = (name) => {
    return {name};
}



const Gameboard = (() => {
    // make game board object
    const makeGameBoardObj = (gameGrid) => { 
      return {gameGrid} 
    }
      let gameArray = ["", "", "", "", "", "", "", "", ""];
      const gameBoardObj = makeGameBoardObj(gameArray);
      
      const container = document.querySelector(".grid-container");
      //make grid and display it
      for (i =0; i < gameBoardObj.gameGrid.length; i++) {
        const cell = document.createElement("div");
        cell.innerHTML = gameBoardObj.gameGrid[i];
        cell.id = i;
        cell.className = "cell";
        container.appendChild(cell);
    
      }

     
    
    const displayController = () => {
        
        
        const formInput1 = document.getElementById("form-input1");
        const formInput2 = document.getElementById("form-input2");
        const form = document.querySelector(".form")
        const gameBoardCells = document.querySelectorAll(".cell");
        const showResultDiv = document.querySelector(".show-result")
        const statusDisplay = document.querySelector(".game-status")
        const restartGame = document.querySelector(".restart-game");
        const showNames = document.querySelector(".names-display");
        let displayPlayer1 = "";
        let displayPlayer2 = "";
        let playerOneObj = {};
        let playerTwoObj = {};

        let gameActive = false;// so that nothing happens if the players click on the cells before entering their names
        
        // event listener to submit player names and display them in the name divs
        const submitBtn = document.querySelector(".submit-button");
        submitBtn.addEventListener("click", (e) => {
            e.preventDefault();     
            
            playerOneObj = makePlayer(formInput1.value);
            displayPlayer1 = document.querySelector("#display-player1");
            displayPlayer1.classList.add("player-turn");
            displayPlayer1.textContent = playerOneObj.name + ": X";
            
            playerTwoObj = makePlayer(formInput2.value);
            displayPlayer2 = document.querySelector("#display-player2");
            displayPlayer2.textContent = playerTwoObj.name + ": O";

            showNames.style.display = "flex";
            
            form.reset();
            gameActive = true;
        })

        let players = ["player1", "player2"]
        let turn = 0;

         // event listener to restart the game
         restartGame.addEventListener("click", (e) => {
            gameArray = ["", "", "", "", "", "", "", "", ""];
            for ( let i = 0; i < gameBoardCells.length; ++i )
            gameBoardCells[i].innerHTML = "";
            displayPlayer1.textContent = "";
            displayPlayer2.textContent = "";
            statusDisplay.textContent = "";
            showNames.style.display = "none";
            showResultDiv.style.display = "none";
            turn = 0;
        })

        //listen to an event for all the cells of the game board and render the marks on the page
        gameBoardCells.forEach(cell => {
            
            cell.addEventListener("click", (e) => {
        
                if(e.target.innerText !== "" || !gameActive) {
                    document.getElementById("form-input1").focus();
                    return;
                };

                let currentPlayer = players[turn];

                if(currentPlayer == "player1") {
                // when player1 clicks on one cell, I push the mark "X" in the array[index=cell.id]
                // and print "X" on that cell"
                gameArray[e.target.id] = "X";
                e.target.innerText = gameArray[e.target.id];
                displayPlayer1.classList.remove("player-turn");
                displayPlayer2.classList.add("player-turn");
                } else {
                // when player2 clicks on one cell, I push "O" in the array[index=cell.id]
                // and print "O" on that cell"
                gameArray[e.target.id] = "O";
                e.target.innerText = gameArray[e.target.id];
                displayPlayer1.classList.add("player-turn");
                displayPlayer2.classList.remove("player-turn");
                }
                // after the click I want to increase the index by one and if the index is equal to 1, restart
                turn++;
                if(turn == players.length) {
                turn = 0;
                }
                //I also want to check, still don't know when and where, if there are 3 of the same marks in a row
                // something like if index 0,1,2 are the equal and the are equal to X, then player 1 is the winner
                if(gameArray[0] == "X" && gameArray[0] == gameArray[1] && gameArray[0] == gameArray[2]) {
                    showResultDiv.style.display = "block";
                    statusDisplay.textContent = playerOneObj.name + " is the winner!"
                    gameActive = false;
                    displayPlayer1.classList.remove("player-turn");
                    displayPlayer2.classList.remove("player-turn");
                    
                } else if (gameArray[3] == "X" && gameArray[3] == gameArray[4] && gameArray[3] == gameArray[5]) {
                    showResultDiv.style.display = "block";
                    statusDisplay.textContent = playerOneObj.name + " is the winner!"
                    gameActive = false;
                    displayPlayer1.classList.remove("player-turn");
                    displayPlayer2.classList.remove("player-turn");
                } else if (gameArray[6] == "X" && gameArray[6] == gameArray[7] && gameArray[6] == gameArray[8]) {
                    showResultDiv.style.display = "block";
                    statusDisplay.textContent = playerOneObj.name + " is the winner!"
                    gameActive = false;
                    displayPlayer1.classList.remove("player-turn");
                    displayPlayer2.classList.remove("player-turn");
                } else if (gameArray[0] == "X" && gameArray[0] == gameArray[3] && gameArray[0] == gameArray[6]) {
                    showResultDiv.style.display = "block";
                    statusDisplay.textContent = playerOneObj.name + " is the winner!"
                    gameActive = false;
                    displayPlayer1.classList.remove("player-turn");
                    displayPlayer2.classList.remove("player-turn");
                } else if (gameArray[1] == "X" && gameArray[1] == gameArray[4] && gameArray[1] == gameArray[7]) {
                    showResultDiv.style.display = "block";
                    statusDisplay.textContent = playerOneObj.name + " is the winner!"
                    gameActive = false;
                    displayPlayer1.classList.remove("player-turn");
                    displayPlayer2.classList.remove("player-turn");
                } else if (gameArray[2] == "X" && gameArray[2] == gameArray[5] && gameArray[2] == gameArray[8]) {
                    showResultDiv.style.display = "block";
                    statusDisplay.textContent = playerOneObj.name + " is the winner!"
                    gameActive = false;
                    displayPlayer1.classList.remove("player-turn");
                    displayPlayer2.classList.remove("player-turn");
                } else if (gameArray[0] == "X" && gameArray[0] == gameArray[4] && gameArray[0] == gameArray[8]) {
                    showResultDiv.style.display = "block";
                    statusDisplay.textContent = playerOneObj.name + " is the winner!"
                    gameActive = false;
                    displayPlayer1.classList.remove("player-turn");
                    displayPlayer2.classList.remove("player-turn");
                } else if (gameArray[2] == "X" && gameArray[2] == gameArray[4] && gameArray[2] == gameArray[6]) {
                    showResultDiv.style.display = "block";
                    statusDisplay.textContent = playerOneObj.name + " is the winner!"
                    gameActive = false;
                    displayPlayer1.classList.remove("player-turn");
                    displayPlayer2.classList.remove("player-turn");
                } else if(gameArray[0] == "O" && gameArray[0] == gameArray[1] && gameArray[0] == gameArray[2]) {
                    showResultDiv.style.display = "block";
                    statusDisplay.textContent = playerTwoObj.name + " is the winner!"
                    gameActive = false;
                    displayPlayer1.classList.remove("player-turn");
                    displayPlayer2.classList.remove("player-turn");
                } else if (gameArray[3] == "O" && gameArray[3] == gameArray[4] && gameArray[3] == gameArray[5]) {
                    showResultDiv.style.display = "block";
                    statusDisplay.textContent = playerTwoObj.name + " is the winner!"
                    gameActive = false;
                    displayPlayer1.classList.remove("player-turn");
                    displayPlayer2.classList.remove("player-turn");
                } else if (gameArray[6] == "O" && gameArray[6] == gameArray[7] && gameArray[6] == gameArray[8]) {
                    showResultDiv.style.display = "block";
                    statusDisplay.textContent = playerTwoObj.name + " is the winner!"
                    gameActive = false;
                    displayPlayer1.classList.remove("player-turn");
                    displayPlayer2.classList.remove("player-turn");
                } else if (gameArray[0] == "O" && gameArray[0] == gameArray[3] && gameArray[0] == gameArray[6]) {
                    showResultDiv.style.display = "block";
                    statusDisplay.textContent = playerTwoObj.name + " is the winner!"
                    gameActive = false;
                    displayPlayer1.classList.remove("player-turn");
                    displayPlayer2.classList.remove("player-turn");
                } else if (gameArray[1] == "O" && gameArray[1] == gameArray[4] && gameArray[1] == gameArray[7]) {
                    showResultDiv.style.display = "block";
                    statusDisplay.textContent = playerTwoObj.name + " is the winner!"
                    gameActive = false;
                    displayPlayer1.classList.remove("player-turn");
                    displayPlayer2.classList.remove("player-turn");
                } else if (gameArray[2] == "O" && gameArray[2] == gameArray[5] && gameArray[2] == gameArray[8]) {
                    showResultDiv.style.display = "block";
                    statusDisplay.textContent = playerTwoObj.name + " is the winner!"
                    gameActive = false;
                    displayPlayer1.classList.remove("player-turn");
                    displayPlayer2.classList.remove("player-turn");
                } else if (gameArray[0] == "O" && gameArray[0] == gameArray[4] && gameArray[0] == gameArray[8]) {
                    showResultDiv.style.display = "block";
                    statusDisplay.textContent = playerTwoObj.name + " is the winner!"
                    gameActive = false;
                    displayPlayer1.classList.remove("player-turn");
                    displayPlayer2.classList.remove("player-turn");
                } else if (gameArray[2] == "O" && gameArray[2] == gameArray[4] && gameArray[2] == gameArray[6]) {
                    showResultDiv.style.display = "block";
                    statusDisplay.textContent = playerTwoObj.name + " is the winner!"
                    gameActive = false;
                    displayPlayer1.classList.remove("player-turn");
                    displayPlayer2.classList.remove("player-turn");
                } else {
                    for(i=0; i < gameArray.length; i++) {
                        if(!gameArray.includes("")) {
                            showResultDiv.style.display = "block";
                            statusDisplay.textContent = "It's a tie. Play again!!"
                            gameActive = false;
                            displayPlayer1.classList.remove("player-turn");
                            displayPlayer2.classList.remove("player-turn");
                        }
                    }
                }
                
            })
        })
  
    }

    
    return {
        makeGameBoardObj,
        displayController,   
    }
 
})();

Gameboard.makeGameBoardObj();
Gameboard.displayController();


// factory function to create the players objects
const makePlayer = (name, score) => {
    return {name, score};
}

const player1 = makePlayer("Manu");
const player2 = makePlayer("Cheryl");

// module to create the gameboard object with the array as its property,
// build a grid based on the array and print the array values in it
const Gameboard = (() => {
    
    const makeGameBoardObj = (gameGrid) => { 
       return {gameGrid} 
    }
      let gameArray = ["", "", "", "", "", "", "", "", ""]
      const gameBoardObj = makeGameBoardObj(gameArray);
      
      const container = document.querySelector(".grid-container");
      
      for (i =0; i < gameBoardObj.gameGrid.length; i++) {
        let cell = document.createElement("div");
        cell.innerHTML = gameBoardObj.gameGrid[i];
        cell.className = "cell";
        container.appendChild(cell);
      }

    const displayController = () => {
        let players = [player1, player2]
        let turn = 0;
        let ind = -1;
        
        const gridCells = document.querySelectorAll(".cell");
        
        gridCells.forEach(cell => {
            
            cell.addEventListener("click", (e) => {
        
                if(e.target.innerText !== "" ) {
                    return;
                };

                let currentPlayer = players[turn];
                ind++;

                if(currentPlayer == player1) {
                gameArray[ind] = "X";
                e.target.innerText = gameArray[ind];
                } else {
                gameArray[ind] = "O";
                e.target.innerText = gameArray[ind];
                }
                
                turn++;
                if(turn == players.length) {
                turn = 0;
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







// What if you have a variable that keeps track of whose turn it is?
// You might start from an array initially filled with empty strings and that could be your gameboard. You render this array on the DOM. Then if there is a legal click on the DOM, you update this array and then maybe render the array again on the DOM?






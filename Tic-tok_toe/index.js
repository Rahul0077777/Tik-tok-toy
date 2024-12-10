const boxes = document.querySelectorAll(".box");
const gameInfo  = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winingPosition =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];

// lets create a function to intilaise the 

function initGame(){
    currentPlayer = "x";
    gameGrid = ["","","","","","","","",""];
    newGameBtn.classList.remove("active");
    gameInfo.innerText = `Current player - ${currentPlayer}`;
}
initGame();

// function swapTrun(){
//     if(currentPlayer ==="x"){
//         currentPlayer = "0";
//     }
//     else{
//         currentPlayer = "x";
//     }
//     // ui update
//     gameInfo.innerText = `current player -${currentPlayer}`;
// }

function handleClick(index){
    if(gameGrid[index] === "" ){
       boxes[index].innerHTML= currentPlayer; 
       gameGrid[index] = currentPlayer;
    //     swap karo turn ko
    // swapTrun();
    // // check koi jeet gaya toh nahi 
    // checkGameOver();
    }
}

boxes.forEach((box ,index)=>{
    box.addEventListener("click", ()=>{
        handleClick(index);
    })
});
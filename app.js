const gameboard = document.getElementById("gameboard");
const boxes = Array.from(document.getElementsByClassName("box"));
const restartBtn = document.getElementById("restartBtn");
const playText = document.getElementById("playText");
let size = 3;
var myArray = [[1,1,1],[1,1,1],[1,1,1]];

const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = O_TEXT;

const drawBoard = () => {
  boxes.forEach((box, index) => {
    let styleString = "";
    if (index < 3) {
      styleString += `border-bottom: 3px solid var(--purple);`;
    }
    if (index % 3 === 0) {
      styleString += `border-right: 3px solid var(--purple);`;
    }
    if (index % 3 === 2) {
      styleString += `border-left: 3px solid var(--purple);`;
    }
    if (index > 5) {
      styleString += `border-top: 3px solid var(--purple);`;
    }
    box.style = styleString;

    box.addEventListener("click", boxClicked);
  });
};

function boxClicked(e) {
  let sum = 0;
  const id = e.target.id;

  for (let i = 0; i <size; i++){
    myArray[id[0]][i] *= -1;
    myArray[i][id[1]] *= -1;
  }
  myArray[id[0]][id[1]] *= -1;

  boxes.forEach((box, i) => {
    box.innerText = myArray[Math.floor(i/size)][i%size];
    sum += myArray[Math.floor(i/size)][i%size];
  });

  if(sum == -9){
    playText.innerHTML = `You Win!!`
  }

}


restartBtn.addEventListener("click", () => {
  myArray = [[1,1,1],[1,1,1],[1,1,1]];
  boxes.forEach((box) => {
    box.innerText = 1;
  });
  playText.innerHTML = `Let's Play!!`;

  currentPlayer = O_TEXT;
});

drawBoard();

let boxes = document.querySelectorAll(".main");
let para = document.querySelector(".win");
let displ = document.querySelector(".ifwin");
let resetB = document.querySelector(".btn");
let newB = document.querySelector(".wi");

let turnO = true;

const wins = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O"; 
            turnO = false;
        }
        else{
            box.innerText = "X"; 
            turnO = true;
        }
        box.disabled = true;
        checkWinner();

    });
});


checkWinner = () => {
    for(x of wins) {
       let p1v = boxes[x[0]].innerText;
       let p2v = boxes[x[1]].innerText;
       let p3v = boxes[x[2]].innerText;

      if(p1v != "" && p2v != "" && p3v != ""){
        if(p1v === p2v && p2v === p3v){
            showWinner(p1v);
        }
       }
    }
};

showWinner = (win) => {
  para.innerText =`congratulations, the winner is ${win}`;
  displ.classList.remove("hide");
  disableBtn();
};

disableBtn = () => {
    for(x of boxes) {
        x.disabled = true;
    }
};

enableBtn = () => {
    for(x of boxes) {
        x.disabled = false;
        x.innerText ="" ;
    }
}

resetBtn = () => {
    turnO = true;
    enableBtn();
    displ.classList.add("hide");
    displ2.classList.add("hide2");
};

resetB.addEventListener("click", resetBtn);
newB.addEventListener("click", resetBtn);
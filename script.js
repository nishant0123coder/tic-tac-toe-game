console.log("Script running");
let turn = 'X';
let gameover = false;
let gamewin = new Audio("gamewin.wav");
let gamestep = new Audio("step.wav");
//function for change turn
const changeTurn = () => {
    return turn === 'X'?'O':'X';
}

//function for check win
const checkWin = () => {
    let boxText = document.getElementsByClassName('char');
    let win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    win.forEach(e => {
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== '')) {
            document.querySelector('.turn-info').innerText = "Player " + boxText[e[0]].innerText + " WON"
            gameover = true;
            gamewin.play();
        }

    })

}

//Game working logic
let boxes = document.getElementsByClassName("game-box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.char');
    element.addEventListener('click',() => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            gamestep.play();
            checkWin();
            if(!gameover) {
                document.getElementsByClassName('turn-info')[0].innerText = "Turn for " + turn;
            }
        }
    })
});

//function for reset button
reset.addEventListener('click',() => {
    let boxText = document.querySelectorAll(".char");
    Array.from(boxText).forEach(element => {
        element.innerText = "";
    });
    turn = 'X';
    gameover = false;
    document.getElementsByClassName('turn-info')[0].innerText = "Turn for " + turn;
})
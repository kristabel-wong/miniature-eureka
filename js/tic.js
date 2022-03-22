$(document).ready(function () { 

const playerX = 'X';
const playerO = 'O';
let playerOTurn = false;

//attempt two - cutting down the functions within functions

$('.box').on('click', function () { // applies to all box, but will choose specific box


    if ( $(this).text() === "" ){

        if (playerOTurn === true) {
            $( this ).text("O").css('font-size', '800%');
            playerOTurn = false;
        } else {
            $( this ).text("X").css('font-size', '800%');
            playerOTurn = true;
        }
    }
    

    const checkForWin = function () {
       
        // checking if X wins
        for (let i = 0; i < winningCombos.length; i++) {
            let a = winningCombos[i][0];
            let b = winningCombos[i][1];
            let c = winningCombos[i][2];

            if ($(`#${a}`).text() === "X" && $(`#${b}`).text() === "X" && $(`#${c}`).text() === "X") { // if the text of the id box matches
                console.log('Player X Wins');
                $('.winning_text').text('Player X Wins');
            }
    
        } // checking for O
        for (let i = 0; i < winningCombos.length; i++) {
            let a = winningCombos[i][0];
            let b = winningCombos[i][1];
            let c = winningCombos[i][2];

            if ($(`#${a}`).text() === "O" && $(`#${b}`).text() === "O" && $(`#${c}`).text() === "O") { // if the text of the id box matches
                console.log('Player O Wins');
                $('.winning_text').text('Player O Wins');
            }
        }
    }
    
    checkForWin();
    
})


const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];







});



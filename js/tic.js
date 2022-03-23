$(document).ready(function () { 

let playerOTurn;

let scoresX = 0;
$('#playerX').text(`${scoresX}`);
let scoresO = 0;
$('#playerO').text(`${scoresO}`);
let draw = 0;
$('#draw').text(`${draw}`);

$('#X').on('click', function () {
    
    if ( $('.box').text() === "") { // if the grid is empty player can be order can be chosen. This way, it cannot be changed half way through
        playerOTurn = false;
    }
    
})

$('#O').on('click', function () {
    
    if ( $('.box').text() === "") {
        playerOTurn = true;
    }
    
})

//attempt two - cutting down the functions within functions

$('.box').on('click', function () { // applies to all box, but will choose specific box

    if ($('.winning_text').text() !== "" ) {

    } else if ( $(this).text() === ""){

        if (playerOTurn === true) {
            $( this ).text("O").css('font-size', '750%');
            playerOTurn = false;
        } else {
            $( this ).text("X").css('font-size', '750%');
            playerOTurn = true;
        }
    }

    
    const checkForWin = function () {
       
        // checking if X wins
        for (let i = 0; i < winningCombos.length; i++) {
            let a = winningCombos[i][0];
            let b = winningCombos[i][1];
            let c = winningCombos[i][2];

            if ($(`#${a}`).text() === "X" && $(`#${b}`).text() === "X" && $(`#${c}`).text() === "X" && $('.winning_text').text() === "") { // if the text of the id box matches
                console.log('Player X Wins');
                scoresX +=1;
                $('#playerX').text(`${scoresX}`);
                $('.winning_text').text('Player X Wins');
            }
    
        } // checking for O
        for (let i = 0; i < winningCombos.length; i++) {
            let a = winningCombos[i][0];
            let b = winningCombos[i][1];
            let c = winningCombos[i][2];

            if ($(`#${a}`).text() === "O" && $(`#${b}`).text() === "O" && $(`#${c}`).text() === "O" && $('.winning_text').text() === "") { // if the text of the id box matches
                console.log('Player O Wins');
                scoresO +=1;
                $('#playerO').text(`${scoresO}`);
                $('.winning_text').text('Player O Wins');
            } 
        } 
        let string = ""; 
        for (let i = 0; i < 9; i++) { // number of boxes. If all boxes are full and there has been no winner announced, then its a draw!
            string += $(`#${i}`).text();
            if ( string.length === 9 && $('.winning_text').text() === "") {
                console.log("It's a Draw!");
                draw += 1;
                $('#draw').text(`${draw}`);
                $('.winning_text').text("It's a Draw!");
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

$('.playAgain').on('click', function () {  
    $('.box').empty();
    $('.winning_text').empty();
})


$('.reset').on('click', function () {
    let scoresX = 0;
    $('#playerX').text(`${scoresX}`);
    let scoresO = 0;
    $('#playerO').text(`${scoresO}`);
    let draw = 0;
    $('#draw').text(`${draw}`);

    $('.box').empty();
    $('.winning_text').empty();
})




});


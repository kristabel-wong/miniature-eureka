$(document).ready(function () { 

let playerOTurn;

let scoresX = 0;
$('#playerX').text(`${scoresX}`);
let scoresO = 0;
$('#playerO').text(`${scoresO}`);
let draw = 0;
$('#draw').text(`${draw}`);

$('#X').on('click', function () { // choosing player token
    
    if ( $('.box').text() === "") { // if the grid is empty, player token can be chosen. This way, it cannot be changed half way through
        playerOTurn = false;
    }
    
})

$('#O').on('click', function () { // choosing player token
    
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
                console.log('Player X Wins!');
                scoresX +=1;
                $('#playerX').text(`${scoresX}`);
                $('.winning_text').text('Player X Wins!');
                $('#myModal').css('display','block');
                $('.buttons').css('display','none');
            }
    
        } // checking for O
        for (let i = 0; i < winningCombos.length; i++) {
            let a = winningCombos[i][0];
            let b = winningCombos[i][1];
            let c = winningCombos[i][2];

            if ($(`#${a}`).text() === "O" && $(`#${b}`).text() === "O" && $(`#${c}`).text() === "O" && $('.winning_text').text() === "") { // if the text of the id box matches
                console.log('Player O Wins!');
                scoresO +=1;
                $('#playerO').text(`${scoresO}`);
                $('.winning_text').text('Player O Wins!');
                $('#myModal').css('display','block');
                $('.buttons').css('display','none');
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
                $('#myModal').css('display','block');
                $('.buttons').css('display','none');
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

$('.playAgain, .playAgain1').on('click', function () {  
    $('.box').empty();
    $('.winning_text').empty();
    $('.gameboard').css('opacity','1');
    $('.winning_message').css('z-index','-1');
})


$('.reset, .reset1').on('click', function () {
    let scoresX = 0;
    $('#playerX').text(`${scoresX}`);
    let scoresO = 0;
    $('#playerO').text(`${scoresO}`);
    let draw = 0;
    $('#draw').text(`${draw}`);

    $('.box').empty();
    $('.winning_text').empty();
    $('.gameboard').css('opacity','1');
    $('.winning_message').css('z-index','-1');
})


//----------------------- modal --------------------------//

$('#modalB').on('click', function () {
    $('#myModal').css('display','block');
    $('.buttons').css('display','none');
});

$('.close, .playAgain1, .reset1').on('click', function () { // these three function removes modal box
    $('#myModal').css('display','none');
    $('.buttons').css('display','block');
});







});






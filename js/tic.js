$(document).ready(function () { 

const playerX = 'X';
const playerO = 'O';
let playerOTurn = false;

const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const gameboard = [
    [$('#0'),$('#1'), $('#2')],
    [$('#3'), $('#4'), $('#5')],
    [$('#6'), $('#7'), $('#8')]
];

$('.box').on('click', function () { // applies to all box, but will choose specific box
    if (playerOTurn === true) {
        $( this ).text("0").css('font-size', '800%');
        playerOTurn = false;
    } else {
        $( this ).text("X").css('font-size', '800%');
        playerOTurn = true;
    }
    
})

});



// $('.square').on('click', function () {
//     $( this ).append('<div class="nought"></div>');
// });


// $('.square').on('click', function (){
//     if ($(this).text().length === 1) { $(this).off('click')
//     } else if(player===1) {
//         $(this).text('O');
//     } 
// });


// $('.square div').on('click', function () {
//     $( this ).addClass('nought');
// });


// $('.square.top.left div').addClass('nought'); // this works for a specific one
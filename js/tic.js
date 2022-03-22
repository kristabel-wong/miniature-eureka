$(document).ready(function () { 

const playerX = 'X';
const playerO = 'O';
let playerOTurn = false;



// might make empty array and paste them in. 

let combosX = []; // this will push an array of ID names, which is compare to combos
let combosO = [];

combosX = [];
// let xCombo2 = [];

// let oCombo1 = [];
// let oCombo2 = [];

// $('.box').on('click', function () { // applies to all box, but will choose specific box
//     let turns = 0;
//     if ( $(this).text() === ""){

//         if (playerOTurn === true) {
//             $( this ).text("0").css('font-size', '800%');
            
//             if (oCombo1.length === 3) { // time to push new array 
//                 combosO.push(oCombo1);
//                 oCombo2.push($(this).attr('id'));
//                 console.log(oCombo2);
//                 console.log(combosO);
//             } else {
//                 oCombo1.push($(this).attr('id'));
//                 console.log(oCombo1);
//                 console.log(oCombo1.length);
//             }
//             playerOTurn = false;
//         } else {
//             $( this ).text("X").css('font-size', '800%');
            
//             if (turns === 3) {
//                 combosX.push(combosXxCombo1);
//                 xCombo2.push($(this).attr('id'));
//                 console.log(xCombo2);
//                 console.log(combosX);
//                 turns += 1;
//                 console.log(turns);
//             } else if ( turns > 3) {
//                 xCombo2.push($(this).attr('id'));
//                 console.log(xCombo2);
//                 console.log(combosX);
//                 turns += 1;
//                 console.log(turns);
//             } else {
//                 combosXxCombo1.push($(this).attr('id'));
//                 console.log(xCombo1);
//                 turns += 1;
//                 console.log(turns);
//             }
          
//             playerOTurn = true;
//         }
//     }
    
    
// })

//attempt two - cutting down the functions within functions

$('.box').on('click', function () { // applies to all box, but will choose specific box

    


    if ( $(this).text() === "" ){

        if (playerOTurn === true) {
            $( this ).text("0").css('font-size', '800%');
            combosO.push($(this).attr('id')); // record combo
            console.log(`Player O combos: ${combosO}`);
            checkForWin();
            playerOTurn = false;
        } else {
            $( this ).text("X").css('font-size', '800%');
            combosX.push($(this).attr('id')); // record combo
            console.log(`Player X combos: ${combosX}`);
            checkForWin();
            playerOTurn = true;
        }
    }
    
    
})







});

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

let test = [0, 1, 2, 3, 4, 5];
let combo1 = [5,4,3,0,1];
let combo2 =  [1,2,0,4];

console.log(winningCombos[0].toString() === combo1.sort().toString()); // true

const result = 
    winningCombos[1].every(function (element) {
        return combo1.includes(element);
    });

    console.log(result);




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
$(document).ready(function () { 

    const gameboard = [
        [$('.box1'),$('.box2'), $('.box3')],
        [$('.box4'), $('.box5'), $('.box6')],
        [$('.box7'), $('.box8'), $('.box9')]
    ];

    $('.box1').on('click', function () {
        $( this ).text("X").css('font-size', '800%');
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
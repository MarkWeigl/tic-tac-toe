$(document).ready(function(){

  $('.col').click(function(){
    console.log('clicked');
    $(this).text('x');
    var row = parseInt($(this).parent().attr('class').slice(-1));
    var col = parseInt($(this).attr('class').slice(-1));
    console.log (row, col);
  }); 

var board = Array(3);
console.log(board);


  $('#play-again').mousedown(function() {
    console.log('play-again');
  });

    
});
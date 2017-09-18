$(document).ready(function() {
  enterSquares(16);
  reset();
  randomize();
  overlayGrey();
});

// Creates number of squares
function enterSquares(squares) {
  var dimension = 400 / squares;
  var area = squares * squares;

  for (var i = 0; i < area; i++) {
    $('<div class="grid-unit"></div>').appendTo('#container')
  }

  $('.grid-unit').css({ "width": dimension, "height": dimension});
  hover();
};


// Prompt button
function reset() {
  $('#clr-btn').on('click', function() {
    var userInput = prompt("How many squares per side?");
    var input = parseInt(userInput);
    $('#container').empty();
    enterSquares(input);
    hover();
  });
};


// changes squares to dark grey on mouse enter
function hover() {
  darkGrey = $('.grid-unit').on('mouseenter', function() {
    $(this).addClass('dark-grey');
  });
};

//changes color of squares
function randomize() {
  $('#randomize').on('click', function() {
    $('.grid-unit').hover( function() {
      var randomColor = 'rgb(' + Math.floor(Math.random() * 250) + ', ' + Math.floor(Math.random() * 250) + ', ' + Math.floor(Math.random() * 250) + ')';
      $(this).css('background-color', randomColor);
    });
  });
};


// Increase opacity
function overlayGrey() {
  $('#overlay-grey').on('click', function() {
    $('.grid-unit').hover( function() {
      $(this).css({'background-color':'black', 'opacity': '+=0.1'});
    });
  });
}

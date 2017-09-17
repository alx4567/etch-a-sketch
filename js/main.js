$(document).ready(function() {
  var squares = 16
  // 16 rows with 16 divs
  for (var i = 0; i < squares; i++) {
    var row = $('<div class="grid-rows"></div>')
    row.appendTo('#container')
    for (var b = 0; b < squares; b++) {
      var grid = $("<div class='grid-unit'></div>");
      grid.appendTo('.grid-rows:last-child');
    }
  }

  // changes squares to dark grey on mouse enter
  darkGrey = $('.grid-unit').on('mouseenter', function() {
    $(this).addClass('dark-grey');
  });

  // Prompt button
  $('#clr-btn').on('click', function() {
    var userInput = prompt('How many squares per side?');
    var squares = parseInt(userInput);
    $('.grid-rows').remove();
    for (var i = 0; i < squares; i++) {
      var row = $('<div class="grid-rows"></div>')
      row.appendTo('#container')
      for (var b = 0; b < squares; b++) {
        var grid = $("<div class='grid-unit'></div>");
        grid.appendTo('.grid-rows:last-child');
      }
    }

    $('.grid-unit').on('mouseenter', function() {
      $(this).addClass('dark-grey');
    });

  });
});

$(document).ready(function() {
  for (var i = 0; i < 16; i++) {
    var row = $('<div class="grid-rows"></div>')
    row.appendTo('#container')
    for (var b = 0; b < 16; b++) {
      var grid = $("<div class='grid-unit'></div>");
      grid.appendTo('.grid-rows:last-child');
    }
  }
});

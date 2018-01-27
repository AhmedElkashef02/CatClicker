$(document).ready(function() {
  //cats picures and names
  var data = {
    0: {
      catName: 'snoopy',
      catIndex: 1,
      catImgExt: 'cat1.jpg',
      counter: 0
    },
    1: {
      catName: 'naughty',
      catIndex: 2,
      catImgExt: 'cat2.jpg',
      counter: 0
    },
    2: {
      catName: 'posy',
      catIndex: 3,
      catImgExt: 'cat3.jpg',
      counter: 0
    },
    3: {
      catName: 'ledo',
      catIndex: 4,
      catImgExt: 'cat4.jpg',
      counter: 0
    },
    4: {
      catName: 'suchi',
      catIndex: 5,
      catImgExt: 'cat5.jpg',
      counter: 0
    }
  };

  //controller
  var controller = {
    getCatName: function(i) {
      return data[i].catName;
    }, getCatImgExt: function(i) {
      return "img/" + data[i].catImgExt;
    }, getCatIndex: function(i) {
      return data[i].catIndex;
    }, getCatCounter: function(i) {
      return data[i-1].counter;
    }, incrementCatCounter: function(i) {
      data[i-1].counter += 1;
    }
  };

  //creating sidebars
  for (var i = 0; i < 5; i++) {
    $('#sidebar').append('<h1>' + controller.getCatName(i) + '</h1>');
    $('#sidebar').append('<img src=' + '"' + controller.getCatImgExt(i) + '"' + ' class="clickable" id=' + '"' + controller.getCatIndex(i) + '"' + '>');
  }

  //creating playground adding pic and counter
  $('.clickable').click(function(e) {
    var cat_id = Number(e.currentTarget.id);
    $('#playground').html('<img src=' + '"' + controller.getCatImgExt(cat_id-1) + '"' + '>');
    $('#counter_place').html('<p>' + controller.getCatCounter(cat_id) + '</p>');
  });

  //counters increment and display
  $('.clickable').click(function(e) {
    var cat_id = Number(e.currentTarget.id);
    controller.incrementCatCounter(cat_id);
    $('#counter_place').html('<p>'+controller.getCatCounter(cat_id)+'</p>');
  });

});

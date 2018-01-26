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

  //creating sidebars
  for (var i = 0; i < 5; i++) {
    $('#sidebar').append('<h1>' + data[i].catName + '</h1>');
    var img_extension = "img/" + data[i].catImgExt;
    var img_id = data[i].catIndex;
    $('#sidebar').append('<img src=' + '"' + img_extension + '"' + ' class="clickable" id=' + '"' + img_id + '"' + '>');
  }

  //creating playground adding pic and counter
  $('.clickable').click(function(e) {
    var cat_id = Number(e.currentTarget.id);
    var img_extension = "img/" + data[cat_id-1].catImgExt;

    $('#playground').html('<img src=' + '"' + img_extension + '"' + '>');
    $('#counter_place').html('<p>' + data[cat_id-1].counter + '</p>');
  });

  //counters increment and display
  $('.clickable').click(function(e) {
    var cat_id = Number(e.currentTarget.id);
    data[cat_id-1].counter += 1;
    $('#counter_place').html('<p>'+data[cat_id-1].counter+'</p>');
  });

});

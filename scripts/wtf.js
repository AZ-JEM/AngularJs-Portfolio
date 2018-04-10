$(document).ready(function() {

// $(document.ready).function() {
  // array of gallery items
  var gallery_items = [
    "http://via.placeholder.com/500x300",
    "http://via.placeholder.com/500x300",
    "http://via.placeholder.com/500x300",
    "http://via.placeholder.com/500x300"
  ];
  // append gallery items to row
  for (var i; i < gallery_items.length; i++) {
    var link = "\
      <div class='col col-lg-3 col-sm-6'>\
        <div class='thumbnail'>\
          <h4>...</h4>\
          <img src='" + gallery_items[i] + "'>\
        </div>\
      </div>\
    ";
    console.log(link);
    $('#gallery').append(link);
  }
});

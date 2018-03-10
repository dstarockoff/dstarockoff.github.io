$(document).ready(function() {
    //sample data - input full dataset here
    //or replace this with json returned from gsheet (will also need to change references in the for loop)
    var url =
    "https://spreadsheets.google.com/feeds/list/1V5VS3MF6GNiFGddY18JF-qjDuJPtPVJ9qHbSwdve6RY/od6/public/full?alt=json";

$( document ).ready(function(){
  //sample data - input full dataset here
  //or replace this with json returned from gsheet (will also need to change references in the for loop)
  var data = [{"restaurant":"restaurant1","stars":1},
              {"restaurant":"restaurant2","stars":2},
              {"restaurant":"restaurant3","stars":3}]
  var table=$("#restTable");
  //for every restaurant, append restaurant name and stars to restTable div
  for (i=0;i<data.length;i++){
    stars=""
    //add appropriate number of stars, using font awesome star icon
    for (j=0; j<data[i].stars; j++){
      stars=stars+"<i class='fas fa-star'></i>"
      console.log(stars)
    }
    table.append("<div class='row'><div class='col-md-6'>"
                  +data[i].restaurant+
                  "</div><div class='col-md-6'>"
                  +stars+
                  "</div></div>");
  }
})


//Add an empty array to hold restaurant and star objects. Then, push a restaurant
//and stars property into the json loop below

 // Get Data from Google Sheets (yes, really).
  //var data = [];

  $.getJSON(url, function(result) {
    data = result.feed.entry;
    console.log(data);
    for (i = 0; i < data.length; i++) {
      console.log(data[i].title);
      var t = "$" + "t";
      var rest = data[i].title[t];
      var stars = data[i].content[t];
      object = {};
      //Check if this is how to create new properties within empty object.
      object.restaurant=rest;
      object.stars=stars;
      data.push(object);
    }
  });

    var table = $("#restTable");
    //for every restaurant, append restaurant name and stars to restTable div
    for (i = 0; i < data.length; i++) {
        stars = ""
        //add appropriate number of stars, using font awesome star icon
        for (j = 0; j < data[i].stars; j++) {
            stars = stars + "<i class='fas fa-star'></i>"
            console.log(stars)
        }
        table.append("<div class='row'><div class='col-md-1'><input id='checkBox' type='checkbox'></div><div class='col-md-5'>" +
            data[i].restaurant +
            "</div><div class='col-md-5'>" +
            stars +
            "</div></div>");
    }

  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });
})
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


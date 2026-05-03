// declaring variables 

let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum"]; 
let colorCounter=0;
let mood="neutral";

// reusable functions

function makeImage(colorToMatch) { 
    // what the function actually does
    if ( colors[colorCount]== colorToMatch ) {
        $("body").append("<img width=100 src='"+colorToMatch+".jpg'>");
    }

} 

function (paintPage); 

// what happens when the button is clicked

$("#needy-button").click(function () { 
 
count = count + 1;
colorCount=count-1;

  $("#needy-button").html( "Clicks: " + count + " Color: " + colors[colorCount] );
   $("body").css("background-color", colors[colorCount]);

   if (colors[colorCount] == "HotPink") { 
        $("#needy-button").after(" notPink ");
    }
    else if (colors[colorCount] == "Orchid") {
            $("#needy-button").after("  hey Orchid ");
    }
    else {
      $("#needy-button").after(" all other colors ");
    }

    if (count < 5) { mood="fresh and happy"; }
    else if ( count >= 5 && count < 10) {mood="keep pushing";}
    else { mood="so tired";}

    makeImage("Orchid");
    makeImage("Plum");
    makeImage("Coral");

       if (colorCount==4) { 
        colorCount=0;  
        console.log("it happened");
    }

    console.log(mood);

});
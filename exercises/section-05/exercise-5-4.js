let count = 0;
let friends = ["leo", "cyrus", "ranier"];
let lcount = 0;
let ccount = 0;
let rcount = 0;

function showImage(friendName) { 
    // what the function actually does
    //hide previous images
    $("img").hide()
    //show new image
    $("body").append("<img width=400 src='"+friendName+".jpg'>");
}

//too much hanging out message
function showHangoutMessage(countname) { 
    // what the function actually does
   if ( lcount > 4 )
    $("body").html("you have hung out with leo too much!")
   if ( rcount > 4 )
    $("body").html("you have hung out with ranier too much!")
   if ( ccount > 4 )
    $("body").html("you have hung out with cyrus too much!")
}

//clicks
$("#leo-button").click(function(){
    console.log("leo clicked");
    showImage("leo");
    lcount = lcount + 1;
    $("#leo-button").html("hung out with leo " + lcount + " times");
    showHangoutMessage(lcount);
})
$("#cyrus-button").click(function(){
    console.log("cyrus clicked");
    showImage("cyrus");
    ccount = ccount + 1;
    $("#cyrus-button").html("hung out with cyrus " + ccount + " times");
    showHangoutMessage(ccount);
})
$("#ranier-button").click(function(){
    console.log("ranier clicked");
    showImage("ranier");
    rcount = rcount + 1;
    $("#ranier-button").html("hung out with ranier " + rcount + " times");
    showHangoutMessage(rcount);
})


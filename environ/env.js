let environmentTitle = "theOcean";

let environmentElements = ["fish", "seahorse", "boot", "floor"];

let mainEntity = {
    name: "fish",
    type: "animal",
    mood: "playful",
    isMoving: false,
    favoriteElement: environmentElements[1]
};

$("#fish-button").click(function(){
    console.log("fish clicked");
    $("#fish-button").html("the fish is not friendly. it challenged you to a fight.");
})
$("#seahorse-button").click(function(){
    console.log("seahorse clicked");
    $("body").append("<img width=400 src='seahorse-heart.gif'>");

})
$("#boot-button").click(function(){
    console.log("boot clicked");
})


$("#activity-button").click(function(){
    let activity=$("#activity").val();
    console.log("activity clicked");
    if(activity === "surfing") {
        console.log("surfing!!");
        $("#surfing-sound")[0].play();
    }
    else if(activity === "scuba diving") {
        console.log("scuba!!");
        $("#scuba-sound")[0].play();
    }
    else if(activity === "snorkeling") {
        console.log("snorkeling!!");
        $("#snorkeling-sound")[0].play();

    }
    else {
        console.log("lame activity")
        {$("#output").html("never heard of that");}
    }
});
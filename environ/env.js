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
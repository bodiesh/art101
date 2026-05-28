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
    $("#environment-output").append("<h3>the fish is not friendly. it challenged you to a fight.</h3>");
})

$("#seahorse-button").click(function(){
    console.log("seahorse clicked");
    $("body").append("<img width=400 src='seahorse-heart.gif'>");
})

$("#boot-button").click(function(){
    console.log("boot clicked");
})

$("#activities").change(function(){
    const selectedValue = $(this).val();
    console.log("Selected value:", selectedValue);
    console.log("Selected text:", $("#activities option:selected").text());
    if(selectedValue === "1") {
        $("#scuba-sound")[0].play();
    }
    else if(selectedValue === "2") {
        $("#surfing-sound")[0].play();
    }
    else if(selectedValue === "3") {
        $("#snorkeling-sound")[0].play();
    }
});

$("#seahorse").click(function () {
    console.log("flip the horse")
    $(this).toggleClass("upside-down");
});
let count = 0;
let buttonCreature = {
    name: "John Button",
    species: "interface creature",
    favoriteFood: "clicks",
    moods: ["sleepy", "excited", "ecstatic", "ready for more clicks", "full of clicks", "overwhelmed by clicks", "dying of overclickedness"]
};
$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];

    let message = "<p>My name is " + buttonCreature.name + ".</p>";
    message = message + "<p>You clicked me " + count + " times.</p>";
    message = message + "<p>My current mood is " + currentMood + ".</p>";
    message = message + "<p>My favorite food is " + buttonCreature.favoriteFood + ".</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});
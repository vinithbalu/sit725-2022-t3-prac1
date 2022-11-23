function changeText() {
    var textsArray = ["TEXT1", "TEXT2", "TEXT3", "TEXT4", "TEXT5"]
    var number = getRandomNumberBetween(0, textsArray.length - 1)
    console.log("Index: ", number)
    document.getElementById("heading").innerHTML = textsArray[number];
}

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 2) + min);
}
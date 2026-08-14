// ? Methods of set

//new Set()
const vegetables = new Set(["Potato", "Brockly", "Culiflower", "Radish"]);
//add()
vegetables.add("cucumber", "tomato");
//clear()
//delet()
//entries()
let keyValue = vegetables.entries();

let valuesPair = "";

for (const entry of vegetables) {
    valuesPair += entry + "<br>";
}
console.log(valuesPair);
//for Each()
let listItems = "";

vegetables.forEach(function(value) {
    listItems += value + "<br>";
});
console.log(listItems);
//has()
let checkValue = vegetables.has("Brockly");
// console.log(checkValue);
//keys()
// ? values()
// * size()
let setSize = vegetables.size;

// ? loop
let listingElement = "";

for (const x of vegetables) {
    listingElement += x + "< br >";
}

// console.log(listingElement)

//console.log(setSize)

// ! This is an alert
// ? Is this function needed?
// * Highlighted note
// TODO: Fix this later
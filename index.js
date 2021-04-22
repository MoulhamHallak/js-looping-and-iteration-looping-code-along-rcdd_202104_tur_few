// Code your solutions in this file
let array = ["Ada", "Brendan", "Ali"];
let event = "birthday";
function writeCards(array, event){
  for (let i = 0; i < array.length; i++){
    console.log([`Thank you, ${array[i]}, for the wonderful ${event[0]} gift!`]);
  }
  return array;
}
writeCards(array, event)
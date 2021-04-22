// Code your solutions in this file
let array = ["Ada", "Brendan", "Ali"];
let event = "surprise";
let newArray=[];
function writeCards(array, event){
  for (let i = 0; i < array.length; i++){
    newArray = [`Thank you, ${array[i]}, for the wonderful ${event} gift!`];
  }
  return newArray;
}
writeCards(array, event)
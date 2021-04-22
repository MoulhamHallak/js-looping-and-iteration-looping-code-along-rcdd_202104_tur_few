// Code your solutions in this file
let array = ["Lisa", "Kaitlin", "Jan"];
let event = "surprise";
let newArray=[];
function writeCards(array, event){
  for (let i = 0; i < array.length; i++){
    obj = [`Thank you, ${array[i]}, for the wonderful ${event} gift!`];
    newArray.push(i);
  }
  return newArray;
}
writeCards(array, event)
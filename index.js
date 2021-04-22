// Code your solutions in this file
let array = ["Lisa", "Kaitlin", "Jan"];
let event = "surprise";
let newArray=[];
function writeCards(array, event){
  for (let i = 0; i < array.length; i++){
    newArray = [`Thank you, ${array[0]}, for the wonderful ${event} gift!`, `Thank you, ${array[1]}, for the wonderful ${event} gift!`, `Thank you, ${array[2]}, for the wonderful ${event} gift!`];
  }
  console.log(newArray);
}
writeCards(array, event)
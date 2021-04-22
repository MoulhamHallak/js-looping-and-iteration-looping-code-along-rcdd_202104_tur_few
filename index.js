// Code your solutions in this file
let array = ["Lisa", "Kaitlin", "Jan"];
let event = 'surprise';
let newArray=[];
function writeCards(array, event){
  for (let i = 0; i < array.length; i++){
    newArray[i] = "Thank you, " + array[i] + ", for the wonderful " + event + " gift!";
    // console.log(newArray)
  }
  return newArray;
}
writeCards(array, event)

function countDown(num){
  while (num > 0) {
    console.log(num--);
  }
}
countDown(10)
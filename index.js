// Code your solutions in this file
const names=['Guadalupe','Ollie','Aki'];
const message = "surprise";

//returns an array of thank you messages for each name provided to the function 
 function writeCards( names, message ) {
  let Cards = []
  for ( let i = 0; i < names.length; i++ ) {
    Cards.push( `Thank you, ${names[i]}, for the wonderful ${message} gift!` )
  }
  return Cards
}
//invokes console.log once for each number, counting down from the number provided to zero
10

function countDown(){
    let numCountdown=11;
    while(numCountdown--){
      console.log(numCountdown)
    }
  } 
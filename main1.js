function guessgame() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let x = Math.floor(Math.random() * 10);

  readline.question("Enter Your number\t", (num) => {
    console.log(`The number is ${x}`);

    readline.close;

    if (x === num) {
      console.log("You win!!!");
    } else {
      console.log("Try Again!");
      process.exit(1)
    }
  });
}

guessgame();

//Temperature Converter

function kelvintoCel(k){
  let celcius = k-273;
  return console.log(celcius);
}
function kelvintofar(k){
  let far = 1.8*(k-273) + 32.;
  return console.log(far);
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
readline.question('Enter the temperature in kelvin:\t',(k)=>{
      console.log(`Temperature is ${k}`)
      kelvintoCel(k);
      kelvintofar(k);
      readline.close()

})
 // Fortune Telling Game

 const userName = 'Jane';
 userName ?console.log(`Hello,${userName}!`):console.log(`Hello!`);
 let userQuestion ='What is my fortune today?'
 console.log(`${userName} asked ${userQuestion}`);
 
 let randomNumber = Math.floor(Math.random()*8)
 let eightBall = '';
 switch(randomNumber){
   case 0:
   eightBall = 'It is certain'
  // console.log('It is certain');
   break;
   case 1:
   eightBall = 'It is decidedly so'
   //console.log('It is decidedly so')
   break;
   case 2:
   eightBall = 'Reply hazy try again'
   //console.log('Reply hazy try again')
   break;
   case 3:
   eightBall = 'Cannot predict now'
   //console.log('Cannot predict now');
   break;
   case 4:
   eightBall = 'Do not count on it'
  // console.log('Do not count on it');
   break;
   case 5:
   eightBall = 'My source say no'
   //console.log('My source say no')
   break;
   case 6:
   eightBall = 'Outlook not so good'
   //console.log('Outlook not so good')
   break;
   case 7:
   eightBall = 'Signs point to yes'
   //console.log('Signs point to yes')
   break;
   }
 
 
 
 
   console.log(eightBall)
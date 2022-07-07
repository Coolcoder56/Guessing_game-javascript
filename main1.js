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

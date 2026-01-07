const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("\nEnter a number: \n", (answer) => {
  const a = Number(answer);

  if (Number.isNaN(a)) {
    console.log("Invalid number");
    rl.close();
    return;
  }

  if (a < 10) {
    console.log("a is less than 10");
  } else if (a === 10) {
    console.log("a is 10");
  } else {
    console.log("a is greater than 10");
  }

  switch (a) {
    case 10:
      console.log(true);
      break;
    case 20:
      console.log(false);
      break;
    case 9:
      console.log(false);
      break;
    default:
      console.log("No value here");
  }

  rl.close(); 
});

let iife = (function(){console.log("Azhar is here"); return 5})()
console.log(iife)
let a = function(a,b){
    if(true){
        return true
    }else{
        return false
    }
}
console.log(a(2,4))
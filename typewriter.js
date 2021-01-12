//typwriter.js

const sentence = "hello there from lighthouse labs";
//set letterdelay to 0 and have it add 50 ms each time it loops through to print out each letter separately
let letterDelay = 0;

for (const char of sentence) {
 
  setTimeout(() => {
    process.stdout.write(char);
  }, letterDelay);

  letterDelay += 50;
  
}

//for getting rid of same line output create another variable to stop it right after the last char is printed by adding 50 ms to it
let whenToStop = letterDelay + 50

setTimeout(() => {
  console.log();
}, whenToStop);







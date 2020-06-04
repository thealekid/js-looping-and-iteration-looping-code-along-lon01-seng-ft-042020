// Code your solutions in this file
const names = ["Adao", "Charlie", "Ioan"];
const celebration = ["Christmas"];

function writeCards(names, celebration) {
    let Messages  = []
    for (let i = 0; i < names.length; i++) {
    Messages.push (`Thank you, ${names[i]}, for the wonderful ${celebration} gift!`);
}
return Messages
}

function countDown(number) {
 while (number > 0) {
     console.log(number);
     number -= 1;
 }
console.log(number);
}

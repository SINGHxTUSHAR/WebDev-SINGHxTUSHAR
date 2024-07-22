let maximum = parseInt(prompt("Enter maximum num!!"));
while(!maximum){
    maximum = parseInt(prompt("Enter a valid num"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
let attempt = 1;
// console.log(targetNum);

let guess = prompt("make your guess !! or press 'q' to quit the game");
while(parseInt(guess) !== targetNum){

    if(guess === 'q') break;
    guess = parseInt(guess);
    if(guess > targetNum){
        guess = prompt('too high!! make another guess');
        attempt++;
    }else if(guess <targetNum){
        guess = promp('too low!! make another guess');
        attempt++;
    }else{
        guess = prompt("Invalid guess. please enter a valid num or 'q' to quit the game.");
    }
}
if(guess === 'q') console.log('you quit');
else{
    console.log(`congrats you win!! it took you ${attempt} guesses`);
}
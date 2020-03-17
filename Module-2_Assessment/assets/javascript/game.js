// Create an array of words
var word = [ 
	"April",
	"breeze",
	"showers",
	"birds",
	"rainbow",
	"kite",
	"bunny",
	"umbrella",
	"baseball",
	"sunshine",
	"eggs",
	"tulips",
	"lamb",
	"caterpillar",
	"blooms",
    ];

// Choose random word
let randNum= Math.floor(Math.random() * word.length );
let choosenWord = word[randNum];
let rightguess = []
let wrongguess= []
console.log(choosenWord); 
let underScore = [];


//Game conditions
console.log(choosenWord);
// Create underscores based on length of word
let generateUnderscore = () => {
    for (let i = 0; i < choosenWord.length; i++) {
        underScore.push("_");
    } 
    return underScore;
}
console.log(generateUnderscore());
// Get guess from the user
document.addEventListener("keypress",(event) => {
    let keyword = String.fromCharCode(event.keyCode);
    if(keycode.object(choosenWord) > -1) {
        console.log(true);
        
    }

    

});;

// Show the player progress
// Update the game state with the guess
// Check if guess is right
// If right push to the right array
// If wrong push to wrong array
   
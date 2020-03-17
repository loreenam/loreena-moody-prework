// Create an array of words
const word = [ 
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
let chosenWord = word[randNum];
let rightword = []
let wrongword = []
console.log(chosenWord); 

let underScore = [];


//Game conditions
console.log(chosenWord);
// Create underscores based on length of word
let generateUnderscore = () => {
    for (let i = 0; i < chosenWord.length; i++) {
        underScore.push("_");
    } 
    return underScore;
}
console.log(generateUnderscore());
// Get guess from the user
document.addEventListener("keypress",(event) => {
    let keycode = event.keyCode;
    let keyword = String.fromCharCode(keycode);

    if(chosenWord.indexOf(keyword)> -1) {
      //add to right words array
        rightword.push(keyword);
        console.log(right);
        wrongword.push(left);
    }

});;

// Show the player progress
// Update the game state with the guess
// Check if guess is right
// If right push to the right array
// If wrong push to wrong array
   
var listOfPlaces=["usa","africa","russia","greece","mexico","china","italy","swiss"];
// randomly pick a word from array

var randomPlace= listOfPlaces[Math.floor(Math.random() * listOfPlaces.length)];
console.log("randomPlace: " + randomPlace);


var begin;
var began;
var lifeCounter=10;
var guessedLetters=[];
var userKeyHistory=[];

function beginGame(){
		for (var i=0; i< randomPlace.length; i++) {
			guessedLetters[i] = "_";
		}

		begin = guessedLetters.join(" "); // joins all letters into word
		document.getElementById("display").innerHTML = begin;


		}
		
	$(document).ready(function() {
	    beginGame();
	});


// initialize a set of words to play
//$(document).keyup(function(event){
	$(document).keypress(function(event){

	// when page is ready, begin game;



	if ((event.which >=65 && event.which <=90) || 
		(event.which >=97 && event.which <=122) ) {
		var userKeyValid=true;
		var userKey = event.key;
		console.log("userKey: "+userKey);
		console.log("userKeyValid: " + userKeyValid );
		letters();

	}



	



	function letters() {

		if (userKey.length > 0 && userKeyValid && lifeCounter>=0) {
			for (var i=0; i<randomPlace.length;i++){
				if (randomPlace[i] === userKey) {
					guessedLetters[i]= userKey;
				}
			}


			if (userKeyHistory.includes(userKey)===false){
				userKeyHistory.push(userKey);
				document.getElementById("wrongGuesses").innerHTML = "you have guessed: " + userKeyHistory;

			}

		began = guessedLetters.join(" ");
		lifeCounter--;
		document.getElementById("display").innerHTML = began;
		document.getElementById("life").innerHTML = "you have " + lifeCounter + " lives left";
			//document.getElementById("display").innerHTML = guessedLetters.join(" ");
		}

		if (lifeCounter===0)
		{
			document.getElementById("gameOver").innerHTML = "game over! it was " + randomPlace + " !";
			randomPlace= listOfPlaces[Math.floor(Math.random() * listOfPlaces.length)];
		}

		if (lifeCounter<=-1){
			beginGame();
			console.log("newword"+randomPlace);
			lifeCounter=10;
			userKeyHistory=[];
			document.getElementById("life").innerHTML = "you have " + lifeCounter + " lives left";
			document.getElementById("gameOver").innerHTML = " ";
		}


	}




});

//});




// if key matches with a letter, show letter 
// if key doest match with a letter, decrement guess count 
// show wrong letter

// at the end of the game, refresh with new word
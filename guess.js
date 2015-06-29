/*
Create a game that randomly generates a number or word for the player to guess. The game should start over When the player guesses wrong.

1. the player recieves the scenario/rules
2. the player is presented with a description and needs to be able to fill in their answer.
3. the players input is checked against the answer.
4. the answer is deemed correct or not.
the game asks if the player would like the try again.
*/

// Guess a number

var answer = Math.floor(Math.random() * (10-1+1))

// Get player name and greet

var player = prompt("Your name: ")

var greeting = alert("Nice to meet you " + player ". Let's play a game.");

// Game Loop
var gameStart, guess;

// While the guess is not equal to answer ...
function gameStart (){
	while (guess !== answer) {
	
		// if the guess is too low, tell the player.
		if (guess < answer) {
			console.log("Too low!");
		} else if (guess > answer) {
			console.log("Too high!")
		} else {
			console.log("You won!")
	}
	
	console.log("Wanna play gain?")
	var playAgain = prompt("y/n")
	if (y){
		gameStart()
	} else {
		console.log("Bye!")
	}
	
}

gameStart()


//var playerName = "";
var player =
	{
		playerName: prompt("I am called Sky -- ...ler... What shall I call you?"),
		playerAnswer: ""
	};


var skyNet =
	{
		generate: Math.floor(Math.random() * (10-1+1))
	};

var synetMessage = alert;
var playerInput = prompt;
var continueGame = confirm;
//var playerAnswer = "";
//var playerName = prompt("I am called Sky -- ...ler... What shall I call you?");

if (player.playerName !== null) 
	{
	alert("Nice to meet you " + player.playerName + ". Let's play a game.");
		
	prompt("I'm thinking of a number, 0-10. Can you guess what it is?");
		
		//Broken. Allows both prompts the appear.
		/*if (player.playerAnswer !== skyNet.generate)
		{
			alert("Ha. Ha. Ha. You lose.");
		}
		
		else 
		{
			prompt("You guessed my number. Let's try another.");
		}
	}*/
		
		
		
		while (player.playerAnswer === skyNet.generate)
			{
				prompt("You guessed my number. Let's try another.");
			}
			
		if (player.playerAnswer !== skyNet.generate)
			{
				alert("Ha. Ha. Ha. You lose.");
			}
		
		confirm("play again?");
		
				if (onclick.apply)
					{
						prompt("OK, " + player.playerName + ". One more time. 0-10. Can you guess what it is?");
					}
	}
		
		/*if (player.playerAnswer !== skyNet.generate)
			{
				alert("Ha. Ha. Ha. You Lose!");
			}
		else if (player.playerAnswer === skyNet.generate)
		{
			prompt("Yes! Would you like to guess another?")
		}
	}*/



else if (player.playerName === null)
	{
		alert("*sadPanda* Perhaps another time then.");
	}
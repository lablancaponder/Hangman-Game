// words to choose from
var words = ["bootcamp", "denver", "boolean", "javascript", "html", "boostrap", "github", "jquery", "loop", "array", "consolelog", "jay", "coding", "computer", "frontend", "backend", "fullstack", "programming"];

// letters to choose from
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o","p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var youLost = "Sorry, you lost! The word is " + chosenWord;
var youWon = "Awesome! You won!!!";

// word chosen for the game
var chosenWord = "";

// number of letters in the word
var lettersInWord = [];

// number of blanks in word
var blanksInWord = 0;

// blanks and correct guesses
var blanksAndCorrectGuesses = [];

// wrong guesses
var wrongLetters = [ ];

//wins, losses and guesses left

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var correctGuesses = 0;

function reset ()
{
    letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o","p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // choose a random word    
    chosenWord = words[Math.floor(Math.random() * words.length)];

    // splits the word up into individual letters
    lettersInWord = chosenWord.split("");

    // sets number of blanks to how many letters are in the word
    blanksInWord = lettersInWord.length;

    //=============================RESET=================

    letterGuessed = 0;
    guessesLeft = 10;
    correctGuesses = 0;
    wrongLetters = [];
    blanksAndCorrectGuesses = [];
   
    // letters to choose from
   
        



    test = false;
    startGame();
}

    function startGame() {



    // choose a random word    
    chosenWord = words[Math.floor(Math.random() * words.length)];
    
        // splits the word up into individual letters
        lettersInWord = chosenWord.split("");
    
        // sets number of blanks to how many letters are in the word
        blanksInWord = lettersInWord.length;

        //========================RESET======================
    
        letterGuessed = 0;
        correctGuesses = 0;
        guessesLeft = 10;
        wrongLetters = [];
        blanksAndCorrectGuesses = [];
       
        // letters to choose from
       var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o","p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        
        // setup blanks

        for (var i = 0; i < blanksInWord; i++) {
         
            blanksAndCorrectGuesses.push("_");
            document.getElementById("wordToGuess").innerHTML = blanksAndCorrectGuesses;

        }
        


        // index.html

        document.getElementById("wordToGuess").innerHTML = blanksAndCorrectGuesses.join(" ");

        document.getElementById("guessesLeft").innerHTML = guessesLeft;

        document.getElementById("gamesWon").innerHTML = wins;

        document.getElementById("gamesLost").innerHTML = losses;

        document.getElementById("wrongGuesses").innerHTML = wrongLetters;

        // console.log

        console.log(chosenWord);
        console.log(lettersInWord);
        console.log(blanksInWord);
        console.log(blanksAndCorrectGuesses);
    
       
        }
        //----------------GOOD SO FAR--------------------------//

        function compareLetters(userKey)
        {

                console.log("working");

        // if users key is in word then do this
            if(chosenWord.indexOf(userKey) > -1)
            {

            //loops depending on number of blanks
            for (var i = 0; i < blanksInWord; i++)
            {
                if(lettersInWord[i] === userKey)
                {
    
                
                correctGuesses++;    
                blanksAndCorrectGuesses[i] = userKey;
                document.getElementById("wordToGuess").innerHTML = blanksAndCorrectGuesses.join(" ");
            }

        }

        //console.log

        console.log(blanksAndCorrectGuesses);
        }

        //Wrong letters
        else {

            wrongLetters.push(userKey);
            guessesLeft--;
            //HTML

            document.getElementById("guessesLeft").innerHTML = guessesLeft;

            document.getElementById("wrongGuesses").innerHTML = wrongLetters;

            //console.log

            console.log("Wrong Letters = " + wrongLetters);
            console.log("Guesses left = " + guessesLeft);
        }
    }

        function winLose()
        {
            if(correctGuesses === blanksInWord)
            {

            wins++;   
            
            setTimeout(function(){
                document.getElementById("gamewon").innerHTML=youWon;
                },1000);
                
            // trying to get this to reset the you won message ...
            // setTimeout(function(){document.getElementById("won").innerHTML();}, 3000);         
            
            
            document.getElementById("gamesWon").innerHTML = wins;
            
            
            // function fadeOutEffect()
            // {
            //  var fadeTarget = document.getElementById("gamewon");
            //  var fadeEffect = setInterval(function() {
            //   if (fadeTarget.style.opacity < 0.1)
            //   {
            //    clearInterval(fadeEffect);
            //   }
            //   else
            //   {
            //    fadeTarget.style.opacity -= 0.1;
            //   }
            //  }, 200);
            // }
            
       
            // document.getElementById("won").innerHTML = youWon;
            // var youWon = "Awesome! You won!!!";
            //  SEARCH SET TIME OUT FUNCTION
            reset();

        }

            else if(guessesLeft === 0)
            {
                losses++;
                setTimeout(function(){
                    document.getElementById("gamelost").innerHTML=youLost;
                    },1000);
                    
                document.getElementById("gamesLost").innterHTML = losses;
                // document.getElementById("lost").innerHTML = youLost;
                // var youLost = "Sorry, you lost! The word is " + chosenWord;
                
                reset();
            }
        }
    ///GAME

    startGame();
    // setTimeout(function(){
    //     document.getElementById("gamewon").innerHTML=[];
    //     },1000);

    document.onkeyup = function(event)
    {

        test = true;
        var letterGuessed = event.key;
        for(var i = 0; i < letters.length; i++)
        {
            if(letterGuessed === letters[i] && test === true)
            {

                var splicedWord = letters.splice( i , 1 );

                //console.log
                console.log("Word is = " + letters[i])
                console.log("Spliced Word is = " + splicedWord);

                compareLetters(letterGuessed);
                winLose();
            }
        }

    }


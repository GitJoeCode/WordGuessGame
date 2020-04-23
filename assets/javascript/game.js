var reset = function() {
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var guesses = [];
    var answer = [];
    var attempts = 12;
    var unknowns = 0;

    newAnswer();
    newWord();
    newOptions();
    newGuesses();
    newAttempts();

    var display = "<h1>The Leonardo DiCaprio Hangman Game</h1>" +
    "<p>Press any key to begin Playing!</p>" +
    "<p>Wins " + wins + "</p>" +
    "<p>Losses " + losses + "</p>" +
    "<p>Current Word</p>" +
    "<p>" + answer.join(' ') + "</p>" +
    "<p>Number of Guesses Remaining</p>" + 
    "<p>" + attempts + "</p>" +
    "<p>Your Guesses so far</p>" + 
    "<p>" + guesses + "</p>";
    
    document.querySelector('#game').innerHTML = display;
};

var newWord = function() {
    numberWord = Math.floor(Math.random() * this.words.length);
    this.mysteryWord = this.words[numberWord];
    wordLength = mysteryWord.length;
    for(i=0; i<wordLength; i++) {
        answer.push("_");
    }
};

var newOptions = function() {
    this.options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
};

var newGuesses = function() {
    this.guesses = [];
}

var newAttempts = function() {
    this.attempts = 12;
}

var newAnswer = function() {
    this.answer = [];
}

var songs = {
    onceUponATimeInHollywood: "sixties",
    theRevenant: "grizzly",
    wolfOnWallStreet: "stockbroker",
    theGreatGatsby: "daisy",
    djangoUnchained: "slave",
    jEdgar: "bureau",
    inception: "dream",
    shutterIsland: "schizophrenic",
    revolutionRoad: "suburb",
    bodyOfLies: "jordan",
    bloodDiamond: "africa",
    theDeparted: "undercover",
    theAviator: "pilot",
    catchMeIfYouCan: "imposter",
    gangsOfNewYork: "revenge",
    theBeach: "map",
    titanic: "iceberg",
    marvinsRoom: "nephew",
    RomeoAndJuliet: "shakespeare",
    whatsEatingGilbertGrape: "fruit",
}

    var wins = 0;
    var losses = 0;
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var words = ["sixties", "grizzly", "stockbroker", "daisy", "slave", "bureau", "dream", "schizophrenic", "suburb", "jordan", "africa", "undercover", "pilot", "imposter", "revenge", "map", "iceberg", "nephew", "shakespeare", "fruit"];
    var answer = [];
    var guesses = [];
    var attempts = 12;
    var mysteryWord = null;
    var numberWord = 0;
    var wordLength = 0;
    var letter = null;
    var unknowns = 0;
    newWord();
    newOptions();
    newGuesses();
    newAttempts();
    reset();

    document.onkeyup = function() {
    var userGuess = String.fromCharCode(event.keyCode).
        toLowerCase();

    console.log(userGuess);
    console.log(mysteryWord);
    console.log(unknowns);

    if(attempts>1) {
        if(options.includes(userGuess)) {
            letter = options.indexOf(userGuess);
            if(mysteryWord.includes(userGuess)) {
               
                for (var i = 0; i < mysteryWord.length; i++) {
                    if(userGuess == mysteryWord[i]) {
                        answer.splice(i, 1, userGuess);
                        if(answer.includes("_")) {
                            
                        }
                        else {
                            wins ++;
                            reset();
                            break;
                        }
                    }
            
                }
            }
            else {
                if(userGuess == options[letter]) {
                    guesses.push(options[letter]);
                    options.splice(letter, 1);
                    console.log(options);
                    attempts --;
                }
            }
                
        }
        else {
            
        }
    }
    else {
        losses ++;
        reset();
    }

    var display = "<h1>The Leonardo DiCaprio Hangman Game</h1>" +
    "<p>Press any key to begin Playing!</p>" +
    "<p>Wins " + wins + "</p>" +
    "<p>Losses " + losses + "</p>" +
    "<p>Current Word</p>" +
    "<p>" + answer.join(' ') + "</p>" +
    "<p>Number of Guesses Remaining</p>" + 
    "<p>" + attempts + "</p>" +
    "<p>Your Guesses so far</p>" + 
    "<p>" + guesses + "</p>";

    document.querySelector('#game').innerHTML = display;
    }
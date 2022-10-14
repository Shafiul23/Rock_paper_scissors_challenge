# RPS Challenge

The Rock, Paper, Scissors challenge was to create a webpage that would allow users to engage in the classic game. After signing up with a name, the user picks an option and goes up against the computer. This test-driven task required the use of back-end code and platforms like Express to make post / get requests to the host. One interesting challenge to solve in this task was how to get the game logic as concise as possible, especially in the extended version of the game: rock, paper, scissors, lizard, Spock. This is present in the `rps.js` file where the game logic was condensed from over 50 lines to just 11 lines of code. 


## Instructions

- Clone the repo to local machine
- Open package.json in terminal and install dependencies using `npm i`
- Once packages are installed, use `npm start` to run the game on localhost
- Input name into text box
- Choose one of the 5 options
- The computer will also make a choice, the winner will be displayed at the top of the page!
- Click New Game!

Task
----

The DFA team ( **DFAT** ) have asked you to provide a game for them. The daily grind is pretty tough and they need time to have a little fun.

As usual please start by

* Forking this repo
* TEST driving development of your app

Your task is to provide a _Rock, Paper, Scissors_ game for them so they can play on the web with the following user stories:

### Acceptance Criteria
```
As a DFAT member
So that I can see my name
I would like to register my name before playing an online game

As a DFAT member
So that I can enjoy myself away from the daily grind
I would like to be able to play rock/paper/scissors
```

Hints on functionality

- the DFAT member should be able to enter their name before the game
- the DFAT member will be presented the choices (rock, paper and scissors)
- the DFAT member can choose one option
- the game will choose a random option
- a winner will be declared

## Basic Rules

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock

In code review we'll be hoping to see:

* All tests passing
* High test coverage
* The code is elegant: every class has a clear responsibility, methods are short etc.

### Extended Acceptance Criteria

#### Rock, Paper, Scissors, Spock, Lizard

Use the _special_ rules ( _you can find them here http://en.wikipedia.org/wiki/Rock-paper-scissors-lizard-Spock_ )

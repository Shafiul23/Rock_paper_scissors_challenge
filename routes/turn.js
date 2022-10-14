const express = require('express');
const router = express.Router();
const Rps = require('../src/rps')

router.post('/', (req, res) => {
    const choice = req.body.choice;
    req.app.locals.choice = choice;
    res.redirect('/turn')
});

router.get('/', (req, res) => {
    const playerOneChoice = req.app.locals.choice;
    const rpsArray = ['rock', 'paper', 'scissor', 'lizard', 'spock'];
    const computerChoice = rpsArray[Math.floor(Math.random() * rpsArray.length)];

    res.render('turn', {
        userOption: playerOneChoice,
        compChoice: computerChoice,
        decider: Rps(playerOneChoice, computerChoice)
    });
});

module.exports = router;
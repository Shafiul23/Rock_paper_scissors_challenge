const Rps = (playerOneChoice, computerChoice) => {
    if (playerOneChoice === computerChoice) {
        return "It's a draw! Try again"
    } return (
        (
            playerOneChoice === "rock" && computerChoice === "scissors" ||
            playerOneChoice === "rock" && computerChoice === "lizard" ||
            playerOneChoice === "paper" && computerChoice === "rock" ||
            playerOneChoice === "paper" && computerChoice === "spock" ||
            playerOneChoice === "scissors" && computerChoice === "paper" ||
            playerOneChoice === "scissors" && computerChoice === "lizard" ||
            playerOneChoice === "lizard" && computerChoice === "spock" ||
            playerOneChoice === "lizard" && computerChoice === "paper" ||
            playerOneChoice === "spock" && computerChoice === "rock" ||
            playerOneChoice === "spock" && computerChoice === "scissors"
        ) ?
            `You are the winner!` : `Computer wins :(`)
};


module.exports = Rps;
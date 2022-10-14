const chai = require('chai');
const expect = require('chai').expect;

const Rps = require('../src/rps')

describe("rock, paper, scissors, lizard spock", () => {

    it('should say that playerOneChoice wins for rock vs. scissors', () => {
        const playerOneChoice = "rock";
        const computerChoice = "scissors";

        const outcome = Rps(playerOneChoice, computerChoice);

        expect(outcome).to.equal(`You are the winner!`);
    });

    it('should say that playerOneChoice wins for rock vs. lizard', () => {
        const playerOneChoice = "rock";
        const computerChoice = "lizard";

        const outcome = Rps(playerOneChoice, computerChoice);

        expect(outcome).to.equal(`You are the winner!`);
    });

    it('should say playerOneChoice wins for paper vs. rock', () => {
        const playerOneChoice = "paper";
        const computerChoice = "rock";

        const outcome = Rps(playerOneChoice, computerChoice);

        expect(outcome).to.equal(`You are the winner!`);
    });

    it('should say that playerOneChoice wins for paper vs. spock', () => {
        const playerOneChoice = "paper";
        const computerChoice = "spock";

        const outcome = Rps(playerOneChoice, computerChoice);

        expect(outcome).to.equal(`You are the winner!`);
    });

    it('should say playerOneChoice wins for scissors vs. paper', () => {
        const playerOneChoice = "scissors";
        const computerChoice = "paper";

        const outcome = Rps(playerOneChoice, computerChoice);

        expect(outcome).to.equal(`You are the winner!`)
    });

    it('should say playerOneChoice wins for scissors vs. lizard', () => {
        const playerOneChoice = "scissors";
        const computerChoice = "lizard";

        const outcome = Rps(playerOneChoice, computerChoice);

        expect(outcome).to.equal(`You are the winner!`)
    });

    it('should say playerOneChoice wins for lizard vs. spock', () => {
        const playerOneChoice = "lizard";
        const computerChoice = "spock";

        const outcome = Rps(playerOneChoice, computerChoice);

        expect(outcome).to.equal(`You are the winner!`)
    });

    it('should say playerOneChoice wins for lizard vs. paper', () => {
        const playerOneChoice = "lizard";
        const computerChoice = "paper";

        const outcome = Rps(playerOneChoice, computerChoice);

        expect(outcome).to.equal(`You are the winner!`)
    });

    it('should say playerOneChoice wins for spock vs. scissors', () => {
        const playerOneChoice = "spock";
        const computerChoice = "scissors";

        const outcome = Rps(playerOneChoice, computerChoice);

        expect(outcome).to.equal(`You are the winner!`)
    });

    it('should say playerOneChoice wins for spock vs. rock', () => {
        const playerOneChoice = "spock";
        const computerChoice = "rock";

        const outcome = Rps(playerOneChoice, computerChoice);

        expect(outcome).to.equal(`You are the winner!`)
    });

    it('should say computerChoice wins for scissors vs. rock', () => {
        const playerOneChoice = "scissors";
        const computerChoice = "rock";

        const outcome = Rps(playerOneChoice, computerChoice);

        expect(outcome).to.equal(`Computer wins :(`);
    });

    it('should say computerChoice wins for rock vs papper', () => {
        const playerOneChoice = "rock";
        const computerChoice = "paper";

        const outcome = Rps(playerOneChoice, computerChoice);

        expect(outcome).to.equal(`Computer wins :(`);
    });

    it('should say computerChoice wins for paper vs scissors', () => {
        const playerOneChoice = "paper";
        const computerChoice = "scissors";

        const outcome = Rps(playerOneChoice, computerChoice);

        expect(outcome).to.equal(`Computer wins :(`);
    });

    ["rock", "paper", "scissors"].forEach((both) => {
        it(`should say draw for ${both} vs. ${both}`, () => {
            expect(Rps(both, both)).to.equal("It's a draw! Try again")
        });
    });
});
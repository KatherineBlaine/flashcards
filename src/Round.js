
const Turn = require('../src/Turn.js');

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
        this.currentCard = this.deck.cards[0];
        this.incorrectGuesses = [];
        this.correctGuesses = 0;
    }

    returnCurrentCard() {
        return this.currentCard;
    }

    takeTurn(userGuess) {
        this.newTurn = new Turn(userGuess, this.currentCard);
        this.turns += 1;
        this.feedback = this.newTurn.giveFeedback(this.currentCard);
        if (!this.newTurn.evaluateGuess(this.currentCard)) {
            this.incorrectGuesses.push(this.currentCard.id)
        } else {
            this.correctGuesses +=1;
        }
        this.currentCard = this.deck.cards[`${this.turns}`];
        return this.feedback;
    }

    calculatePercentCorrect() {
        let totalGuesses = this.correctGuesses + this.incorrectGuesses.length;
        let score = this.correctGuesses / totalGuesses;
        return Math.round(score * 100);
    }

    endRound() {
        let message =  `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
        console.log(message)
        return message;
    }
}

module.exports = Round;
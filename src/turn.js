
class Turn {
    constructor(userGuess, card) {
        this.userGuess = userGuess;
        this.card = card;
    }

    returnGuess() {
        return this.userGuess;
    }

    returnCard() {
        return this.card;
    }

    evaluateGuess(card) {
        return this.userGuess === card.correctAnswer;
    }

    giveFeedback(card) {
        if (this.evaluateGuess(card)) {
            return 'correct!'
        } else if (!this.evaluateGuess(card)){
            return 'incorrect!'
        }
    }
}

module.exports = Turn;
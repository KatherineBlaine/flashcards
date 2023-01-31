class Turn {
    constructor(userGuess, currentCard) {
        this.userGuess = userGuess;
        this.currentCard = currentCard;
    }

    returnGuess() {
        return this.userGuess;
    }

    returnCard() {
        return this.currentCard;
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
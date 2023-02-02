const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Game {
  constructor() {
    this.currentRound = 'No round has started yet!'
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    this.cards = prototypeQuestions.map(element => new Card(element))
    const deck = new Deck(this.cards);
    this.currentRound = new Round(deck);
    this.printMessage(deck)
    this.printQuestion(this.currentRound)
  }

  test1() {
    return this.cards = prototypeQuestions.map(element => new Card(element))
  }

  test2() {
    return this.deck = new Deck(this.cards)
  }

  test3() {
    return this.currentRound = new Round(this.deck);
  }

}

module.exports = Game;
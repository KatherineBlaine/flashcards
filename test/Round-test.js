const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn.js');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Round', () => {
    let card1, card2, card3, deck, round;
    beforeEach(() => {
        card1 = new Card(prototypeQuestions[0]);
        card2 = new Card(prototypeQuestions[1]);
        card3 = new Card(prototypeQuestions[2]);
        deck = new Deck([card1, card2, card3]);
        round = new Round(deck);
    })

    it('should be a function', () => {
        expect(Round).to.be.a('function');
    })

    it('should be an instance of the Round class', () => {
        expect(round).to.be.an.instanceOf(Round)
    })

    it('should be able to find the current card being played', () => {
        expect(round.returnCurrentCard()).to.deep.equal(card1)
    })

    it('should be able to update the turn count', () => {
        round.takeTurn()
        expect(round.turns).to.equal(1);
    })

    it('should be able to create a new instance of the Turn class', () => {
        round.takeTurn(new Turn);
        expect(round.newTurn).to.be.an.instanceOf(Turn);
    })

    it('should be able to update the turns count', () => {
        expect(round.turns).to.equal(0);

        round.takeTurn();

        expect(round.turns).to.equal(1);
    })

    it('should be able to update the current card after each turn', () => {
        expect(round.returnCurrentCard()).to.deep.equal(card1)

        round.takeTurn();

        expect(round.returnCurrentCard()).to.deep.equal(card2)

        round.takeTurn();

        expect(round.returnCurrentCard()).to.deep.equal(card3);
    })

    it('should be able to evaluate and record whether or not a guess is correct', () => {
        expect(round.takeTurn('object')).to.equal('correct!')
        expect(round.takeTurn('function')).to.equal('incorrect!')
    })

    it('should be able to store incorrect guesses into an array', () => {
        round.takeTurn('array');
        round.takeTurn('array')
        expect(round.incorrectGuesses).to.deep.equal([1])
        expect(round.correctGuesses).to.equal(1)
    })

    it('should be able to calculate the percentage of correct answers', () => {
        round.takeTurn('object')
        round.takeTurn('object')
        round.takeTurn('mutator method')

        expect(round.incorrectGuesses.length).to.equal(1);
        expect(round.correctGuesses).to.equal(2)

        expect(round.calculatePercentCorrect()).to.equal(67)
    })

    it('should be able to print a message with the users score to the console', () => {
        round.takeTurn('object')
        round.takeTurn('object')
        round.takeTurn('mutator method')

        expect(round.endRound()).to.equal('** Round over! ** You answered 67% of the questions correctly!')
    })

})
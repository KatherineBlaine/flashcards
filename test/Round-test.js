const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn.js')

describe('Round', () => {
    let card1;
    let card2;
    let card3;
    let deck;
    let round;
    beforeEach(() => {
        card1 = new Card(5, 'Whats KBs favorite animal?', ['elephant', 'dolphin', 'giraffe'], 'giraffe');
        card2 = new Card(4, 'What is the capital of Minnesota?', ['Minneapolis', 'St. Paul', 'Rochester'], 'St. Paul');
        card3 = new Card(10, 'What is the biggest ski resort in America?', ['Vail', 'Breckenridge', 'Park City'], 'Park City');
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
        expect(round.takeTurn('giraffe')).to.equal('correct!')
        expect(round.takeTurn('Minneapolis')).to.equal('incorrect!')
    })

    it('should be able to store incorrect guesses into an array', () => {
        round.takeTurn('elephant');
        round.takeTurn('St. Paul')
        expect(round.incorrectGuesses).to.deep.equal([5])
        expect(round.correctGuesses).to.equal(1)
    })

    it('should be able to calculate the percentage of correct answers', () => {
        round.takeTurn('giraffe')
        round.takeTurn('Minneapolis')
        round.takeTurn('Park City')

        expect(round.incorrectGuesses.length).to.equal(1);
        expect(round.correctGuesses).to.equal(2)

        expect(round.calculatePercentCorrect()).to.equal(67)
    })

    it('should be able to print a message with the users score to the console', () => {
        round.takeTurn('giraffe')
        round.takeTurn('Minneapolis')
        round.takeTurn('Park City')

        expect(round.endRound()).to.equal('** Round over! ** You answered 67% of the questions correctly!')
    })

})
const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Deck = require('../src/Deck');
const Card = require('../src/Card.js');

describe('Deck', () => {
    let card1, card2, card3, deck;
    beforeEach(() => {
        card1 = new Card(prototypeQuestions[0]);
        card2 = new Card(prototypeQuestions[1]);
        card3 = new Card(prototypeQuestions[2]);
        deck = new Deck([card1, card2, card3]);
    })

    it('should be a function', () => {
        expect(Deck).to.be.a('function');
    })

    it('should be an instance of the Deck class', () => {
        expect(deck).to.be.an.instanceOf(Deck);
    })

    it('should be able to count how many cards in the deck', () => {
        expect(deck.countCards()).to.equal(3);
    })
})
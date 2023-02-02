const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card.js');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Deck', () => {
    let card1, card2, card3, deck;
    beforeEach(() => {
        card1 = new Card(5, 'Whats KBs favorite animal?', ['elephant', 'dolphin', 'giraffe'], 'giraffe');
        card2 = new Card(4, 'What is the capital of Minnesota?' ['Minneapolis', 'St. Paul', 'Rochester'], 'St. Paul');
        card3 = new Card(10, 'What is the biggest ski resort in America?', ['Vail', 'Breckenridge', 'Park City'], 'Park City');
        deck = new Deck([card1, card2, card3]);
    })

    it('should be a function', () => {
        expect(Deck).to.be.a('function')
    })

    it('should be an instance of the Deck class', () => {
        expect(deck).to.be.an.instanceOf(Deck);
    })

    it('should be able to count how many cards in the deck', () => {
        expect(deck.countCards()).to.equal(3);
    })
})
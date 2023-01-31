const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Round', () => {
    let card1;
    let card2;
    let card3;
    let deck;
    let round;
    beforeEach(() => {
        card1 = new Card(5, 'Whats KBs favorite animal?', ['elephant', 'dolphin', 'giraffe'], 'giraffe');
        card2 = new Card(4, 'What is the capital of Minnesota?' ['Minneapolis', 'St. Paul', 'Rochester'], 'St. Paul');
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
        expect(round.returnCurrentCard()).to.equal(card1)
    })
})
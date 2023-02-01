const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Turn', () => {
    let card;
    let turn;
    let turn2;
    beforeEach(() => {
        card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        turn = new Turn('no', card);
        turn2 = new Turn('object', card);
    })

it('should be a function', () => {
    expect(Turn).to.be.a('function');
})
    
it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceOf(Turn);
})
    
it('should be able to take a user guess as an argument', () => {
    expect(turn.userGuess).to.equal('no')
})
    
it('should be able to take an instance of Card as an argument', () => {
    expect(turn.card).to.be.an.instanceOf(Card)
})

it('should be able to return a users guess', () => {
   expect(turn.returnGuess()).to.equal('no')
})

it('should be able to return the current card', () => {
    expect(turn.returnCard()).to.equal(card);
})

it('should be able to evaluate whether or not the users guess is correct', () => {
    expect(turn.evaluateGuess(card)).to.equal(false);
    expect(turn2.evaluateGuess(card)).to.equal(true);
})

it('should be able to give feedback to the user based on their guess', () => {
    expect(turn.giveFeedback(card)).to.equal('incorrect!')
    expect(turn2.giveFeedback(card)).to.equal('correct!')
})

})

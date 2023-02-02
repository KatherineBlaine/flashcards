const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Game = require('../src/Game.js')
const Card = require('../src/Card.js')
const Deck = require('../src/Deck');
const Round = require('../src/Round');


describe('game', () => {
    let game1, card1;
    beforeEach(() => {
        game1 = new Game();
        card1 = new Card(prototypeQuestions[0]);
        game1.test1();
        game1.test2();
        game1.test3();
    })
    
    it('should be able to keep track of the currentRound', () => {
        expect(game1.currentRound).to.deep.equal(new Round(game1.deck));
    });

    it('should be able to create instance of Card', () => {
        expect(game1.cards[0]).to.be.an.instanceOf(Card);
        expect(game1.cards[0]).to.deep.equal(card1);
        expect(game1.cards).to.deep.equal(prototypeQuestions);
    })

    it('should be able to create a new instance of Deck using an array of Cards', () => {
        expect(game1.deck).to.be.an.instanceOf(Deck);
        expect(game1.cards).to.be.an('array');
        expect(game1.test1()).to.deep.equal(prototypeQuestions);
        expect(game1.deck).to.deep.equal(new Deck(prototypeQuestions));
        expect(game1.deck.countCards()).to.equal(30);
    })


    it('should be able to create a new instance of Round using the an instance of Deck', () => {
        expect(game1.currentRound).to.deep.equal(new Round(game1.deck))
        expect(game1.currentRound.currentCard).to.deep.equal(card1)
    })

    it('should be able to take in and evaluate user guesses', () => {
        let game1Feedback = game1.currentRound.takeTurn('array');

        expect(game1Feedback).to.equal('incorrect!')
        expect(game1.currentRound.takeTurn('array')).to.equal('correct!')
        expect(game1.currentRound.takeTurn('mutator method')).to.equal('correct!')

    })

    it('should be able to return a users guess', () => {
        game1.currentRound.takeTurn('House')

        expect(game1.currentRound.newTurn.returnGuess()).to.equal('House');
        expect(game1.currentRound.newTurn.returnCard()).to.be.an.instanceOf(Card);

    })

    it('should be able to update the amount of correct and incorrect guesses', () => {
        expect(game1.currentRound.incorrectGuesses).to.deep.equal([])
        expect(game1.currentRound.correctGuesses).to.equal(0)

       game1.currentRound.takeTurn('array');
       game1.currentRound.takeTurn('array');

       expect(game1.currentRound.incorrectGuesses).to.deep.equal([1]);
       expect(game1.currentRound.correctGuesses).to.equal(1);
    })

    it('should be able to update the turn count', () => {
        expect(game1.currentRound.turns).to.equal(0);

        game1.currentRound.takeTurn('array');

        expect(game1.currentRound.turns).to.equal(1);
    })

    it('should be able to return the current card being played and update after each turn', () => {
        expect(game1.currentRound.currentCard).to.deep.equal(prototypeQuestions[0]);

        game1.currentRound.takeTurn('array');

        expect(game1.currentRound.currentCard).to.deep.equal(prototypeQuestions[1]);

    })

    it('should be able to calculate the user score and display it in a message', () => {
        game1.currentRound.takeTurn('object');

        expect(game1.currentRound.calculatePercentCorrect()).to.equal(100);
        expect(game1.currentRound.endRound()).to.equal('** Round over! ** You answered 100% of the questions correctly!');
    })
})

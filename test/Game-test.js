const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const Game = require('../src/Game.js')
const Card = require('../src/Card.js')
const Deck = require('../src/Deck');
const Round = require('../src/Round');


describe('game', () => {
    it('should be able to keep track of the currentRound', () => {
        let game1 = new Game();

        expect(game1.currentRound).to.equal('No round has started yet!')
    });

    it('should be able to create instance of Card', () => {
        let game1 = new Game();
        let card1 = new Card(data.prototypeData[0])


        expect(game1.test1()[0]).to.deep.equal(card1)
        expect(game1.test1()).to.deep.equal(prototypeQuestions);
        expect(game1.cards).to.be.an('array')
        expect(game1.cards[0]).to.be.an.instanceOf(Card)
        expect(game1.cards[0].id).to.equal(1)
        expect(game1.cards[0].correctAnswer).to.equal('object')
        expect(game1.cards).to.deep.equal(prototypeQuestions)
    })

    it('should be able to create a new instance of Deck using instances of Card', () => {
        let game1 = new Game();
    
        game1.test1()
        game1.test2()
        
        expect(game1.deck).to.be.an.instanceOf(Deck);
        expect(game1.deck).to.deep.equal(new Deck(prototypeQuestions))
        expect(game1.deck.countCards()).to.equal(30);
    })


    it('should be able to create a new instance of Round using the an instance of Deck', () => {
        let game1 = new Game();
        let card1 = new Card(prototypeQuestions[0])

        game1.test1()
        game1.test2()
        game1.test3()

        expect(game1.currentRound).to.deep.equal(new Round(game1.deck))
        expect(game1.currentRound.currentCard).to.deep.equal(card1)
    })

    it('should be able to take in and evaluate user guesses', () => {
        let game1 = new Game();
        game1.test1()
        game1.test2()
        game1.test3()

        let game1Feedback = game1.currentRound.takeTurn('array')

        expect(game1Feedback).to.equal('incorrect!')
        expect(game1.currentRound.currentCard).to.deep.equal(prototypeQuestions[1])
        expect(game1.currentRound.takeTurn('array')).to.equal('correct!')
        expect(game1.currentRound.takeTurn('mutator method')).to.equal('correct!')
        expect(game1.currentRound.incorrectGuesses).to.deep.equal([1])
        expect(game1.currentRound.correctGuesses).to.equal(2)
        expect(game1.currentRound.turns).to.equal(3)
        expect(game1.currentRound.calculatePercentCorrect()).to.equal(67)
        expect(game1.currentRound.endRound()).to.equal('** Round over! ** You answered 67% of the questions correctly!')
        expect(game1.currentRound.newTurn.returnGuess()).to.equal('mutator method')
        
        game1.currentRound.takeTurn('House')

        expect(game1.currentRound.newTurn.returnGuess()).to.equal('House')
        expect(game1.currentRound.newTurn.returnCard()).to.be.an.instanceOf(Card);
        expect(game1.currentRound.newTurn.returnCard()).to.deep.equal(prototypeQuestions[3]);
    })
})

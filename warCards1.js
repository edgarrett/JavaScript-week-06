// Deck of Cards
// Create the suits array and the ranks array
// Loop thru the suits array 4 times
// Loop thru the ranks array 13 times

  var playerOne = [];
  var playerTwo = [];
  var scoreP1 = 0;
  var scoreP2 = 0;


class mydeck {
  constructor (suits, ranks, values) {
    this.suits = suits;
    this.ranks = ranks;
    this.values = values;
    this.deck = deck;
  }
}

  function createDeck() {

  var suits = ['H','C','D','S'];
  var ranks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
  var values = ['2','3','4','5','6','7','8','9','10','11','12','13','14'];
  var deck = [];

// Combine the cards and save them into a deck
  for (var suitCounter = 0; suitCounter < 4; suitCounter++) {
//  console.log(suits[suitCounter]);
  for (var rankCounter = 0; rankCounter < 13; rankCounter++) {
// console.log(ranks[rankCounter] + suits[suitCounter]);

    deck.push(ranks[rankCounter] + suits[suitCounter]);
  }
}
  return deck;
}

// Shufle deck. Display shuffle deck; 
// used the "Math.random() * 52;" (random numbers will be 1 to 52)

  function shuffleDeck(deck) {
  for (var i = 0; i < 52; i++) {
  var tempCard = deck[i];
  var randomIndex = Math.floor(Math.random() * 52);
  deck[i] = deck[randomIndex];
  deck[randomIndex] = tempCard;
}
// split the shuffled deck between two players
  playerOne = deck.slice(0, 26);
  playerTwo = deck.slice(26, 52);
// console.log(playerOne.length);
// console.log(playerTwo.length);

//write an if else statement inside the for loop to determine winners.
  for (var i = 0; i < 26; i++) {
    let currentCardP1 = playerOne[i].slice(0, playerOne[i].length - 1)
    let currentCardP2 = playerTwo[i].slice(0, playerTwo[i].length - 1)

// playerOne Switch for J, Q, K, A
    switch (currentCardP1) {
      case 'J':
        currentCardP1 = 11;
        break;
      case 'Q':
        currentCardP1 = 12;
        break;
      case 'K':
        currentCardP1 = 13;
        break;
      case 'A':
        currentCardP1 = 14;
        break;
        
// parseInt confirms value is a number card, if card is not J, Q, K, A 
      default:
        currentCardP1 = parseInt(currentCardP1)
    }
// playerTwo Switch for J, Q, K, A
    switch (currentCardP2) {
      case 'J':
        currentCardP2 = 11;
        break;
      case 'Q':
        currentCardP2 = 12;
        break;
      case 'K':
        currentCardP2 = 13;
        break;
      case 'A':
        currentCardP2 = 14;
        break;
// parseInt confirms value is a number card, if card is not J, Q, K, A 
      default:
        currentCardP2 = parseInt(currentCardP2); 
    }

    if (currentCardP1 > currentCardP2) {
// console.log("Player 1 wins this hand: " + playerOne + " to " + playerTwo);
      scoreP1 += 1;
    } else if (currentCardP2 > currentCardP1) {
// console.log("Player 2 wins this hand: " + playerTwo + " to " + playerOne);
        scoreP2 += 1; 
    } else {
      console.log("The hand was a draw.")
    }

  }
}
//See the random deck. Reload the page to reshuffle the deck
  var testDeck = createDeck();
  shuffleDeck(testDeck);
  console.log(testDeck);

  class Player {
  constructor  (deck) {
    this.deck = (deck);
    this.score = (0);
  }
}

// the following checks for the winners of the entire 26 card hand between both players
  console.log(scoreP1, + scoreP2);

  if (scoreP1 > scoreP2) {
      console.log("Player 1 wins this hand: " + scoreP1 + " to " + scoreP2);
    } else if (scoreP2 > scoreP1) {
        console.log("Player 2 wins this hand: " + scoreP2 + " to " + scoreP1);
    } else {
            
      console.log("This hand was a draw.")
  }
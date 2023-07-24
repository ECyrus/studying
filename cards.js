const cardNumbers = [];

for (let i = 2; i <= 10; i++) {
    cardNumbers.push(i);
}
cardNumbers.push('A', 'J', 'Q', 'K');

const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];

let cards = [];

for ( let number of cardNumbers) {
    for (let suit of suits) {
        const card = {
        number,
        suit,
        id: cards.length + 1,
    }
    cards.push(card);
    }
}

console.log(cards[16])
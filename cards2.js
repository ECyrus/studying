const cardNumbers = [];
const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];


for (let i = 2; i <= 10; i++) {
    cardNumbers.push(i)
};
cardNumbers.push('A', 'J', 'Q', 'K');

let cards = [];
for (number of cardNumbers) {
    for (suit of suits) {
        const card = {
            number,
            suit,
            id: cards.length + 1
        }
        cards.push(card);
    }
};

console.log(cards);
// this
interface Card {
  suit: string
  card: number
}

interface Deck {
  suits: string[]
  cards: number[]
  createCardPicker(this: Deck): () => Card
}

let deck: Deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function (this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52)
      let pickeSuit = Math.floor(Math.random() * 4)
      return {
        suit: this.suits[pickeSuit],
        card: pickedCard % 13
      }
    }
  }
}

let cardPicker = deck.createCardPicker()
let pickedCard = cardPicker()
console.log(pickedCard)

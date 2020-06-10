// 函数重载
let suits = ["hearts", "spades", "clubs", "diamonds"]

function pickCard(x: { suit: string; card: number }[]): number
function pickCard(x: number): { suit: string; card: number }

function pickCard(x): any {
  if (Array.isArray(x)) {
    return Math.floor(Math.random() * x.length)
  } else if (typeof x === 'number') {
    let pickedSuit = Math.floor(x / 13)
    return {
      suit: suits[pickedSuit],
      card: x % 13
    }
  }
}


let myDeck1 = [
  {
    suit: 'diamonds',
    card: 2
  },
  {
    suit: 'clubs',
    card: 10
  },
]

let pickedCard1 = myDeck1[pickCard(myDeck1)]
let pickedCard2 = pickCard(34)

console.log(pickedCard1)
console.log(pickedCard2)
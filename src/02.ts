const numLivesForCat = 9

const kitty = {
  name: 'kitty',
  numLives: numLivesForCat
}

// wrong
//  kitty = {
//    name: 'Tommy',
//    numLives: numLivesForCat
//  }

// ok
kitty.name = "tommy"

let input: [number, number] = [1, 2]

function f_01([first, second]: [number, number]) {
  console.log(first, second)
}

f_01(input)


let o = {
  a1: 'foo',
  b1: 12,
  c1: 'bar'
}

let { a1, b1 }: { a1: string, b1: number } = o
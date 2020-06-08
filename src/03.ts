// 接口
interface LabelledValue {
  label: string
  size: number
}
function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label)
}

let myObj = {
  size: 10,
  label: 'size 10 label object'
}

interface Square {
  color: string
  area: number
}
// 可选属性
interface SquareConfig {
  color?: string
  width?: number
  [propName: string]: any
}

function createSquare(config: SquareConfig): Square {
  let newSquare = { color: 'white', area: 100 }
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}

let mySquare = createSquare({ color: 'black' })

// 只读属性
interface Point {
  readonly x: number
  readonly y: number
}

let p1: Point = {
  x: 20,
  y: 20
}

// wrong
// p1.x = 10
let ro: ReadonlyArray<number> = [1, 2, 3, 4]

// 函数类型接口
interface SearchFunc {
  (source: string, substring: string): boolean
}

interface StringArray {
  [index: number]: string
}

let myArray: StringArray
myArray = ['Bob', 'Fred']

let myStr: string = myArray[0]

interface NumberDic {
  [index: string]: number
  length: number
}

interface ClockInterface {
  currentTime: Date
  setTime(d: Date): void
}

class Clock implements ClockInterface {
  currentTime: Date
  constructor(h: number, m: number) {

  }
  setTime(d: Date) {
    this.currentTime = d
  }
}


printLabel(myObj)
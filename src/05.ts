// 接口继承
interface Shape{
  color: string
}

interface PenStroke{
  penWidth: number
}

interface SquareShape extends Shape,PenStroke{
  sideLength: number
}

let square = {} as SquareShape

square.color = 'red'
square.penWidth = 3
square.sideLength = 4
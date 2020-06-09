// 静态属性
// 访问 Grid.origin.x
class Grid {
  static origin = { x: 0, y: 0 }
  scale: number
  constructor(scale: number) {
    this.scale = scale
  }
  caculateDistance(point: { x: number, y: number }): number {
    let xDist = point.x - Grid.origin.x
    let yDist = point.y - Grid.origin.y
    return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale
  }
}

let grid1 = new Grid(1.0)
let grid2 = new Grid(3.0)


grid1.caculateDistance({ x: 3, y: 4 }) // 5
grid2.caculateDistance({ x: 3, y: 4 }) // 15


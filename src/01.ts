// number
let a: number = 1

// 枚举
enum Color {
  Red = 1,
  Blue = 3,
  Green = 4
}

let colorName: string = Color[3]

// any
let notSure: any = "hello,any type"
notSure = 1
notSure = true
let list: any[] = [1, true, 'text']

// void  函数返回为空
function warnUser(): void {
  console.log("warn user")
}
let b: void = warnUser()

// undefined
// --strictChecksNull 开启会报错，不允许number再

let c: undefined = undefined
c = null
// --strictChecksNull 开启会报错，不允许number再

let d: null = null
d = undefined
// --strictChecksNull 开启会报错，不允许number再
let e: number = 3
e = null

// 联合类型
let f: number | null = 3
f = null

// never 任何类型的子类型
function error(message: string): never {
  throw new Error(message)
}

function fail() {
  return error("something wrong")
}

function infiniteLoop(): never {
  while (true) {

  }
}

// object 
declare function create(o: object | null): void;

create({ prop: 0 })
create(null)

// 类型断言
let someValue: any = 'this is a string'
// let strLength: number = (<string>someValue).length
let strLength: number = (someValue as string).length

let x: number[]
x = [10,20]
// 泛型
function test<T>(arg: T): T {
  return arg
}

// 泛型约束

class GenericNumber<T>{
  zeroValue: T
  add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = (x, y) => {
  return x + y
}

// 泛型约束

interface Lengthwise {
  length: number
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}

function getProperty<T,K extends keyof T>(obj:T,key:K){
  return obj[key]
}

let x = {a:1,b:2,c:3}

getProperty(x,'a')
// wrong
// getProperty(x,'m')
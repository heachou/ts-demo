// 抽象类
// 通常作为派生类的基类使用，一般不被实例化

abstract class Animal {
  abstract makeSound(): void
  move(): void {
    console.log('roaming the earth')
  }
}

class Horse extends Animal {
  makeSound() {
    console.log("jia jia jia")
  }
} 
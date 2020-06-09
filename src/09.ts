// 类 私有 受保护的修饰符 readonly修饰符
class Person {
  protected name: string
  protected constructor(name: string) {
    this.name = name
  }
}

class Employee extends Person {
  private department: string
  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }
  
  getElevatorPitch(){
    return `Hello, my name is ${this.name}, i work in ${this.department}`
  }
}

let howard = new Employee('howard','技术部')
console.log(howard.getElevatorPitch())
// wrong  because protected constructor
// let p = new Person('test')
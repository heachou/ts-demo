// 存取器
let passcode: string = 'secret passcode'

class EmployeeTest {
  private _fullname: string
  get fullname(): string {
    return this._fullname
  }
  set fullname(newName: string) {
    if (passcode && passcode === 'secret passcode') {
      this._fullname = newName
    } else {
      console.log('unauthorized')
    }
  }
}

let employee = new EmployeeTest()
employee.fullname = 'Bob smith'
console.log(employee.fullname)
employee.fullname = 'Bob edit'
console.log(employee.fullname)

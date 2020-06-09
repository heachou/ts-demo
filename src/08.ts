class Animal{
  name:string
  constructor(name:string){
    this.name = name
  }
  move(distance:number){
    console.log(`${this.name} moved ${distance}`)
  }
}

class Dog extends Animal{
  constructor(name:string){
    super(name)
    this.name = name
  }
  move(distance:number){
    console.log(`${this.name} move...`)
    super.move(distance)
  }
}

let dog = new Dog('傻狗')
dog.move(10)
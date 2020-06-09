interface ClockInterface {
  tick()
}

interface ClockConstructor {
  new(hour: number, minute: number): ClockInterface
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {

  }
  tick() {
    console.log('beep beep')
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {

  }
  tick() {
    console.log('hah hah')
  }
}

let digital = createClock(DigitalClock, 10, 48)
let analog = createClock(AnalogClock, 10, 50)

console.log(digital.tick())
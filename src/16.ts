class BeeKeeper {
  hasMask: boolean
}

class LionKeeper {
  nameTag: string
}

class Animal2 {
  numLengs: number
}

class Bee extends Animal2 {
  keeper: BeeKeeper
}

class Lion extends Animal2 {
  keeper: LionKeeper
}

function createInstance<T extends Animal2>(c: new () => T): T {
  return new c()
}

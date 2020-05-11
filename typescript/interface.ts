interface Interface {
  name: string;
  func(param: number): void;
}

class InterfaceClass implements Interface {
  constructor (param: string) {
    this.name = param
    console.log(`new InterfaceClass with name: ${this.name}`)
  }

  name = undefined;

  func (param: number) {
      console.log(param)
  }
}

const instance: InterfaceClass = new InterfaceClass('coke')
console.log(`instance.name: ${instance.name}`)

/**
 * interface with a construct signature cannot be checked when `implements`
 * it can be checked in the following way
 */
interface ConstructorInterface {
  new(param: string); // construct signature
}

function createInstance(cls: ConstructorInterface, param: string) {
  new cls(param)
}

createInstance(InterfaceClass, 'createdByFunction')

export {}
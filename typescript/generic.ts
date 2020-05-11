interface GenericInterface<T> {
    prop: T;
}

class GenericClass<T> implements GenericInterface<T> {
    constructor(param: T) {
      console.log(param);
    }
    prop: T;
}

const instance = new GenericClass<string>('sample')
console.log(instance.prop)

export {}
const a = {
  a0: 2,
  a1() {
    console.log('a1')
  }
}

const b = {
  b1() {
    console.log('b1')
    super.a1()
    console.log(super.a1)
  }
}

Object.setPrototypeOf(b, a)

b.b1()
console.log(b.__proto__)
class A {
  a1() {
    console.log('a1')
  }

  static a2() {
    console.log('a2')
  }
}

class AA extends A {
  constructor() {
    super()
  }

  aa1() {
    super.a1()
  }

  static aa2() {
    super.a2()
  }
}

const aa = new AA()
aa.aa1()
AA.aa2()

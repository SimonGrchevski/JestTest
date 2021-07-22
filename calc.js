class Calculator {

  static add(a,b) {
    return a+b;
  }

  static subtract(a,b) {
    return a-b;
  }

  static divide(a,b) {
    return b == 0 ? new Error('Divison by zero') : a/b;
  }

  static multiply(a,b) {
    return a*b;
  }
}

module.exports = Calculator;
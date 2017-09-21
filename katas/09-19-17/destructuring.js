const myObj = {
  a: '123',
  b: '456',
  c: '789'
}

const {a, ...b} = myObj

console.log(a, b)
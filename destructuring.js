const arr = [1, 2, 3, 4, 5]
const arr2 = [...arr, 6]

//  [x, y] = [1, 2, 3, 4, 5]

let z
[x, y, ...z] = [1, 2, 3, 4, 5]

console.log(x, y, z)

const { myFn: myAlias } = require('./my-lib')
myAlias()
console.log('test')
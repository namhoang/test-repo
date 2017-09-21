var { myFn: myAliasFn} = require('./my-lib.js')

var {x: testAlias} = {x: () => console.log('testing alias fn')}

testAlias()
myAliasFn()

for (let prop in obj){
  obj[prop]

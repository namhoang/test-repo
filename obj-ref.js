const myObj = {
  foo: 'bar'
}

let copyOfObj = myObj

copyOfObj.newProp = 'baz'

copyOfObj = {
  a: 'b'
}

console.log(myObj, copyOfObj)
// const foo = 'i am in the global scope when loaded in the browser'

// +function(){
//   // because i am in an anon fn, i am sheltered from polluting the global scope, i get my own scope
// }();

// if(foo){
//   var blockScope = 'blockscope'; // let scopes the variable to a block instead of globally
// }

// console.log(blockScope)

// for (let prop in {hello: 'world'}) console.log(prop)

// function wakeUp(){
//   var scopeToThisFn
//   planOutNextSteps(sortActivity(getToDoListItems()))
// }

// +function(){

// }

// checkToDoList(){
//   return this.http.get('/api/to-do')
// }

for (let prop in obj) {

}

for (let x of array) {
  x.prop
}

array.forEach(el => console.log(el))

Nam.getUp()
Nam.isUp === true

Terminal.boot()

// framework
day.end()
day.end = function(){
  this.plugins['end'].forEach(plugin => plugin.run())
}

day.registerPlugin('end', (Nam) => Nam.planTomorrow() )
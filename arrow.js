let dragonEvents = [
    {type: 'attack', value: 12, target: 'player-dorkman'},
    {type: 'yawn', value: 40},
    {type: 'attack', value: 23, target: 'player-fluffykins'},
    {type: 'attack', value: 12, target: 'player-dorkman'},
]

let totalDamageOnDorkman = 
    dragonEvents
        .filter( event => event.target === 'player-dorkman')
        .filter( event => event.type === 'attack')
        .map( event => event.value)
        .reduce((accumulator, elementVal) => accumulator += elementVal, 0)

console.log('totalDamageOnDorkman\n', totalDamageOnDorkman)
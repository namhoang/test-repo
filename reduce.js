const input = [1, 2, 3, 5]

input.reduce((acc, currentValue) => {
    return acc += currentValue
})

[1, 2, 3].reduce((acc, currentValue) => acc += currentValue, 100)

[1, 2, 3].map(el => el + 1)

[1, 2, 3].forEach(el => acc = fn(acc, currentValue))

[1, 2, 3].splice()

[1, 2, 3].slice(0)

[1, 2, 3].filter(el => el > 2)

[1, 2].concat([3, 4])

[].concat([1,2], [3,4])

[].concat([1,2], [3,4])
  .filter(el => el > 2)
  .concat([1, 2])
  .sort((a, b) => a - b)
  .push(5)
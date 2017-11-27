var functions = require('../../functions')

// Write a simple map implementation
test('functions.map takes an array as the first parameter, a function as the second parameter, and returns the result of calling the function on each array element', function () {
  var expected = [1, 2, 3]
  var actual = functions.map([0, 1, 2], function (n) { return ++n })
  expect(actual).toEqual(expected)
})

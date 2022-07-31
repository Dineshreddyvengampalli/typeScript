let functions = require('./functions')

// test the addition function
test('add function testing',()=>{
  expect(functions.add(5,5)).toBe(10)
})

// to be null
test('check null',()=>{
  expect(functions.checkNull()).toBe(null)
})

// checkfalsy
test('check falsy',()=>{
  expect(functions.checkFalsy()).toBeFalsy()
})

// toBe is to be used for primitives
// toEqual is to be used for objects,array etc..
// to eqal
test('check to equal',()=>{
  expect(functions.returnUser()).toEqual({firstName:'dinesh',lastName:'reddy'})
})



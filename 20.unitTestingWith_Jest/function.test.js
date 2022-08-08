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

// comparision
test('compare the values',()=>{
  let a=5
  let b=10
  expect(a+b).toBeGreaterThan(10)
})

// regex
test('pass if alphabet is present in the word',()=>{
  let a = 'hai'
  expect(a).toMatch(/a/)
})

// Arrays
test('testing an array',()=>{
  names = ['dinesh','sai'];
  expect(names).toContain('sai')
})

// promise
test('test with promise',async()=>{
  // expect.assertions(1)
  let data = await functions.dataFetch()
  expect(data.id).toBeTruthy()
})

// reverse of an array
test('test function to be defined',()=>{
  expect(functions.recverseArr).toBeDefined
})
test('test the reverse of an array',()=>{
  let newArr = functions.recverseArr([1,2,3,4])
  expect(newArr).toEqual([4,3,2,1])
})

test('sample',()=>{
  let a =5
  let b = 10
  expect(a+b).toBeGreaterThan(1)
})
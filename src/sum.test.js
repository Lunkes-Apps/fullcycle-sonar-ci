const sum = require('./sum')
const subtraction = require('./subtraction')

test("add 1 + 3 to be equal 4", ()=>{
    expect(sum(1,3)).toBe(4)
})

test("subtract 4 - 2 to be equal 2", ()=>{
    expect(subtraction(4,2)).toBe(2)
})
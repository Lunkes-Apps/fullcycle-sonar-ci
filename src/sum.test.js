const sum = require('./sum')

test("add 1 + 3 to be equal 4", ()=>{
    expect(sum(1,3)).toBe(4)
})
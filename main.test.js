const binarySeach = require('./main')

test('find pairs of numbers based on an array and a ref POSITIVE', () => {
    // Case 1. [1,-6,4,-12,18,5,69,33,-15,48,39,0,-4] and ref = 33 -- Normal functioning
    expect(
        binarySeach([1,-6,4,-12,18,5,69,33,-15,48,39,0,-4], 33)
    ).toEqual([ [ -15, 48 ], [ -6, 39 ], [ 0, 33 ] ])
})

test('find pairs of numbers based on an array and a ref NEGATIVE', () => {
    // Case 2. [1,-6,4,-12,18,5,69,33,-15,48,39,0,-4] and ref = 100 -- Pairs not found
    expect(
        binarySeach([1,-6,4,-12,18,5,69,33,-15,48,39,0,-4], 100)
    ).toEqual([])
})

test('find pairs even with Repeated Values', () => {
    // Case 3. [4,-1,91,-32,0,0,25,-5] and ref = 25
    expect(
        binarySeach([4,-1,91,-32,0,0,25,-5], 25)
    ).toEqual([ [ 0, 25 ], [ 0, 25 ] ])
})

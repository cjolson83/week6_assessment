const {shuffleArray} = require('./utils.js')

test('shuffleArray should take in an array and return a copy of the array that is the same length', () => {
    expect(shuffleArray([1,2,3,4])).toHaveLength(4)
})

test('shuffleArray should take in an array and return a copy of the array where the order of the values within the array have been shuffled and therefore are not in the same order as the original array', () => {
    expect(shuffleArray([1,2,3,4])).not.toEqual([1,2,3,4])
})


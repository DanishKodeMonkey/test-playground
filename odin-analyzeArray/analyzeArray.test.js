import analyzeArray from './analyzeArray'
test('Analyze array contains', () => {
	const testObj = analyzeArray([1, 8, 3, 4, 2, 6])

	expect(testObj).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	})
})

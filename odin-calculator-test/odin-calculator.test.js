import { calculator } from './odin-calculator'

test('add 2 + 2 = 4', () => {
	expect(calculator.add(2, 2)).toBe(4)
})

test('subtract 3 - 1 = 2', () => {
	expect(calculator.subtract(3, 1)).toBe(2)
})

test('divide 2 / 4 = 2', () => {
	expect(calculator.divide(4, 2)).toBe(2)
})

test('multiply 2 * 2 = 4', () => {
	expect(calculator.multiply(2, 2)).toBe(4)
})

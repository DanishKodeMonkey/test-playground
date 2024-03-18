const orderTotal = require('./order-total')

it('Quantity', () =>
	expect(
		orderTotal({
			items: [
				{
					name: 'dragon candy',
					price: 2,
					quantity: 3,
				},
			],
		})
	).toBe(6))
it('No quantity specified', () =>
	expect(
		orderTotal({
			items: [{ name: 'Dragon candy', price: 3 }],
		})
	).toBe(3))
it('Happy path example 1', () =>
	expect(
		orderTotal({
			items: [
				{ name: 'Dragon candy', price: 2, quantity: 1 },
				{ name: 'Dragon cage(small)', price: 800, quantity: 1 },
			],
		})
	).toBe(802))

it('Happy path example 2', () =>
	expect(
		orderTotal({
			items: [{ name: 'Dragon candy', price: 2, quantity: 3 }],
		})
	).toBe(6))

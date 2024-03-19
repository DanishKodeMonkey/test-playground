import { capitalize, reverseString } from './odin-string-tests'

test('Capitalize capitalises', () => {
	expect(capitalize('capitalizeMe')).toBe('CapitalizeMe')
})

test('ReverseString reverses', () => {
	expect(reverseString('reverseMe')).toBe('eMesrever')
})

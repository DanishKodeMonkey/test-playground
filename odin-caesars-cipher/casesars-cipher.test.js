import caesarCipher from './caesars-cipher'
test('Encrypting Caesar', () => {
	expect(caesarCipher('Caesar')).toBe('pnrfne')
})

const caesarCipher = (str, shift = 13) => {
	// ciphers are usually lower case
	str = str.toLowerCase()
	// modulus to compensate for out-of-bounds
	// value outside alphabet range
	shift = shift % 26

	let result = ''

	for (let i = 0; i < str.length; i++) {
		// fetch the charCode for each letter
		// shift it by factor of shift, get charcode
		let char = str.charCodeAt(i) + shift
		// is charcode not in range of standard
		if (char > 122) {
			// convert to string letter
			let temp = String.fromCharCode(char - 26)
			result += temp
		} else {
			// is char code in range of standard
			// convert to string letter
			result += String.fromCharCode(char)
		}
	}
	return result
}

export default caesarCipher

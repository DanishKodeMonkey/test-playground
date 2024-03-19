export default function analyzeArray(arr) {
	const average = Math.round(arr.reduce((prev, cur) => prev + cur) / arr.length)
	const min = Math.min(...arr)
	const max = Math.max(...arr)
	const { length } = arr
	return { average, min, max, length }
}

function verifyDecimalPlaces(value: string) {
	const hasTwoDecimalPlaces = value.split('.')[1].length === 2
	return hasTwoDecimalPlaces ? value : value.replace('.', '').concat('.00')
}

function removeInvalidPunctuation(value: string) {
	return value.replaceAll('.', '').replace(',', '.')
}

export function parseDecimal(value: string) {
	if (!value) throw new Error('Value is required')
	const alreadyHasValidPunctuation = !value.includes(',') && value.includes('.')
	const normalizedValue = alreadyHasValidPunctuation ? verifyDecimalPlaces(value) : removeInvalidPunctuation(value)
	const parsedValue = parseFloat(normalizedValue)
	if (isNaN(parsedValue)) throw new Error('Invalid value type')
	return parsedValue
}

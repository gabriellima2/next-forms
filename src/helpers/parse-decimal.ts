export function parseDecimal(value: string) {
	if (!value) throw new Error('Value is required')
	const parsedValue = parseFloat(value.replaceAll('.', '').replace(',', '.'))
	if (isNaN(parsedValue)) throw new Error('Invalid value type')
	return parsedValue
}

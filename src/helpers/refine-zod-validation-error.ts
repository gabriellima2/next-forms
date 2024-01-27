import { type SafeParseError } from 'zod'

type Return<T> = Partial<{
	[P in keyof T]: string;
}>;

export function refineZodValidationError<T>(validated: SafeParseError<T>): Return<T> {
	const { fieldErrors } = validated.error.flatten()
	return Object.entries(fieldErrors).reduce((acc, current) => {
		const [key, errors] = current
		acc = { ...acc, [key]: (errors as string[])[0] }
		return acc
	}, {} as Return<T>)
}

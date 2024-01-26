import { BaseInput, BaseLabel, TextError, type BaseInputProps } from '../atoms'

export type FieldProps = Omit<BaseInputProps, 'aria-invalid' | 'aria-describedby' | 'id'> & {
	id: string
	required?: boolean
	labelText?: string
	errorMessage?: string
}

export function Field(props: FieldProps) {
	const { id, required, labelText, errorMessage, ...rest } = props
	return (
		<fieldset className='border-none flex flex-col gap-4'>
			{labelText && <BaseLabel htmlFor={id}>{labelText}{required && '*'}</BaseLabel>}
			<BaseInput
				id={id}
				name={id}
				aria-describedby='error-message'
				aria-required={required}
				aria-invalid={!!errorMessage}
				{...rest}
			/>
			{errorMessage && <TextError>{errorMessage}</TextError>}
		</fieldset>
	)
}

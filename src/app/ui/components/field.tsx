import { BaseInput, BaseInputProps } from '../atoms/base-input'
import { BaseLabel } from '../atoms/base-label'
import { TextError } from '../atoms/text-error'

type FieldProps = Omit<BaseInputProps, 'aria-invalid' | 'aria-describedby' | 'id'> & {
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
				aria-describedby='error-message'
				aria-required={required}
				aria-invalid={!!errorMessage}
				{...rest}
			/>
			{errorMessage && <TextError>{errorMessage}</TextError>}
		</fieldset>
	)
}
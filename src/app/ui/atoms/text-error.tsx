import { cn } from '@/helpers/cn'
import { type HTMLAttributes } from 'react'

export type TextErrorProps = HTMLAttributes<HTMLParagraphElement>

export function TextError(props: TextErrorProps) {
	const { className, ...rest } = props
	return (
		<p id='error-message' role='alert' className={cn(className, 'text-red-500')} {...rest} />
	)
}

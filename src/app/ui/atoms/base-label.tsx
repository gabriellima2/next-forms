import { type LabelHTMLAttributes } from 'react'
import { cn } from '@/helpers/cn'

export type BaseLabelProps = LabelHTMLAttributes<HTMLLabelElement>

export function BaseLabel(props: BaseLabelProps) {
	const { className, ...rest } = props
	return (
		<label className={cn(className, 'text-sm font-medium')} {...rest} />
	)
}

import { type InputHTMLAttributes } from 'react'
import { cn } from '@/helpers/cn'

export type BaseInputProps = InputHTMLAttributes<HTMLInputElement>

export function BaseInput(props: BaseInputProps) {
	const { className, ...rest } = props
	return (
		<input
			className={cn(
				className,
				'w-full h-[40px] bg-transparent text-sm p-2 border border-input rounded outline-none placeholder:text-muted-foreground focus:bg-primary-foreground',
			)}
			{...rest}
		/>
	)
}

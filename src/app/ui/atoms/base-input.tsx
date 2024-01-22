import { type InputHTMLAttributes } from 'react'
import { cn } from '@/helpers/cn'

export type BaseInputProps = InputHTMLAttributes<HTMLInputElement>

export function BaseInput(props: BaseInputProps) {
	const { className, ...rest } = props
	return (
		<input
			className={cn(
				className,
				'w-full h-[40px] bg-transparent p-2 border border-zinc-700 rounded outline-none placeholder:text-zinc-500 focus:bg-zinc-800',
			)}
			{...rest}
		/>
	)
}

import { type ButtonHTMLAttributes } from 'react'
import { cn } from '@/helpers/cn'

type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	outline?: boolean
}

const variants = {
	default: 'w-full h-[40px] flex items-center justify-center p-2 border border-transparent font-medium text-sm bg-blue-700 rounded focus:opacity-80 hover:opacity-80 transition-opacity',
	outline: 'bg-transparent border-blue-700 focus:opacity-100 hover:opacity-100 focus:bg-blue-700 hover:bg-blue-700 transition-colors',
	disabled: 'opacity-70 pointer-events-none'
}

export function BaseButton(props: BaseButtonProps) {
	const { className, outline, disabled, ...rest } = props
	return (
		<button
			type='button'
			className={cn({
				[variants.default]: true,
				[variants.outline]: outline,
				[variants.disabled]: disabled,
			}, className)}
			{...rest}
		/>
	)
}

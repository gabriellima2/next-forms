import { ArrowUpDown } from 'lucide-react'
import { Button, type ButtonProps } from '@/app/ui/atoms'

type ToggleSortingButtonProps = Omit<ButtonProps, 'children'> & {
	label: string
}

export function ToggleSortingButton(props: ToggleSortingButtonProps) {
	const {variant = 'ghost', label, ...rest} = props
	return (
		<Button variant={variant} {...rest}>
			{label}
			<ArrowUpDown className='ml-2 w-4 h-4' />
		</Button>
	)
}

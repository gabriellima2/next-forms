import { DropdownMenuItem } from '@/app/ui/components/dropdown-menu'
import { cn } from '@/helpers/cn'

type ProductActionsItemProps = Omit<Parameters<typeof DropdownMenuItem>[0], 'children'> & {
	label: string
}

export function ProductActionsItem(props: ProductActionsItemProps) {
	const { className, label, ...rest } = props
	return (
		<DropdownMenuItem className={cn(className, 'cursor-pointer')} {...rest}>
			{label}
		</DropdownMenuItem>
	)
}

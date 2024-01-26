import { forwardRef, type ElementRef } from 'react'

import { DropdownMenuItem } from '@/app/ui/components/dropdown-menu'
import { cn } from '@/helpers/cn'

type ProductActionsItemProps = Parameters<typeof DropdownMenuItem>[0] & {
	label: string
}

type ProductActionsItemRef = ElementRef<typeof DropdownMenuItem>

export const ProductActionsItem = forwardRef<ProductActionsItemRef, ProductActionsItemProps>((props, ref) => {
	const { className, label, ...rest } = props
	return (
		<DropdownMenuItem ref={ref} className={cn(className, 'cursor-pointer')} {...rest}>
			{label}
		</DropdownMenuItem>
	)
})

ProductActionsItem.displayName = 'ProductActionsItem'

import {
	DropdownMenu,
	DropdownMenuLabel,
	DropdownMenuContent,
	DropdownMenuTrigger,
	DropdownMenuSeparator,
	DropdownMenuItem,
} from '../../dropdown-menu'
import { ProductActions } from '../../product-actions'
import { MenuButton } from '@/app/ui/atoms'

import { deleteProduct } from '@/app/product/actions'

import type { ProductEntity } from '@/entities/product.entity'

type ProductActionsProps = {
	product: ProductEntity
}

export function ProductMenu(props: ProductActionsProps) {
	const { product } = props
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<MenuButton />
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuLabel>Actions</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<ProductActions.Edit
					id={product.id}
					values={{ ...product }}
					trigger={
						<DropdownMenuItem className='cursor-pointer' onSelect={(e) => e.preventDefault()}>
							Edit
						</DropdownMenuItem>
					}
				/>
				<ProductActions.Delete trigger={
					<DropdownMenuItem className='cursor-pointer' onClick={() => deleteProduct(product.id)}>
						Delete
					</DropdownMenuItem>
				} />
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

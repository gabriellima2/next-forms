import {
	DropdownMenu,
	DropdownMenuLabel,
	DropdownMenuContent,
	DropdownMenuTrigger,
	DropdownMenuSeparator,
} from '../../../dropdown-menu'
import { ProductActionsItem } from './components/product-actions-item'
import { EditProduct } from '../edit-product'
import { MenuButton } from '@/app/ui/atoms'

import type { ProductEntity } from '@/entities/product.entity'

type ProductActionsProps = {
	product: ProductEntity
}

export function ProductActions(props: ProductActionsProps) {
	const { product } = props
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<MenuButton />
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuLabel>Actions</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<EditProduct
					values={{ ...product }}
					renderTrigger={() => <ProductActionsItem label='Edit' onSelect={(e) => e.preventDefault()} />}
				/>
				<ProductActionsItem
					label='Delete'
					onClick={() => console.log('Remove ' + product)}
				/>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

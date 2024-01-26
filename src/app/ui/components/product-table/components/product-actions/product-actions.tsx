import {
	DropdownMenu,
	DropdownMenuLabel,
	DropdownMenuContent,
	DropdownMenuTrigger,
	DropdownMenuSeparator,
} from '../../../dropdown-menu'
import { ProductActionsItem } from './components/product-actions-item'
import { ProductActionsDialog } from '../../../product-actions-dialog'
import { MenuButton } from '@/app/ui/atoms'

import type { ProductEntity } from '@/entities/product.entity'
import { deleteProduct } from '@/app/product/actions'

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
				<ProductActionsDialog.Edit
					id={product.id}
					values={{ ...product }}
					renderTrigger={() => <ProductActionsItem label='Edit' onSelect={(e) => e.preventDefault()} />}
				/>
				<ProductActionsItem
					label='Delete'
					onClick={() => deleteProduct(product.id)}
				/>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

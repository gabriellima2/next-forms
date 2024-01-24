import { Row } from '@tanstack/react-table'
import type { ProductEntity } from '@/entities/product.entity'

type Product = Pick<ProductEntity, 'name' | 'imageUrl'>

export function productFilter(row: Row<ProductEntity>, columnID: string, value: string) {
	const product = row.getValue('product') as Product
	const formattedName = product.name.toLowerCase().trim()
	return formattedName.includes(value.trim())
}

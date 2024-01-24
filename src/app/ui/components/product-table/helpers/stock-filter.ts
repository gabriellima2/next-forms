import { Row } from '@tanstack/react-table'
import type { ProductEntity } from '@/entities/product.entity'

export enum StockFilterValues {
	All = 'all',
	InStock = 'in-stock',
	OutOfStock = 'out-of-stock'
}

export function stockFilter(row: Row<ProductEntity>, columnID: string, value: string) {
	if (value === StockFilterValues.All) return true
	const stock = row.getValue('stock') as number
	return value === StockFilterValues.InStock && stock > 0 || value === StockFilterValues.OutOfStock && stock <= 0
}

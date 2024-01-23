'use client'

import { ProductEntity } from '@/entities/product.entity'
import { ColumnDef } from '@tanstack/react-table'

import { ProductCard } from '../components/product-card'
import { StockMessage } from '@/helpers/stock-message'


export const productTableColumns: ColumnDef<ProductEntity>[] = [
	{
		accessorKey: 'id',
		header: 'ID'
	},
	{
		accessorKey: 'product',
		header: 'Product',
		accessorFn: (value) => ({ name: value.name, imageUrl: value.imageUrl }),
		cell: ({ cell }) => {
			const value = cell.getValue() as Pick<ProductEntity, 'name' | 'imageUrl'>
			return <ProductCard name={value.name} imageUrl={value.imageUrl} />
		},
		id: 'product'
	},
	{
		accessorKey: 'price',
		header: 'Price',
		cell: ({ row }) => {
			const price = parseFloat(row.getValue('price'))
			const formatted = new Intl.NumberFormat('pt-BR', {
				style: 'currency',
				currency: 'BRL'
			}).format(price)
			return <>{formatted}</>
		}
	},
	{
		accessorKey: 'category',
		header: 'Category'
	},
	{
		accessorKey: 'stock',
		header: 'Stock',
		cell: ({ row }) => {
			const stockAmount: number = row.getValue('stock')
			const message = !stockAmount ? StockMessage.OutOfStock : StockMessage.InStock
			return <>{message}</>
		}
	},
]

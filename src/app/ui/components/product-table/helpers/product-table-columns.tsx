'use client'
import type { ColumnDef, FilterFn } from '@tanstack/react-table'

import { ProductMenu, ToggleSortingButton } from '../components'
import { Checkbox } from '@/app/ui/atoms'
import { ProductCard } from '../..'

import { StockMessage } from '@/helpers/stock-message'
import type { ProductEntity } from '@/entities/product.entity'


declare module '@tanstack/table-core' {
  interface FilterFns {
		stock: FilterFn<unknown>
		product: FilterFn<unknown>
  }
}

export const productTableColumns: ColumnDef<ProductEntity>[] = [
	{
		id: 'select',
		header: ({ table }) => {
			const isChecked = table.getIsAllPageRowsSelected() || (table.getIsSomeRowsSelected() && 'indeterminate')
			return (
				<Checkbox
					checked={isChecked}
					onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
					aria-label='select all'
				/>
			)
		},
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label='select row'
			/>
		),
		enableSorting: false,
		enableHiding: false
	},
	{
		accessorKey: 'id',
		header: 'ID'
	},
	{
		accessorKey: 'product',
		header: ({ column }) => {
			const isASCSorted = column.getIsSorted() === 'asc'
			return (
				<ToggleSortingButton
					label='Product'
					onClick={() => column.toggleSorting(isASCSorted)}
				/>
			)
		},
		accessorFn: (value) => ({ name: value.name, imageUrl: value.image_url }),
		cell: ({ cell }) => {
			const value = cell.getValue() as { name: string; imageUrl?: string}
			return <ProductCard name={value.name} imageUrl={value.imageUrl} />
		},
		id: 'product',
		filterFn: 'product'
	},
	{
		accessorKey: 'price',
		header: ({ column }) => {
			const isASCSorted = column.getIsSorted() === 'asc'
			return (
				<ToggleSortingButton
					label='Price'
					onClick={() => column.toggleSorting(isASCSorted)}
				/>
			)
		},
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
		},
		filterFn: 'stock'
	},
	{
		id: 'actions',
		cell: ({ row }) => {
			const product = row.original
			return <ProductMenu product={product} />
		}
	}
]

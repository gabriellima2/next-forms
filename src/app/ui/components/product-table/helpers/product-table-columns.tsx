'use client'

import { ProductEntity } from '@/entities/product.entity'
import { ColumnDef } from '@tanstack/react-table'

import { ProductCard } from '../components/product-card'
import { StockMessage } from '@/helpers/stock-message'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../../dropdown-menu'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'
import { Button, Checkbox } from '@/app/ui/atoms'


export const productTableColumns: ColumnDef<ProductEntity>[] = [
	{
		id: 'select',
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomeRowsSelected() && 'indeterminate')
				}
				onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
				aria-label='select all'
			/>
		),
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
			const isSorted = column.getIsSorted() === 'asc'
			return (
				<Button variant='ghost' onClick={() => column.toggleSorting(isSorted)}>
					Product
					<ArrowUpDown className='ml-2 w-4 h-4' />
				</Button>
			)
		},
		accessorFn: (value) => ({ name: value.name, imageUrl: value.imageUrl }),
		cell: ({ cell }) => {
			const value = cell.getValue() as Pick<ProductEntity, 'name' | 'imageUrl'>
			return <ProductCard name={value.name} imageUrl={value.imageUrl} />
		},
		id: 'product'
	},
	{
		accessorKey: 'price',
		header: ({ column }) => {
			const isSorted = column.getIsSorted() === 'asc'
			return (
				<Button variant='ghost' onClick={() => column.toggleSorting(isSorted)}>
					Price
					<ArrowUpDown className='ml-2 w-4 h-4' />
				</Button>
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
		}
	},
	{
		id: 'actions',
		cell: ({ row }) => {
			const product = row.original
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant='ghost' size='sm'>
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className='w-4 h-4' />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem className='cursor-pointer' onClick={() => console.log('Edit ' + product)}>
							Edit
						</DropdownMenuItem>
						<DropdownMenuItem className='cursor-pointer' onClick={() => console.log('Remove ' + product)}>
							Delete
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)
		}
	}
]

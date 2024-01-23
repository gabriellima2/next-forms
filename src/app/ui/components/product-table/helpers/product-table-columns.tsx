'use client'

import { ProductEntity } from '@/entities/product.entity'
import { ColumnDef } from '@tanstack/react-table'
import Image from 'next/image'


export const productTableColumns: ColumnDef<ProductEntity>[] = [
	{
		accessorKey: 'id',
		header: 'ID'
	},
	{
		accessorKey: 'product',
		header: 'Product',
		accessorFn: (r) => ({ name: r.name, imageUrl: r.imageUrl }),
		cell: ({ cell }) => {
			const value = cell.getValue() as Pick<ProductEntity, 'name' | 'imageUrl'>
			return (
				<div>
					<Image src={value.imageUrl} alt={`Image of ${value.name}`} width={40} height={40} />
					<p>{value.name}</p>
				</div>
			)
		},
		id: 'product'
	},
	{
		accessorKey: 'price',
		header: 'Price'
	},
	{
		accessorKey: 'category',
		header: 'Category'
	},
	{
		accessorKey: 'stock',
		header: 'Stock'
	},
]

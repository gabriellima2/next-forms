'use client'
import { useProductTable } from './hooks/use-product-table'

import { FilterByStock, ProductTableBody, ProductTableHeader } from './components'
import { BaseInput, SelectedRowsCounter } from '../../atoms'
import { Table } from '../table'

import type { ProductEntity } from '@/entities/product.entity'

type ProductTableProps = {
	products: ProductEntity[]
}

export function ProductTable(props: ProductTableProps) {
	const { products } = props
	const { table, selectedRows } = useProductTable({ products })

	const productColumn = table.getColumn('product')
	const stockColumn = table.getColumn('stock')

	return (
		<div className="rounded border">
			<header className='flex-1 p-4 flex gap-4 flex-col sm:flex-row'>
				<BaseInput
					value={(productColumn?.getFilterValue() as string) ?? ''}
					onChange={(e) => productColumn?.setFilterValue(e.target.value)}
					placeholder='Product Name'
					className='min-w-[230px] sm:max-w-[440px]'
				/>
				<FilterByStock
					value={stockColumn?.getFilterValue() as string}
					onChange={(value) => stockColumn?.setFilterValue(value)}
				/>

			</header>
			<Table>
				<ProductTableHeader groups={table.getHeaderGroups()} />
				<ProductTableBody rows={table.getRowModel().rows} />
			</Table>
			<footer className="flex-1 p-4">
				<SelectedRowsCounter
					total={selectedRows.total}
					totalSelected={selectedRows.selected}
				/>
			</footer>
		</div>
	)
}

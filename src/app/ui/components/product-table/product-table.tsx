'use client'
import { useProductTable } from './hooks/use-product-table'

import { FilterByStock, ProductTableBody, ProductTableHeader } from './components'
import { BaseInput, SelectedRowsCounter, PaginationButton } from '../../atoms'
import { ProductActionsDialog } from '../product-actions-dialog'
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
			<header className='flex gap-4 md:items-center flex-1 p-4 flex-col md:flex-row'>
				<section className='flex-1 flex gap-4 flex-col sm:flex-row'>
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
				</section>
				<ProductActionsDialog.Add />
			</header>
			<Table>
				<ProductTableHeader groups={table.getHeaderGroups()} />
				<ProductTableBody rows={table.getRowModel().rows} />
			</Table>
			<footer className="flex flex-row items-center justify-between flex-1 p-4">
				<SelectedRowsCounter
					total={selectedRows.total}
					totalSelected={selectedRows.selected}
				/>
				<section className='flex flex-row gap-4'>
					<PaginationButton
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						Previous
					</PaginationButton>
					<PaginationButton
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						Next
					</PaginationButton>
				</section>
			</footer>
		</div>
	)
}

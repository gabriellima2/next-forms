'use client'
import { useState } from 'react'
import {  ColumnFiltersState, SortingState, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'

import { FilterByStock, ProductTableBody, ProductTableHeader } from './components'
import { BaseInput, SelectedRowsCounter } from '../../atoms'
import { Table } from '../table'

import { productTableColumns } from './helpers/product-table-columns'
import { productFilter } from './helpers/product-filter'
import { stockFilter } from './helpers/stock-filter'

import type { ProductEntity } from '@/entities/product.entity'

type ProductTableProps = {
	products: ProductEntity[]
}

export function ProductTable(props: ProductTableProps) {
	const { products } = props
	const [rowSelection, setRowSelection] = useState({})
	const [sorting, setSorting] = useState<SortingState>([])
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
	const table = useReactTable({
		data: products,
		columns: productTableColumns,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnFiltersChange: setColumnFilters,
		onRowSelectionChange: setRowSelection,
		onSortingChange: setSorting,
		filterFns: { stockFilter, productFilter },
		state: { rowSelection, sorting, columnFilters }
	})
	const selectedRows = {
		total: table.getFilteredSelectedRowModel().rows.length,
		selected: table.getFilteredRowModel().rows.length
	}
	const stockColumn = table.getColumn('stock')
	const productColumn = table.getColumn('product')
	return (
		<div className="rounded border">
			<header className='flex-1 p-4'>
				<FilterByStock
					value={stockColumn?.getFilterValue() as string}
					onChange={(value) => stockColumn?.setFilterValue(value)}
				/>
				<BaseInput
					value={(productColumn?.getFilterValue() as string) ?? ''}
					onChange={(e) => productColumn?.setFilterValue(e.target.value)}
					placeholder='Search...'
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

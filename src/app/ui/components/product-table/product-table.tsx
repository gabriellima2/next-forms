'use client'
import { useState } from 'react'
import {  ColumnFiltersState, SortingState, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'

import { ProductTableHeader } from './components/product-table-header'
import { ProductTableBody } from './components/product-table-body'
import { BaseInput, SelectedRowsCounter } from '../../atoms'
import { Table } from '../table'

import { productTableColumns } from './helpers/product-table-columns'
import type { ProductEntity } from '@/entities/product.entity'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../select'
import { StockMessage } from '@/helpers/stock-message'
import { StockFilterValues, stockFilter } from './helpers/stock-filter'
import { productFilter } from './helpers/product-filter'

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
	return (
		<div className="rounded border">
			<header className='flex-1 p-4'>
				<Select
					value={(table.getColumn('stock')?.getFilterValue() as string) ?? StockFilterValues.All}
					onValueChange={(value) => table.getColumn('stock')?.setFilterValue(value)}
				>
					<SelectTrigger className='w-[180px] rounded'>
						<SelectValue placeholder='Stock' />
					</SelectTrigger>
					<SelectContent className='rounded'>
						<SelectItem value={StockFilterValues.All} defaultChecked>All</SelectItem>
						<SelectItem value={StockFilterValues.InStock}>{StockMessage.InStock}</SelectItem>
						<SelectItem value={StockFilterValues.OutOfStock}>{StockMessage.OutOfStock}</SelectItem>
					</SelectContent>
				</Select>
				<BaseInput
					value={(table.getColumn('product')?.getFilterValue() as string) ?? ''}
					onChange={(e) => table.getColumn('product')?.setFilterValue(e.target.value)}
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

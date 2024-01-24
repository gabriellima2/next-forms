'use client'
import { useState } from 'react'
import {  getCoreRowModel, useReactTable } from '@tanstack/react-table'

import { ProductTableHeader } from './components/product-table-header'
import { ProductTableBody } from './components/product-table-body'
import { SelectedRowsCounter } from '../../atoms'
import { Table } from '../table'

import { productTableColumns } from './helpers/product-table-columns'
import type { ProductEntity } from '@/entities/product.entity'

type ProductTableProps = {
	products: ProductEntity[]
}

export function ProductTable(props: ProductTableProps) {
	const { products } = props
	const [rowSelection, setRowSelection] = useState({})
	const table = useReactTable({
		data: products,
		columns: productTableColumns,
		getCoreRowModel: getCoreRowModel(),
		onRowSelectionChange: setRowSelection,
		state: { rowSelection }
	})
	const selectedRows = {
		total: table.getFilteredSelectedRowModel().rows.length,
		selected: table.getFilteredRowModel().rows.length
	}
	return (
		<div className="rounded border">
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

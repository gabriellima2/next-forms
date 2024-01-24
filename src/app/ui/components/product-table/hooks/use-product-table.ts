import {
	useReactTable,
	getCoreRowModel,
	getSortedRowModel,
	getFilteredRowModel,
	type Table,
} from '@tanstack/react-table'

import { useProductTableInteractions } from './use-product-table-interactions'

import { productTableColumns } from '../helpers/product-table-columns'
import { filters } from '../helpers/filters'

import type { ProductEntity } from '@/entities/product.entity'

export type UseProductTableParams = {
	products: ProductEntity[]
}

export type UseProductTableReturn = {
	table: Table<ProductEntity>
	selectedRows: {
		total: number,
		selected: number,
	}
}

export function useProductTable(params: UseProductTableParams): UseProductTableReturn {
	const { products } = params
	const {
		columnFilters,
		rowSelection,
		sorting,
		onColumnFiltersChange,
		onRowSelectionChange,
		onSortingChange
	} = useProductTableInteractions()
	const table = useReactTable({
		data: products,
		columns: productTableColumns,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnFiltersChange,
		onRowSelectionChange,
		onSortingChange,
		filterFns: { ...filters },
		state: { rowSelection, sorting, columnFilters }
	})
	return {
		table,
		selectedRows: {
			total: table.getFilteredSelectedRowModel().rows.length,
			selected: table.getFilteredRowModel().rows.length
		},
	}
}

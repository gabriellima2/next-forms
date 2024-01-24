import { useState } from 'react'
import type { ColumnFiltersState, SortingState } from '@tanstack/react-table'

export function useProductTableInteractions() {
	const [rowSelection, setRowSelection] = useState({})
	const [sorting, setSorting] = useState<SortingState>([])
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
	return {
		rowSelection,
		sorting,
		columnFilters,
		onColumnFiltersChange: setColumnFilters,
		onRowSelectionChange: setRowSelection,
		onSortingChange: setSorting,
	}
}

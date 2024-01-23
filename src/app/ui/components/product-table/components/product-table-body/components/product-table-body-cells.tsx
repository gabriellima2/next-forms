import { flexRender, type Cell } from '@tanstack/react-table'

import { TableCell } from '@/app/ui/components/table'
import type { ProductEntity } from '@/entities/product.entity'

type ProductTableBodyCellsProps = {
	cells: Cell<ProductEntity, unknown>[]
}

export function ProductTableBodyCells(props: ProductTableBodyCellsProps) {
	const { cells } = props
	return (
		<>
			{cells.map((cell) => (
				<TableCell key={cell.id}>
					{flexRender(cell.column.columnDef.cell, cell.getContext())}
				</TableCell>
			))}
		</>
	)
}

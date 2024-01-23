import { Row } from '@tanstack/react-table'

import { ProductTableBodyCells } from './components/product-table-body-cells'
import { TableBody, TableRow } from '../../../table'
import { NoResults } from './components/no-results'

import type { ProductEntity } from '@/entities/product.entity'

type ProductTableBodyProps = {
	rows: Row<ProductEntity>[] | undefined
}

export function ProductTableBody(props: ProductTableBodyProps) {
	const { rows } = props
	if (!rows || !rows.length) return <NoResults />
	return (
		<TableBody>
			{rows.map((row) => (
				<TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
					<ProductTableBodyCells cells={row.getVisibleCells()} />
				</TableRow>
			))}
		</TableBody>
	)
}

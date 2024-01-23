import { flexRender, type Header } from '@tanstack/react-table'

import { TableHead } from '@/app/ui/components/table'
import type { ProductEntity } from '@/entities/product.entity'

type ProductTableHeaderItemProps = {
	headers: Header<ProductEntity, unknown>[]
}

export function ProductTableHeaderItem(props: ProductTableHeaderItemProps) {
	const { headers } = props
	return (
		<>
			{headers.map((header) => (
				<TableHead key={header.id}>
					{!header.isPlaceholder && flexRender(header.column.columnDef.header, header.getContext())}
				</TableHead>
			))}
		</>
	)
}

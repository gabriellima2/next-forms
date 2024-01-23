import { type HeaderGroup } from '@tanstack/react-table'

import { ProductTableHeaderItem } from './components/product-table-header-item'
import { TableHeader, TableRow } from '@/app/ui/components/table'

import type { ProductEntity } from '@/entities/product.entity'

type ProductTableHeaderProps = {
	groups: HeaderGroup<ProductEntity>[]
}

export function ProductTableHeader(props: ProductTableHeaderProps) {
	const { groups } = props
	return (
		<TableHeader>
			{groups.map((group) => (
				<TableRow key={group.id}>
					<ProductTableHeaderItem headers={group.headers} />
				</TableRow>
			))}
		</TableHeader>
	)
}

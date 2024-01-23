import { TableCell, TableRow } from '@/app/ui/components/table'
import { productTableColumns } from '../../../helpers/product-table-columns'

export function NoResults() {
	return (
		<TableRow>
			<TableCell colSpan={productTableColumns.length} className="h-24 text-center">
        No results
			</TableCell>
		</TableRow>
	)
}

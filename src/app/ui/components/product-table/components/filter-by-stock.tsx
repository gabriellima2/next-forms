import { StockMessage } from '@/helpers/stock-message'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../select'
import { StockFilterValues } from '../helpers/filters/stock-filter'

type FilterByStockProps = {
	value?: string
	onChange: (value: StockFilterValues) => void
}

export function FilterByStock(props: FilterByStockProps) {
	const { value = StockFilterValues.All, onChange } = props
	return (
		<Select
			value={value}
			onValueChange={(value) => onChange(value as StockFilterValues)}
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
	)
}

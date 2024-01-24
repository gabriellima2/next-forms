type SelectedRowsCounterProps = {
	total: number
	totalSelected: number
}

export function SelectedRowsCounter(props: SelectedRowsCounterProps) {
	const { total, totalSelected } = props
	return (
		<small className="text-sm text-muted-foreground">
			{total} of {totalSelected} row(s) selected
		</small>
	)
}

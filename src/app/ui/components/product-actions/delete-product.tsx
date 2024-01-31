type DeleteProductProps = {
	trigger:  React.JSX.Element
}

export const DeleteProduct = (props: DeleteProductProps) => {
	const { trigger } = props
	return (
		<>
			{trigger}
		</>
	)
}


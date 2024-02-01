import { UseDeleteProductReturn, useDeleteProduct } from './hooks/use-delete-product'

type DeleteProductProps = {
	trigger: (props: Pick<UseDeleteProductReturn, 'handleDelete'>) => React.JSX.Element
}

export const DeleteProduct = (props: DeleteProductProps) => {
	const { trigger } = props
	const { handleDelete } = useDeleteProduct()
	return (
		<>
			{trigger({ handleDelete })}
		</>
	)
}


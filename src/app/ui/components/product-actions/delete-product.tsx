import { useToast } from '@/hooks/use-toast'

import { deleteProduct } from '@/app/actions'
import { ErrorMessages } from '@/constants/error-messages'

type TriggerProps = { handleDelete: (id: string) => Promise<void> }

type DeleteProductProps = {
	trigger: (props: TriggerProps) => React.JSX.Element
}

export const DeleteProduct = (props: DeleteProductProps) => {
	const { trigger } = props
	const { toast } = useToast()

	const handleDelete = async (id: string) => {
		try {
			await deleteProduct(id)
			toast({ title: 'Deleted', description: 'The product was successfully deleted' })
		} catch (err) {
			const message = (err as Error).message ?? ErrorMessages.UnexpectedError
			toast({ title: 'Error', description: message })
		}
	}

	return (
		<>
			{trigger({ handleDelete })}
		</>
	)
}


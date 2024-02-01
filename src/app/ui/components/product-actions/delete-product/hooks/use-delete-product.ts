import { useToast } from '@/hooks/use-toast'

import { deleteProduct } from '@/app/actions'
import { ErrorMessages } from '@/constants/error-messages'

export type UseDeleteProductReturn = { handleDelete: (id: string) => Promise<void> }

export function useDeleteProduct() {
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

	return { handleDelete }
}

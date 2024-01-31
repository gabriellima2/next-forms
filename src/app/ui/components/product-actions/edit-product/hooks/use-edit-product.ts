import { useState, type Dispatch, type SetStateAction } from 'react'
import { editProduct } from '@/app/product/actions'

type UseEditProductParams = { id: number }
type UseEditProductReturn = {
	open: boolean
	onOpenChange: Dispatch<SetStateAction<boolean>>
	handleFormAction: (formData: FormData) => Promise<void>
}

export function useEditProduct(params: UseEditProductParams): UseEditProductReturn {
	const { id } = params
	const [isOpen, setIsOpen] = useState(false)
	const action = editProduct.bind(null, id)

	const handleFormAction = async (formData: FormData) => {
		await action(formData)
		setIsOpen(false)
	}

	return {
		open: isOpen,
		onOpenChange: setIsOpen,
		handleFormAction
	}
}

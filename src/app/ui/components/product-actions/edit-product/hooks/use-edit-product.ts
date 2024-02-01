import { useState, type Dispatch, type SetStateAction } from 'react'

import { useForm } from '@/hooks/use-form'
import { editProduct } from '@/app/actions'

import type { ProductEntity } from '@/entities/product.entity'

type UseEditProductReturn = {
	open: boolean
	onOpenChange: Dispatch<SetStateAction<boolean>>
	action: (payload: FormData) => void
}

export function useEditProduct(): UseEditProductReturn {
	const [isOpen, setIsOpen] = useState(false)
	const { action } = useForm<ProductEntity>({action: editProduct, onSuccess: () => setIsOpen(false)})
	return {
		open: isOpen,
		onOpenChange: setIsOpen,
		action
	}
}

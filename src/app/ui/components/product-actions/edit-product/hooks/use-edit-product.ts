import { useState, type Dispatch, type SetStateAction, useEffect } from 'react'
import { useFormState } from 'react-dom'

import { useToast } from '@/hooks/use-toast'
import { editProduct } from '@/app/actions'

type UseEditProductReturn = {
	open: boolean
	onOpenChange: Dispatch<SetStateAction<boolean>>
	action: (formData: FormData) => void
}

export function useEditProduct(): UseEditProductReturn {
	const [state, action] = useFormState(editProduct, {})
	const [isOpen, setIsOpen] = useState(false)
	const { toast } = useToast()

	useEffect(() => {
		if (state.success) {
			toast({ title: 'Success', description: 'Product edited successfully' })
			setIsOpen(false)
		}
	}, [toast, state.success])

	useEffect(() => {
		if (state.errors && state.errors.submit) {
			toast({ title: 'Error', description: state.errors.submit })
		}
	}, [toast, state.errors])

	return {
		open: isOpen,
		onOpenChange: setIsOpen,
		action
	}
}

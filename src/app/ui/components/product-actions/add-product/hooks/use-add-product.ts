import { useEffect, useRef, type MutableRefObject } from 'react'
import { useFormState } from 'react-dom'

import { useToast } from '@/hooks/use-toast'
import { createProduct, type ProductActionsFormState } from '@/app/actions'

type UseAddProductReturn = {
	formRef: MutableRefObject<HTMLFormElement | null>
	state: ProductActionsFormState
	action: (formData: FormData) => void
}

export function useAddProduct(): UseAddProductReturn {
	const formRef = useRef<HTMLFormElement | null>(null)
	const [state, action] = useFormState(createProduct, {})
	const { toast } = useToast()

	useEffect(() => {
		if (state.success) {
			toast({ title: 'Success', description: 'Product added successfully' })
			formRef.current?.reset()
		}
	}, [toast, state.success])

	useEffect(() => {
		if (state.errors && state.errors.submit) {
			toast({ title: 'Error', description: state.errors.submit })
		}
	}, [toast, state.errors])

	return {
		formRef,
		state,
		action
	}
}

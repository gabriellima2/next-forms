import { useRef, useCallback, type MutableRefObject } from 'react'

import { useForm } from '@/hooks/use-form'
import { createProduct } from '@/app/actions'

import type { ProductEntity } from '@/entities/product.entity'
import type { ActionEntity } from '@/entities/action.entity'

type UseAddProductReturn = {
	formRef: MutableRefObject<HTMLFormElement | null>
	state: ActionEntity<ProductEntity>
	action: (payload: FormData) => void
}

export function useAddProduct(): UseAddProductReturn {
	const formRef = useRef<HTMLFormElement | null>(null)
	const onSuccess = useCallback(() => formRef.current?.reset(), [formRef])
	const { state, action } = useForm<ProductEntity>({action: createProduct, onSuccess})
	return {
		formRef,
		state,
		action
	}
}

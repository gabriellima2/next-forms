import {  useRef, type MutableRefObject } from 'react'

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
	const { state, action } = useForm<ProductEntity>({action: createProduct, onSuccess: () => formRef.current?.reset()})
	return {
		formRef,
		state,
		action
	}
}

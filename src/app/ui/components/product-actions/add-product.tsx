'use client'
import React, { useEffect, useRef } from 'react'
import { useFormState } from 'react-dom'

import { useToast } from '@/hooks/use-toast'

import { ProductDialog } from '../product-dialog'
import { ProductForm } from '../product-form'

import { createProduct } from '@/app/product/actions'

type AddProductProps = {
	trigger: React.JSX.Element
}

export function AddProduct(props: AddProductProps) {
	const { trigger } = props
	const formRef = useRef<HTMLFormElement | null>(null)
	const [state, formAction] = useFormState(createProduct, {})
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

	return (
		<ProductDialog.Root>
			<ProductDialog.Trigger>
				{trigger}
			</ProductDialog.Trigger>
			<ProductDialog.Content className='flex flex-col gap-8'>
				<ProductDialog.Header title='New Product' description='Fill in the fields to add a new product' />
				<ProductForm.Root ref={formRef} action={formAction}>
					<ProductForm.Fieldset>
						<ProductForm.Fields.Name errorMessage={state.errors?.validation?.name} />
						<ProductForm.Fields.ImageUrl errorMessage={state.errors?.validation?.imageUrl} />
						<ProductForm.Fields.Price errorMessage={state.errors?.validation?.price} />
						<ProductForm.Fields.Category errorMessage={state.errors?.validation?.category} />
						<ProductForm.Fields.Stock errorMessage={state.errors?.validation?.stock} />
					</ProductForm.Fieldset>
					<ProductDialog.Footer>
						<ProductDialog.Close>Cancel</ProductDialog.Close>
						<ProductForm.SubmitButton>Add</ProductForm.SubmitButton>
					</ProductDialog.Footer>
				</ProductForm.Root>
			</ProductDialog.Content>
		</ProductDialog.Root>
	)
}

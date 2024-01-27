'use client'
import { useFormState } from 'react-dom'

import { Button, TextError } from '@/app/ui/atoms'
import { ProductDialog } from '../product-dialog'
import { ProductForm } from '../product-form'

import { FormState, createProduct } from '@/app/product/actions'

export function AddProduct() {
	const [state, formAction] = useFormState<FormState>(createProduct, { message: null })
	return (
		<ProductDialog.Root>
			<ProductDialog.Trigger>
				<Button>New Product</Button>
			</ProductDialog.Trigger>
			<ProductDialog.Content className='flex flex-col gap-8'>
				<ProductDialog.Header title='New Product' description='Fill in the fields to add a new product' />
				<ProductForm.Root action={formAction}>
					<ProductForm.Fieldset>
						<ProductForm.Fields.Name errorMessage={state.errors?.fields?.name} />
						<ProductForm.Fields.ImageUrl errorMessage={state.errors?.fields?.imageUrl} />
						<ProductForm.Fields.Price errorMessage={state.errors?.fields?.price} />
						<ProductForm.Fields.Category errorMessage={state.errors?.fields?.category} />
						<ProductForm.Fields.Stock errorMessage={state.errors?.fields?.stock} />
					</ProductForm.Fieldset>
					{state.errors?.submit && <TextError>{state.errors.submit}</TextError>}
					<ProductDialog.Footer>
						<ProductDialog.Close>Cancel</ProductDialog.Close>
						<ProductForm.SubmitButton>Add</ProductForm.SubmitButton>
					</ProductDialog.Footer>
				</ProductForm.Root>
			</ProductDialog.Content>
		</ProductDialog.Root>
	)
}

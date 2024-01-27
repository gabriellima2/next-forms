'use client'
import { useFormState } from 'react-dom'

import { Button, TextError } from '@/app/ui/atoms'
import { ProductDialog } from '../product-dialog'
import { ProductForm } from '../product-form'

import { createProduct } from '@/app/product/actions'

export function AddProduct() {
	const [state, formAction] = useFormState(createProduct, {})
	return (
		<ProductDialog.Root>
			<ProductDialog.Trigger>
				<Button>New Product</Button>
			</ProductDialog.Trigger>
			<ProductDialog.Content className='flex flex-col gap-8'>
				<ProductDialog.Header title='New Product' description='Fill in the fields to add a new product' />
				<ProductForm.Root action={formAction}>
					<ProductForm.Fieldset>
						<ProductForm.Fields.Name errorMessage={state.errors?.validation?.name} />
						<ProductForm.Fields.ImageUrl errorMessage={state.errors?.validation?.imageUrl} />
						<ProductForm.Fields.Price errorMessage={state.errors?.validation?.price} />
						<ProductForm.Fields.Category errorMessage={state.errors?.validation?.category} />
						<ProductForm.Fields.Stock errorMessage={state.errors?.validation?.stock} />
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

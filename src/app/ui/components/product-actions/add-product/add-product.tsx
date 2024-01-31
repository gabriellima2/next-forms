'use client'
import { ProductDialog } from '../../product-dialog'
import { ProductForm } from '../../product-form'

import { useAddProduct } from './hooks/use-add-product'

type AddProductProps = {
	trigger: React.JSX.Element
}

export function AddProduct(props: AddProductProps) {
	const { trigger } = props
	const { formRef, state, action } = useAddProduct()
	return (
		<ProductDialog.Root>
			<ProductDialog.Trigger>
				{trigger}
			</ProductDialog.Trigger>
			<ProductDialog.Content className='flex flex-col gap-8'>
				<ProductDialog.Header title='New Product' description='Fill in the fields to add a new product' />
				<ProductForm.Root ref={formRef} action={action}>
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

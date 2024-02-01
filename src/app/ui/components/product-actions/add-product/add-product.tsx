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
	const errors = typeof state.message !== 'string' ? state.message : null
	return (
		<ProductDialog.Root>
			<ProductDialog.Trigger>
				{trigger}
			</ProductDialog.Trigger>
			<ProductDialog.Content className='flex flex-col gap-8'>
				<ProductDialog.Header title='New Product' description='Fill in the fields to add a new product' />
				<ProductForm.Root ref={formRef} action={action}>
					<ProductForm.Fieldset>
						<ProductForm.Fields.Name errorMessage={errors?.name} />
						<ProductForm.Fields.ImageUrl errorMessage={errors?.image_url} />
						<ProductForm.Fields.Price errorMessage={errors?.price} />
						<ProductForm.Fields.Category errorMessage={errors?.category} />
						<ProductForm.Fields.Stock errorMessage={errors?.stock} />
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

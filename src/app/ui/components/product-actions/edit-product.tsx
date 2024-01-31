import { ProductDialog } from '../product-dialog'
import { ProductForm } from '../product-form'

import type { ProductEntity } from '@/entities/product.entity'
import { editProduct } from '@/app/product/actions'

type EditProductProps = {
	id: number
	values: ProductEntity
	trigger: React.JSX.Element
}

export function EditProduct(props: EditProductProps) {
	const { id, values, trigger } = props
	return (
		<ProductDialog.Root>
			<ProductDialog.Trigger asChild>
				{trigger}
			</ProductDialog.Trigger>
			<ProductDialog.Content className='flex flex-col gap-8'>
				<ProductDialog.Header title='Edit Product' description='Change the fields you want to edit' />
				<ProductForm.Root action={editProduct.bind(null, id)}>
					<ProductForm.Fieldset>
						<ProductForm.Fields.Name defaultValue={values.name} />
						<ProductForm.Fields.ImageUrl defaultValue={values.imageUrl} />
						<ProductForm.Fields.Price defaultValue={values.price} />
						<ProductForm.Fields.Category defaultValue={values.category} />
						<ProductForm.Fields.Stock defaultValue={values.stock} />
					</ProductForm.Fieldset>
					<ProductDialog.Footer>
						<ProductDialog.Close>Cancel</ProductDialog.Close>
						<ProductForm.SubmitButton>Edit</ProductForm.SubmitButton>
					</ProductDialog.Footer>
				</ProductForm.Root>
			</ProductDialog.Content>
		</ProductDialog.Root>
	)
}

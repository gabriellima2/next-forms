import { ProductDialog } from '../../product-dialog'
import { ProductForm } from '../../product-form'

import type { ProductEntity } from '@/entities/product.entity'

type EditProductProps = {
	values: ProductEntity
	renderTrigger: () => React.JSX.Element
}

export function EditProduct(props: EditProductProps) {
	const { values, renderTrigger } = props
	return (
		<ProductDialog.Root>
			<ProductDialog.Trigger asChild>
				{renderTrigger()}
			</ProductDialog.Trigger>
			<ProductDialog.Content className='flex flex-col gap-8'>
				<ProductDialog.Header title='Edit Product' description='Fill in the fields to add a new product' />
				<ProductForm.Root>
					<ProductForm.Fieldset>
						<ProductForm.Fields.Name value={values.name} />
						<ProductForm.Fields.ImageUrl value={values.imageUrl} />
						<ProductForm.Fields.Price value={values.price} />
						<ProductForm.Fields.Category value={values.category} />
						<ProductForm.Fields.Stock value={values.stock} />
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

import { ProductDialog } from '../product-dialog'
import { ProductForm } from '../product-form'
import { Button } from '@/app/ui/atoms'

export function AddProduct() {
	return (
		<ProductDialog.Root>
			<ProductDialog.Trigger>
				<Button>New Product</Button>
			</ProductDialog.Trigger>
			<ProductDialog.Content className='flex flex-col gap-8'>
				<ProductDialog.Header title='New Product' description='Fill in the fields to add a new product' />
				<ProductForm.Root>
					<ProductForm.Fieldset>
						<ProductForm.Fields.Name />
						<ProductForm.Fields.ImageUrl />
						<ProductForm.Fields.Price />
						<ProductForm.Fields.Category />
						<ProductForm.Fields.Stock />
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

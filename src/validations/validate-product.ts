import { refineZodValidationError } from '@/helpers/refine-zod-validation-error'
import { ProductSchema } from '@/schemas/product.schema'

import type { ProductEntity } from '@/entities/product.entity'

type Product = Partial<Omit<ProductEntity, 'id'>>

export function validateProduct(product: Product) {
	const validatedProduct = ProductSchema.safeParse(product)
	if (validatedProduct.success) return
	return refineZodValidationError(validatedProduct)
}

'use server'
import { sql } from '@vercel/postgres'

import { ProductEntity } from '@/entities/product.entity'
import { ProductSchema } from '@/schemas/product.schema'

type FieldErrors = Partial<{
		[P in keyof Omit<ProductEntity, 'id'>]: string;
		}>;
export type FormState = {
	errors?: {
		fields?: FieldErrors
		submit?: string
	}
}
type Fields = Partial<Omit<ProductEntity, 'id'>>

function getFieldsValue(formData: FormData): Fields {
	const stock = formData.get('stock')?.toString()
	return {
		name: formData.get('name')?.toString() || undefined,
		imageUrl: formData.get('imageUrl')?.toString() || undefined,
		category: formData.get('category')?.toString() || undefined,
		price: formData.get('price')?.toString() || undefined,
		stock: stock ? Number(stock) : undefined,
	}
}

function validate(product: Fields) {
	const validatedProduct = ProductSchema.safeParse(product)
	if (!validatedProduct.success) {
		const { fieldErrors } = validatedProduct.error.flatten()
		const refinedErrors = Object.entries(fieldErrors).reduce((acc, current) => {
			const [key, errors] = current
			acc = { ...acc, [key]: errors[0] }
			return acc
		}, {} as FieldErrors)
		return { fieldErrors: refinedErrors  }
	}
	return {}
}

export async function createProduct(prevState: FormState, formData: FormData): Promise<FormState> {
	const product = getFieldsValue(formData)
	const { fieldErrors } = validate(product)
	if (fieldErrors) return { errors: { fields: fieldErrors } }
	try {
		await sql`
			INSERT INTO proucts (name, imageUrl, price, category, stock)
			VALUES (${product.name}, ${product.imageUrl}, ${product.price}, ${product.category}, ${product.stock})
		`
		return {}
	} catch (err) {
		return { errors: { submit: 'An unexpected error occurred please try again later' } }
	}
}

export async function editProduct(id: string, formData: FormData) {
	console.log(id, formData)
}

export async function deleteProduct(id: string) {
	console.log(id)
}

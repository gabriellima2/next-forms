'use server'
import { sql } from '@vercel/postgres'

import { productValidation } from '@/validations/product.validation'
import { ErrorMessages } from '../constants/error-messages'

import type { ProductEntity } from '@/entities/product.entity'

export type ProductActionsFormState = {
	success?: boolean
	errors?: {
		validation?: Partial<{
			[P in keyof Omit<ProductEntity, 'id'>]: string;
		}>
		submit?: string
	}
}

function getFormValues(formData: FormData): Partial<Omit<ProductEntity, 'id'>> {
	const stock = formData.get('stock')?.toString()
	return {
		name: formData.get('name')?.toString() || undefined,
		imageUrl: formData.get('imageUrl')?.toString() || undefined,
		category: formData.get('category')?.toString() || undefined,
		price: formData.get('price')?.toString() || undefined,
		stock: stock ? Number(stock) : undefined,
	}
}

export async function createProduct(
	_: ProductActionsFormState,
	formData: FormData
): Promise<ProductActionsFormState> {
	const product = getFormValues(formData)
	const validationError = productValidation(product)
	if (validationError) return { success: false, errors: { validation: validationError } }
	try {
		await sql`
			INSERT INTO products (name, imageUrl, price, category, stock)
			VALUES (${product.name}, ${product.imageUrl}, ${product.price}, ${product.category}, ${product.stock})
		`
		return { success: true }
	} catch (err) {
		return { success: false, errors: { submit: ErrorMessages.UnexpectedError } }
	}
}

export async function editProduct(id: number, formData: FormData) {
	console.log(id, formData)
}

export async function deleteProduct(id: number) {
	await sql`DELETE FROM products WHERE products.id = ${id};`
}

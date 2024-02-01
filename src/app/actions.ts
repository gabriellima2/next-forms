'use server'
import { sql } from '@vercel/postgres'
import { revalidatePath } from 'next/cache'

import { validateProduct } from '@/validations/validate-product'
import { ErrorMessages } from '@/constants/error-messages'
import { parseDecimal } from '@/helpers/parse-decimal'

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

function getFormValues(formData: FormData): Partial<ProductEntity> {
	const stock = formData.get('stock')?.toString()
	return {
		id: formData.get('id')?.toString() || undefined,
		name: formData.get('name')?.toString() || undefined,
		image_url: formData.get('imageUrl')?.toString() || undefined,
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
	const validationError = validateProduct(product)
	if (validationError) return { success: false, errors: { validation: validationError } }
	try {
		await sql`
			INSERT INTO products (name, image_url, price, category, stock)
			VALUES (${product.name}, ${product.image_url}, ${parseDecimal(product.price!)}, ${product.category}, ${product.stock})
		`
		revalidatePath('/')
		return { success: true }
	} catch (err) {
		const message = (err as Error).message ?? ErrorMessages.UnexpectedError
		return { success: false, errors: { submit: message } }
	}
}

export async function editProduct(
	_: ProductActionsFormState,
	formData: FormData
): Promise<ProductActionsFormState> {
	const product = getFormValues(formData)
	console.log(product)
	const error = validateProduct(product)
	if (error) return { success: false, errors: { validation: error } }
	try {
		await sql`
		UPDATE products
		SET name = ${product.name}, image_url = ${product.image_url}, price = ${parseDecimal(product.price!)}, category = ${product.category}, stock = ${product.stock}
		WHERE id = ${product.id}`
		revalidatePath('/')
		return { success: true }
	} catch (err) {
		const message = (err as Error).message ?? ErrorMessages.UnexpectedError
		return { success: false, errors: { submit: message } }
	}
}

export async function deleteProduct(id: string) {
	await sql`DELETE FROM products WHERE products.id = ${id};`
}

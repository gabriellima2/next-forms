'use server'
import { sql } from '@vercel/postgres'
import { revalidatePath } from 'next/cache'

import { validateProduct } from '@/validations/validate-product'
import { ErrorMessages } from '@/constants/error-messages'
import { parseDecimal } from '@/helpers/parse-decimal'

import type { ProductEntity } from '@/entities/product.entity'
import type { ActionEntity } from '@/entities/action.entity'

type State = ActionEntity<ProductEntity>

function getFormValues(formData: FormData): Partial<ProductEntity> {
	const getValue = (id: string) => formData.get(id)?.toString() || undefined
	const stock = getValue('stock')
	return {
		id: getValue('id'),
		name: getValue('name'),
		image_url: getValue('imageUrl'),
		category: getValue('category'),
		price: getValue('price'),
		stock: stock ? Number(stock) : undefined,
	}
}

export async function createProduct(
	_: State,
	formData: FormData
): Promise<State> {
	const product = getFormValues(formData)
	const errors = validateProduct(product)
	if (errors) return { success: false, message: errors }
	try {
		await sql`
			INSERT INTO products (name, image_url, price, category, stock)
			VALUES (${product.name}, ${product.image_url}, ${parseDecimal(product.price!)}, ${product.category}, ${product.stock})
		`
		revalidatePath('/')
		return { success: true, message: 'The product was created successfully' }
	} catch (err) {
		const message = (err as Error).message ?? ErrorMessages.UnexpectedError
		return { success: false, message }
	}
}

export async function editProduct(
	_: State,
	formData: FormData
): Promise<State> {
	const product = getFormValues(formData)
	const errors = validateProduct(product)
	if (errors) return { success: false, message: errors }
	try {
		await sql`
		UPDATE products
		SET name = ${product.name}, image_url = ${product.image_url}, price = ${parseDecimal(product.price!)}, category = ${product.category}, stock = ${product.stock}
		WHERE id = ${product.id}`
		revalidatePath('/')
		return { success: true, message: 'The product was edited successfully' }
	} catch (err) {
		const message = (err as Error).message ?? ErrorMessages.UnexpectedError
		return { success: false, message }
	}
}

export async function deleteProduct(id: string) {
	await sql`DELETE FROM products WHERE products.id = ${id};`
	revalidatePath('/')
}

import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

import type { ProductEntity } from '@/entities/product.entity'

export async function GET() {
	try {
		const { rows } = await sql<ProductEntity>`SELECT * FROM products;`
		return NextResponse.json(rows)
	} catch (err) {
		return NextResponse.json({ message: (err as Error).message })
	}
}

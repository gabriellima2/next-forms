import { Suspense } from 'react'
import { sql } from '@vercel/postgres'

import { ProductTable } from './ui/components'
import type { ProductEntity } from '@/entities/product.entity'


export default async function Home() {
	const { rows } = await sql<ProductEntity>`SELECT * FROM products;`
	return (
		<div className="container mx-auto py-10">
			<Suspense fallback={<p>Loading</p>}>
				<ProductTable products={rows} />
			</Suspense>
		</div>
	)
}

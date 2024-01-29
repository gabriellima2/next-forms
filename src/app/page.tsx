import { Suspense } from 'react'

import { ProductTable } from './ui/components'
import { makeProductServiceImpl } from '@/services/impl/product.service.impl'

const service = makeProductServiceImpl('http://localhost:3000')

export default async function Home() {
	const products = await service.getAll()
	return (
		<div className="container mx-auto py-10">
			<Suspense fallback={<p>Loading</p>}>
				<ProductTable products={products} />
			</Suspense>
		</div>
	)
}

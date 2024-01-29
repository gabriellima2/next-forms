import type { ProductEntity } from '@/entities/product.entity'
import type { ProductService } from '../product.service'

class ProductServiceImpl implements ProductService {
	constructor(private readonly baseUrl: string) {}
	async getAll(): Promise<ProductEntity[]> {
		const url = `${this.baseUrl}/api/products`
		const response = await fetch(url, { method: 'GET' })
		const data = await response.json()
		if (!data || !Array.isArray(data)) throw new Error()
		return data as ProductEntity[]
	}
}

export const makeProductServiceImpl = (baseUrl: string) => new ProductServiceImpl(baseUrl)

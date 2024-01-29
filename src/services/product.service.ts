import type { ProductEntity } from '@/entities/product.entity'

export interface ProductService {
	getAll(): Promise<ProductEntity[]>
}

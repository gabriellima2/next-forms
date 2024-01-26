import { z } from 'zod'
import type { ProductEntity } from '@/entities/product.entity'

export const ProductSchema: z.ZodType<Omit<ProductEntity, 'id'>> = z.object({
	name: z.string().max(150),
	imageUrl: z.string().url().optional(),
	price: z.string(),
	category: z.string().max(50),
	stock: z.number().nonnegative()
})

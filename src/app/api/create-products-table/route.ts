import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

import { ErrorMessages } from '@/constants/error-messages'

export async function GET() {
	try {
		await sql`
			CREATE TABLE products (
				id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
				name VARCHAR(150) NOT NULL,
				image_url TEXT,
				price DECIMAL(15, 2) NOT NULL CHECK(price >= 0),
				category VARCHAR(50) NOT NULL,
				stock SMALLINT NOT NULL CHECK(stock >= 0)
			);
		`
		return NextResponse.json({ message: 'The "products" table was created successfully!' })
	} catch (err) {
		const message = (err as Error).message ?? ErrorMessages.UnexpectedError
		return NextResponse.json({ message })
	}
}

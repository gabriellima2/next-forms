'use client'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../table'
import { productTableColumns } from './helpers/product-table-columns'

export interface ProductEntity {
	id: string
	name: string
	imageUrl: string
	price: string
	category: string
	stock: number
}

const products: ProductEntity[] = [
	{
		id: '728ed52f',
		name: 'Husky Hailstorm',
		imageUrl: 'https://images.kabum.com.br/produtos/fotos/234051/teclado-mecanico-gamer-husky-gaming-hailstorm-preto-rgb-65-switch-gateron-red-abnt2-hgmo006_1672254568_g.jpg',
		price: '230,00',
		category: 'Mechanical Keyboard',
		stock: 20,
	}
]

export function ProductTable() {
	const table = useReactTable({
		data: products,
		columns: productTableColumns,
		getCoreRowModel: getCoreRowModel()
	})
	return (
		<div className="container mx-auto py-10">
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((group) => (
							<TableRow key={group.id}>
								{group.headers.map((header) => (
									<TableHead key={header.id}>
										{!header.isPlaceholder && flexRender(header.column.columnDef.header, header.getContext())}
									</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={productTableColumns.length} className="h-24 text-center">
                No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
		</div>

	)
}

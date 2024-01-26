'use server'

export async function createProduct(formData: FormData) {
	console.log(formData.get('name'))
}

export async function editProduct(id: string, formData: FormData) {
	console.log(id)
	console.log(formData)
}

export async function deleteProduct(id: string) {
	console.log(id)
}

/*
export type ActionEntity<Entity> = {
	success?: boolean
	errors?: {
		validation?: Partial<{
			[P in keyof Omit<Entity, 'id'>]: string;
		}>
		submit?: string
	}
}
*/

export type ActionEntity<Entity> = {
	success?: boolean
	message: string | Partial<{
		[P in keyof Omit<Entity, 'id'>]: string;
	}>
}

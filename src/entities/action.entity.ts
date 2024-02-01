export type ActionEntity<Entity> = {
	success?: boolean
	errors?: {
		validation?: Partial<{
			[P in keyof Omit<Entity, 'id'>]: string;
		}>
		submit?: string
	}
}

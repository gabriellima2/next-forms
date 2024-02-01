import { useEffect } from 'react'
import { useFormState } from 'react-dom'

import { useToast } from './use-toast'
import type { ActionEntity } from '@/entities/action.entity'

type UseFormParams<Entity extends object> = {
	action: (state: ActionEntity<Entity>, payload: FormData) => Promise<ActionEntity<Entity>>
	onSuccess?: () => unknown
	onError?: () => unknown
}
type UseFormReturn<Entity extends object> = {
	state: ActionEntity<Entity>
	action: (payload: FormData) => void
}

export function useForm<Entity extends object>(params: UseFormParams<Entity>): UseFormReturn<Entity> {
	const { action, onSuccess, onError } = params
	const [state, dispatch] = useFormState(action, {} as Awaited<ActionEntity<Entity>>)
	const { toast } = useToast()

	useEffect(() => {
		if (state.success) {
			toast({ title: 'Success', description: 'The action was successful' })
			onSuccess && onSuccess()
		}
	}, [toast, state.success])

	useEffect(() => {
		if (state.errors && state.errors.submit) {
			toast({ title: 'Error', description: state.errors.submit })
			onError && onError()
		}
	}, [toast, state.errors])

	return { state: state as ActionEntity<Entity>, action: dispatch }
}

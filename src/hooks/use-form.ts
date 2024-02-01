import { useEffect } from 'react'
import { useFormState } from 'react-dom'

import { useToast } from './use-toast'

import { ErrorMessages } from '@/constants/error-messages'
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
		const title = state.success ? 'Success' : 'Error'
		const message = typeof state.message === 'string' ? state.message : ErrorMessages.UnexpectedError
		if (typeof state.success === 'boolean') {
			toast({ title, description: message })
			state.success ? onSuccess && onSuccess() : onError && onError()
		}
	}, [toast, state])

	return { state: state as ActionEntity<Entity>, action: dispatch }
}

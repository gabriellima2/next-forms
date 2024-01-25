import { Button, type ButtonProps } from '.'

type PaginationButtonProps = ButtonProps

export function PaginationButton(props: PaginationButtonProps) {
	return <Button variant='secondary' size='sm' {...props} />
}

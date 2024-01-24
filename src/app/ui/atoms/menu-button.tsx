import { forwardRef } from 'react'
import { MoreHorizontal } from 'lucide-react'

import { Button, type ButtonProps } from '.'

type MenuButtonProps = Omit<ButtonProps, 'children'>

export const MenuButton = forwardRef<HTMLButtonElement, MenuButtonProps>((props, ref) => {
	return (
		<Button ref={ref} variant='ghost' size='sm' {...props}>
			<span className="sr-only">Open Menu</span>
			<MoreHorizontal className='w-4 h-4' />
		</Button>
	)
})

MenuButton.displayName = 'MenuButton'

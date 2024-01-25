import { type HTMLAttributes } from 'react'
import { type DialogProps } from '@radix-ui/react-dialog'

import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from './dialog'
import { Button, type ButtonProps } from '@/app/ui/atoms'

import { cn } from '@/helpers/cn'

type HeaderProps = { title: string; description?: string } & HTMLAttributes<HTMLDivElement>

const Root = (props: DialogProps) => <Dialog {...props} />

const Trigger = (props: ButtonProps) => (
	<DialogTrigger asChild {...props} />
)

const Content = DialogContent

const Header = (props: HeaderProps) => {
	const {title, description, className, ...rest} = props
	return (
		<DialogHeader className={cn(className, 'flex flex-col gap-2')} {...rest}>
			<DialogTitle>{title}</DialogTitle>
			{description && <DialogDescription>{description}</DialogDescription>}
		</DialogHeader>
	)
}

const Close = (props: ButtonProps) => {
	const { className, ...rest } = props
	return (
		<DialogClose asChild>
			<Button type="button" className={cn(className, 'flex-1')} variant='secondary' size='sm' {...rest} />
		</DialogClose>
	)
}

const Footer = (props: HTMLAttributes<HTMLDivElement>) => {
	const { className, ...rest } = props
	return (
		<DialogFooter className={cn(className, 'flex flex-row justify-between items-center')} {...rest} />
	)
}

export const ProductDialog = {
	Root,
	Trigger,
	Content,
	Header,
	Close,
	Footer
}

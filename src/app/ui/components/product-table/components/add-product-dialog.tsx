import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '../../dialog'

import { Button } from '@/app/ui/atoms'
import { Field } from '../..'

export function AddProductDialog() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>New Product</Button>
			</DialogTrigger>
			<DialogContent className='flex flex-col gap-8'>
				<DialogHeader className='flex flex-col gap-2'>
					<DialogTitle>New Product</DialogTitle>
					<DialogDescription>Fill in the fields to add a new product</DialogDescription>
				</DialogHeader>
				<form className='flex flex-col gap-8'>
					<section className='flex flex-col gap-6'>
						<Field type='text' id='name' labelText='Name' placeholder='Ex: Keychron K3' />
						<Field type='url' id='name' labelText='Image Url' placeholder='Ex: https://images.domain...' />
						<Field type='text' id='name' labelText='Price' placeholder='Ex: 580,00' />
						<Field type='text' id='name' labelText='Category' placeholder='Ex: Keyboard' />
						<Field type='number' id='name' labelText='Stock Amount' placeholder='Ex: 2' />
					</section>
					<DialogFooter className='flex flex-row justify-between items-center'>
						<DialogClose asChild>
							<Button type="button" className='flex-1' variant='secondary' size='sm'>Cancel</Button>
						</DialogClose>
						<Button type="submit" className='flex-1' size='sm'>Add</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	)
}

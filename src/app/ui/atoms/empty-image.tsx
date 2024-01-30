import { Image as Icon } from 'lucide-react'

export function EmptyImage() {
	return (
		<div className='flex items-center justify-center w-[40px] h-[40px] bg-input rounded'>
			<Icon size={18} color='#808080' />
		</div>
	)
}

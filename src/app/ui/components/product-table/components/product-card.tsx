import Image from 'next/image'

type ProductCardProps = {
	name: string
	imageUrl: string
}

export function ProductCard(props: ProductCardProps) {
	const { name, imageUrl } = props
	return (
		<div className='flex items-center gap-4'>
			<Image src={imageUrl} alt={`Image of ${name}`} width={40} height={40} />
			<p>{name}</p>
		</div>
	)
}

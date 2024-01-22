import Image from 'next/image'

export function ActivityIndicator() {
	return <Image src='/assets/activity-indicator.svg' alt="Loading..." width={24} height={24} />
}

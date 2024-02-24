"use client"
import { useRouter } from "next/navigation"
export const NtLink = ({
	children,
	href,
	className,
}: {
	children: React.ReactNode
	href: string
	className?: string
}) => {
	const router = useRouter()
	return (
		<div onClick={() => router.push(href)} className={className}>
			{children}
		</div>
	)
}

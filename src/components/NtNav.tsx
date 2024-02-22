"use client"

export const NtNav = ({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) => {
	return <div className={className}>{children}</div>
}

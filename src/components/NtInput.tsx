"use client"
import React, { useState } from "react"
import { cn } from "@/utils"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	prefix?: any
	inputClassName?: string
	focusClassName?: string
}
export const NtInput = ({
	prefix,
	inputClassName,
	className,
	focusClassName,
	...props
}: InputProps) => {
	const [Focus, setFocus] = useState(false)
	return (
		<div
			tabIndex={-1}
			className={cn(
				"group border text-light-6  border-light-2 hover:border-primary transition-colors duration-75 rounded-m space-x-1 flex h-[28px] w-full flex-row items-center",
				Focus ? "border-primary" : "",
				Focus ? focusClassName : "",
				className
			)}
		>
			<div className="ml-1 text-light-5">{prefix}</div>
			<input
				className={cn(
					"ml-2 outline-none h-full flex-1 rounded-m caret-primary placeholder:text-light-4 text-s bg-inherit",
					inputClassName
				)}
				{...props}
				onFocus={() => {
					setFocus(true)
				}}
				onBlur={() => {
					setFocus(false)
				}}
			></input>
		</div>
	)
}

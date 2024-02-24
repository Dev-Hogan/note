import React from "react"
import { MagnifyingGlassIcon, PlusCircledIcon } from "@radix-ui/react-icons"
import { cn } from "@/utils"
import { NtNav, NtMenus, NtInput, NtHeader } from "@/components"
import { overViewLinks } from "@/router"

export const NtSider = ({
	children,
	className,
}: {
	children?: React.ReactNode
	className?: string
}) => {
	return (
		<div
			className={cn(
				"flex flex-col h-screen w-[255px] border-r border-light-2 bg-light",
				className
			)}
		>
			{children}
		</div>
	)
}

export const NtContent = ({ children }: { children?: React.ReactNode }) => {
	return (
		<main className="flex flex-1 flex-col">
			<NtHeader></NtHeader>
			{children}
		</main>
	)
}

export const NtLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<div className={cn("w-full flex flex-1")}>
				<NtSider className="space-y-2 px-3 pt-6">
					<NtInput
						prefix={<MagnifyingGlassIcon />}
						className="bg-light-2  hover:bg-light "
						focusClassName="!bg-light "
						placeholder="搜索"
					></NtInput>
					<NtNav className="space-y-2 ">
						<div className="py-3 text-s text-light-5">概览</div>
						<NtMenus options={overViewLinks}></NtMenus>
					</NtNav>
					<NtNav className="space-y-2 ">
						<div className="py-3 flex justify-between items-center pr-3">
							<div className="text-s text-light-5">分类</div>
							<PlusCircledIcon className="cursor-pointer" />
						</div>
						<NtMenus options={overViewLinks}></NtMenus>
					</NtNav>
				</NtSider>
				<NtContent>{children}</NtContent>
			</div>
		</>
	)
}

import React from "react"
import { cn } from "@/utils"
import { NtNav, NtMenuItem, NtMenus, type Menus, NtInput } from "@/components"

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
	return <div className="flex flex-1 flex-col">{children}</div>
}

const menusOverView: Menus = [
	{ name: "全部", path: "/", icon: "icon" },
	{
		name: "聚焦中",
		path: "/focus",
		icon: "icon",
	},
	{
		name: "待回答",
		path: "/waitingAnswer",
		icon: "icon",
	},
	{
		name: "随机看",
		path: "/randomLook",
		icon: "icon",
	},
	{
		name: "废纸篓",
		path: "/wastebasket",
		icon: "icon",
	},
	{
		name: "辅助开发工具",
		path: "/dev",
		icon: "icon",
	},
]
export const NtLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<div className={cn("w-full flex flex-1")}>
				<NtSider className="space-y-2 px-3 pt-6">
					<NtInput
						className="bg-light-2  hover:bg-light "
						focusClassName="!bg-light "
						placeholder="搜索"
					></NtInput>
					<NtNav className="space-y-2 ">
						<div className="py-3 text-s text-light-5">概览</div>
						<NtMenus options={menusOverView}></NtMenus>
					</NtNav>
					<NtNav className="space-y-2 ">
						<div className="py-3 flex justify-between items-center pr-3">
							<div className="text-s text-light-5">分类</div>
							<div>icon</div>
						</div>
						<NtMenus options={menusOverView}></NtMenus>
					</NtNav>
				</NtSider>
				<NtContent>{children}</NtContent>
			</div>
		</>
	)
}

// "use client"
import React from "react"
import {
	MagnifyingGlassIcon,
	PlusCircledIcon,
	MixerHorizontalIcon,
	ChevronRightIcon,
} from "@radix-ui/react-icons"
import { cn } from "@/utils"
import {
	NtNav,
	NtMenus,
	NtInput,
	NtHeader,
	Popover,
	PopoverTrigger,
	PopoverContent,
	NtLink,
	Tooltip,
	TooltipContent,
	TooltipTrigger,
	TooltipProvider,
	// Dialog,
	// DialogContent,
	// DialogTrigger,
	// DialogFooter,
	// DialogClose,
	NtButton,
} from "@/components"
import { overViewLinks, type Menus } from "@/router"
import { Modal } from "antd"

export const NtSide = ({
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
		<main className="flex flex-1 flex-col px-7">
			<NtHeader></NtHeader>
			<div className="w-[750px] mx-auto">{children}</div>
		</main>
	)
}

export const NtLayout = ({ children }: { children: React.ReactNode }) => {
	// const [open, setOpen] = React.useState(false)
	return (
		<>
			<div className={cn("w-full flex flex-1")}>
				<NtSide className="space-y-2 px-3 pt-6 relative">
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

							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger>
										<PlusCircledIcon className="cursor-pointer text-light-4" />
										{/* <Dialog>
											<DialogTrigger>
												<PlusCircledIcon className="cursor-pointer text-light-4" />
											</DialogTrigger>
											<DialogContent>
												<NtInput></NtInput>
												<div className="self-end space-x-2">
													<NtButton>取消</NtButton>
													<NtButton type="theme">确定</NtButton>
												</div>
											</DialogContent>
										</Dialog> */}
										{/* <PlusCircledIcon
											className="cursor-pointer text-light-4"
											onClick={() => setOpen(true)}
										/> */}
									</TooltipTrigger>
									<TooltipContent className="cursor-pointer">
										新增分类
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						</div>
						<NtMenus options={overViewLinks}></NtMenus>
					</NtNav>
					<div className="absolute left-5 bottom-[14px]">
						<Popover>
							<PopoverTrigger>
								<MixerHorizontalIcon className="cursor-pointer text-light-4"></MixerHorizontalIcon>
								<PopoverContent className="ml-5 px-[22px] py-[14px] w-[203px] space-y-2">
									<NtLink
										href={"/dashboard"}
										className="flex justify-between h-8 cursor-pointer"
									>
										<div>数据统计</div>
										<ChevronRightIcon />
									</NtLink>
									<NtLink
										href={"/setting"}
										className="flex justify-between h-8 cursor-pointer"
									>
										<div>设置</div>
										<ChevronRightIcon />
									</NtLink>
									<div className="w-full h-[1px] bg-[#EAEAEA] !mb-[17px]"></div>
									<div className="cursor-pointer h-8">退出登录</div>
								</PopoverContent>
							</PopoverTrigger>
						</Popover>
					</div>
				</NtSide>
				<NtContent>{children}</NtContent>
			</div>
			{/* <Modal
				title="新增分类"
				centered
				open={open}
				onOk={() => setOpen(false)}
				onCancel={() => setOpen(false)}
				okText="确定"
				cancelText="取消"
				width={270}
			>
				<NtInput></NtInput>
			</Modal> */}
		</>
	)
}

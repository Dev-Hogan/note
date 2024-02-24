"use client"
import { PlusCircledIcon, CaretSortIcon } from "@radix-ui/react-icons"
import { overViewLinks, settingActionLinks } from "@/router"
import { usePathname } from "next/navigation"
import { cn } from "@/utils"
import { Link1Icon, Pencil2Icon, TrashIcon } from "@radix-ui/react-icons"
import {
	NtTags,
	NtTagProp,
	ContextMenu,
	ContextMenuItem,
	ContextMenuTrigger,
	ContextMenuContent,
	NtTag,
} from "@/components"

const tags: NtTagProp[] = [
	{
		name: "所有内容",
		id: 1,
	},
	{
		name: "有意思",
		id: 2,
	},
	{
		name: "基础知识",
		id: 3,
	},
	{
		name: "进阶内容",
		id: 4,
	},
	{
		name: "数据相关",
		id: 5,
	},
]

const tagContextMenu: {
	name?: string
	icon?: any
	split?: boolean
	action?: () => void
}[] = [
	{
		name: "前往该标签",
		icon: <Link1Icon color="#FFAC0A"></Link1Icon>,
		split: true,
	},
	{
		name: "重命名",
		icon: <Pencil2Icon color="#FFAC0A"></Pencil2Icon>,
	},
	{
		name: "删除标签",
		icon: <TrashIcon color="#FFAC0A"></TrashIcon>,
		split: true,
	},
]

export const NtHeader = ({ children }: { children?: React.ReactNode }) => {
	const pathName = usePathname()
	return (
		<header className="flex flex-col max-h-[107px] space-y-[6px] mb-[10px]">
			<div className="flex justify-between items-center h-[40px] mt-5">
				<div className="text-[28px] font-semibold">{getName(pathName)}</div>
				<div className="flex space-x-2 [&>svg]:cursor-pointer">
					<CaretSortIcon width={26} height={26} />
					<PlusCircledIcon color="#FFAC0A" width={26} height={26} />
				</div>
			</div>
			{/* <NtTags className="flex" tags={tags} /> */}
			{showTags(pathName) && (
				<div className="flex space-x-1">
					{tags?.map((t, i) => (
						<ContextMenu key={t.id}>
							<ContextMenuTrigger>
								<NtTag key={i}>{t.name}</NtTag>
							</ContextMenuTrigger>
							<ContextMenuContent className="bg-white">
								{tagContextMenu.map((m, i) => (
									<>
										<ContextMenuItem key={i} className={cn("space-x-1")}>
											{m.icon}
											<div className="text-light-7 font-medium">{m.name}</div>
										</ContextMenuItem>
									</>
								))}
								<ContextMenuItem className="bg-white !text-light-4 space-x-2">
									<span>卡片</span>
									<span>:</span>
									<span>32</span>
								</ContextMenuItem>
							</ContextMenuContent>
						</ContextMenu>
					))}
				</div>
			)}
		</header>
	)
}

const mergerLinks = [...overViewLinks, ...settingActionLinks]
function getName(pathName: string) {
	return mergerLinks.find(o => o.path === pathName)?.name
}
function showTags(pathName: string) {
	const idx = overViewLinks.findIndex(o => o.path === pathName)
	return idx >= 0 ? true : false
}

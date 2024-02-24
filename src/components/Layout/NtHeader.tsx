"use client"
import { PlusCircledIcon, CaretSortIcon } from "@radix-ui/react-icons"
import { overViewLinks } from "@/router"
import { usePathname } from "next/navigation"
import { NtTags, NtTagProp } from "@/components"

const tags: NtTagProp[] = [
	{
		name: "所有内容",
	},
	{
		name: "有意思",
	},
	{
		name: "基础知识",
	},
	{
		name: "进阶内容",
	},
	{
		name: "数据相关",
	},
]

export const NtHeader = ({ children }: { children?: React.ReactNode }) => {
	const pathName = usePathname()
	return (
		<header className="flex flex-col px-7 h-[107px] space-y-[6px] mb-[10px]">
			<div className="flex justify-between items-center h-[40px] mt-5">
				<div className="text-[28px] font-semibold">{getName(pathName)}</div>
				<div className="flex space-x-2 [&>svg]:cursor-pointer">
					<CaretSortIcon />
					<PlusCircledIcon
						className="text-[20px]"
						color="#FFAC0A"
						fontSize={26}
					/>
				</div>
			</div>
			<NtTags className="flex" tags={tags} />
		</header>
	)
}

function getName(pathName: string) {
	return overViewLinks.find(o => o.path === pathName)?.name
}

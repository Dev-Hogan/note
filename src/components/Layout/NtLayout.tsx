import React from "react"
import { cn } from "@/utils"
import { NtNav, NtMenuItem } from "@/components"

export const NtSider = ({ children }: { children?: React.ReactNode }) => {
	return (
		<div className="flex flex-col h-screen w-[400px] border-r">{children}</div>
	)
}

export const NtContent = ({ children }: { children?: React.ReactNode }) => {
	return <div className="flex flex-1 flex-col">{children}</div>
}

export const NtLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<div className={cn("w-full flex flex-1")}>
				<NtSider>
					<NtNav>
						{["a", "b", "focus"].map(d => {
							return <NtMenuItem key={d}>{d}</NtMenuItem>
						})}
					</NtNav>
				</NtSider>
				<NtContent>{children}</NtContent>
			</div>
		</>
	)
}

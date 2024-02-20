"use client"
import React from "react"
import { Layout } from "antd"
import { cn } from "@/utils"

const { Content, Sider } = Layout

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
			<div className="w-full flex flex-1">
				<NtSider></NtSider>
				<NtContent>{children}</NtContent>
			</div>
		</>
	)
}

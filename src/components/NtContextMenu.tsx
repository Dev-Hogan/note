import type { MenuProps } from "antd"
import { Dropdown } from "antd"

export type NtContextMenuItem = MenuProps["items"]

export type NtContextMenuProp = {
	children?: React.ReactNode
	items?: NtContextMenuItem
}

export const NtContextMenu = ({ children, items }: NtContextMenuProp) => {
	return (
		<>
			<Dropdown menu={{ items }} trigger={["contextMenu"]}>
				{children}
			</Dropdown>
		</>
	)
}

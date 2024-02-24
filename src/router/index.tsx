import {
	EnvelopeOpenIcon,
	ChatBubbleIcon,
	ShuffleIcon,
	Link2Icon,
	TrashIcon,
	DashboardIcon,
	DiscIcon,
} from "@radix-ui/react-icons"
export type Menus = { name?: string; icon?: any; path?: string }[]
export const overViewLinks: Menus = [
	{ name: "全部", path: "/", icon: <EnvelopeOpenIcon /> },
	{
		name: "聚焦中",
		path: "/focus",
		icon: <DiscIcon />,
	},
	{
		name: "待回答",
		path: "/waitingAnswer",
		icon: <ChatBubbleIcon />,
	},
	{
		name: "随机看",
		path: "/randomLook",
		icon: <ShuffleIcon />,
	},
	{
		name: "标签",
		path: "/tags",
		icon: <Link2Icon />,
	},
	{
		name: "废纸篓",
		path: "/wastebasket",
		icon: <TrashIcon />,
	},
	{
		name: "辅助开发工具",
		path: "/dev",
		icon: <DashboardIcon />,
	},
]

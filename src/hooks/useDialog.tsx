"use client"
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogTitle,
	DialogTrigger,
	DialogFooter,
} from "@/components/Dialog"
import { NtButton } from "@/components"
export function useDialog({
	trigger,
	content,
	title,
	footer,
}: {
	trigger?: React.ReactNode
	content?: React.ReactNode
	footer?: React.ReactNode
	title?: string
}) {
	const NtDialog = (
		<Dialog>
			<DialogTrigger>{trigger ? trigger : <div>点击弹窗</div>}</DialogTrigger>
			<DialogContent>
				{title ? <DialogTitle> {title}</DialogTitle> : undefined}
				{content ? content : undefined}
				{footer ? (
					<DialogFooter>
						<DialogClose asChild>{footer}</DialogClose>
						<DialogClose asChild>
							<NtButton>我真是奇怪</NtButton>
						</DialogClose>
					</DialogFooter>
				) : undefined}
			</DialogContent>
		</Dialog>
	)
	return NtDialog
}

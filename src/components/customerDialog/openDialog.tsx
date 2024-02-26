"use client"
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogTitle,
	DialogTrigger,
	DialogFooter,
} from "@/components"
export function openDialog({
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
			<DialogTrigger>
				{trigger ? trigger : <div className="text-theme">点击弹窗</div>}
			</DialogTrigger>
			<DialogContent>
				{title ? <DialogTitle> {title}</DialogTitle> : undefined}
				{content ? content : undefined}
				{footer ? (
					<DialogFooter>
						<DialogClose>{footer}</DialogClose>
					</DialogFooter>
				) : undefined}
			</DialogContent>
		</Dialog>
	)
	return NtDialog
}

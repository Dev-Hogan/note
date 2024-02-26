"use client"
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogTitle,
	DialogTrigger,
	DialogFooter,
} from "@/components/Dialog"
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
					</DialogFooter>
				) : undefined}
			</DialogContent>
		</Dialog>
	)
	return NtDialog
}

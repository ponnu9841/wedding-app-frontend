import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const CustomDialog = ({
	dialogButton = <Button variant="outline">Open Dialog</Button>,
	dialogContent,
	dialogTitle,
	dialogDescription,
	hideDialogTitle = false,
	hideDialogDescription = false,
	dialogOpen,
	setDialogOpen,
	contentClassName,
	overlayClassName = "bg-black/50 backdrop-blur-sm",
	isModal = false,
}: {
	dialogOpen?: boolean;
	setDialogOpen?:
		| React.Dispatch<React.SetStateAction<boolean>>
		| ((open: boolean) => void);
	dialogButton: React.ReactNode;
	dialogContent: React.ReactNode;
	dialogTitle?: string;
	dialogDescription?: string;
	hideDialogTitle?: boolean;
	hideDialogDescription?: boolean;
	contentClassName?: string;
	isModal?: boolean;
	overlayClassName?: string;
}) => {
	return (
		<Dialog open={dialogOpen} onOpenChange={setDialogOpen} modal={isModal}>
			<DialogTrigger asChild>{dialogButton}</DialogTrigger>
			<DialogContent
				className={cn(
					"sm:max-w-175 max-h-[80vh] overflow-auto scrollbar-hide",
					contentClassName,
				)}
				overlayClassName={overlayClassName}
			>
				<DialogHeader
					className={hideDialogDescription && hideDialogTitle ? "hidden" : ""}
				>
					<DialogTitle className={hideDialogTitle ? "sr-only" : ""}>
						{dialogTitle}
					</DialogTitle>
					<DialogDescription className={hideDialogDescription ? "sr-only" : ""}>
						{dialogDescription}
					</DialogDescription>
				</DialogHeader>
				{dialogContent}
			</DialogContent>
		</Dialog>
	);
};

export default CustomDialog;

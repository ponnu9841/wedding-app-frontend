import { cn } from "@/lib/utils";

const BackgroundShade = ({ className }: { className?: string }) => {
	return (
		<div
			className={cn("absolute inset-0 w-full h-full bg-black/20", className)}
		/>
	);
};

export default BackgroundShade;

"use client";

import * as React from "react";
import { Tooltip as TooltipPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function TooltipProvider({
	delayDuration = 0,
	...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
	return (
		<TooltipPrimitive.Provider
			data-slot="tooltip-provider"
			delayDuration={delayDuration}
			{...props}
		/>
	);
}

function Tooltip({
	...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
	return <TooltipPrimitive.Root data-slot="tooltip" {...props} />;
}

function TooltipTrigger({
	...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
	return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
	className,
	sideOffset = 0,
	variant = "default",
	children,
	...props
}: React.ComponentProps<typeof TooltipPrimitive.Content> & {
	variant?: string;
}) {
	return (
		<TooltipPrimitive.Portal>
			<TooltipPrimitive.Content
				data-slot="tooltip-content"
				sideOffset={sideOffset}
				className={cn(
					"animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded px-3 py-1.5 text-xs border border-[#E6E6E6]",
					className,
					variant === "default" && "bg-[#F1F2F6] text-[#494D62]",
					variant === "secondary" && "bg-[#F1F2F6] text-[#494D62]",
					variant === "destructive" &&
						"bg-destructive text-destructive-foreground",
					variant === "success" && "bg-success text-white",
				)}
				{...props}
			>
				{children}
				<TooltipPrimitive.Arrow
					className={cn(
						"z-50 size-2.5 translate-y-[calc(-50%_-_0.4px)] rotate-45 rounded-br-[2px] border border-[#E6E6E6] border-t-0 border-l-0",
						variant === "default" && "bg-[#F1F2F6] fill-[#F1F2F6]",
						variant === "secondary" && "bg-[#F1F2F6] fill-[#F1F2F6]",
						variant === "destructive" && "bg-destructive fill-destructive",
						variant === "success" && "bg-success fill-success",
					)}
				/>
			</TooltipPrimitive.Content>
		</TooltipPrimitive.Portal>
	);
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };

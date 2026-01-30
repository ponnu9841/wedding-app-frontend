"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomDialog from "@/components/ui/custom-dialog";
import { navItems } from "./header";

export function MobileNavigation() {
	const [dialogOpen, setDialogOpen] = useState(false);
	return (
		<CustomDialog
			dialogOpen={dialogOpen}
			setDialogOpen={setDialogOpen}
			dialogButton={
				<Button
					variant="ghost"
					size="icon"
					className="items-center hover:bg-transparent md:hidden"
				>
					<Menu className="size-8 text-background" />
				</Button>
			}
			dialogContent={
				<div className="flex flex-col items-center justify-around h-full">
					{navItems.map((item) => (
						<Link
							key={item.name}
							href={item.link}
							className="text-base tracking-widest uppercase font-playfair-display"
							onClick={() => setDialogOpen(false)}
						>
							{item.name}
						</Link>
					))}
				</div>
			}
			hideDialogTitle
			hideDialogDescription
			contentClassName="min-h-screen min-w-full rounded-none border-none"
		/>
	);
}

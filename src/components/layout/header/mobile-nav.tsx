"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomDialog from "@/components/ui/custom-dialog";
import { navItems } from "./header";
import { checkIfAltPresent, cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function MobileNavigation() {
	const [dialogOpen, setDialogOpen] = useState(false);
	const pathName = usePathname();
	const isAltPathName = checkIfAltPresent(pathName);
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
					<Menu className={cn("size-8 text-background", isAltPathName && "text-foreground")} />
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
			contentClassName="min-h-dvh min-w-full rounded-none border-none"
		/>
	);
}

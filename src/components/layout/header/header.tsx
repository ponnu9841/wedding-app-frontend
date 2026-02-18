"use client";

import NextImage from "@/components/ui/image";
import Link from "next/link";
import { MobileNavigation } from "./mobile-nav";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const navItems = [
	{ name: "Home", link: "/" },
	{ name: "About", link: "/about" },
	{ name: "Stories", link: "/stories" },
	{ name: "Films", link: "/films" },
	{ name: "Blog", link: "/blogs" },
	{ name: "Contact", link: "/contact" },
];

const Header = () => {
	const pathName = usePathname();
	const isAltPathName = pathName === "/stories" || pathName?.includes("/films");
	return (
		<nav
			className="container absolute top-0 flex items-center justify-between w-full -translate-x-1/2 bg-transparent left-1/2 h-35"
			style={{ zIndex: "10" }}
		>
			<NextImage src="/assets/images/logo.png" className="max-w-50" />
			<div className="items-center hidden gap-6 overflow-hidden text-white md:flex">
				{navItems.map((item, index) => (
					<Link
						key={index}
						href={item.link}
						className={cn(
							"text-[0.688rem] font-playfair-display uppercase tracking-widest",
							isAltPathName && "text-foreground/80",
						)}
					>
						{item.name}
					</Link>
				))}
			</div>
			<MobileNavigation />
		</nav>
	);
};

export default Header;

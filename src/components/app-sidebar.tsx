import {
	FaHome,
	// FaHandshake,
	// FaCogs,
	// FaComments,
	// FaImages,
	// // FaUsers,
	// FaAddressBook,
	FaInfoCircle,
	// FaThList,
	// FaBlog,
	// FaBriefcase,
} from "react-icons/fa";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
	useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { useRouter } from "next/router";

const items = [
	{
		title: "Home",
		url: "/dashboard",
		icon: FaHome,
	},
	{
		title: "Follow on Instagram",
		url: "/dashboard/instagram-follow",
		icon: FaHome,
	},
	{
		title: "About",
		url: "/dashboard/about",
		icon: FaInfoCircle,
	},
	// {
	// 	title: "Packages",
	// 	url: "/dashboard/packages",
	// 	icon: FaInfoCircle,
	// },
	// {
	// 	title: "Clients",
	// 	url: "/dashboard/clients",
	// 	icon: FaHandshake,
	// },
	// {
	// 	title: "Products",
	// 	url: "/dashboard/products",
	// 	icon: FaCogs,
	// },
	// {
	// 	title: "Testimonials",
	// 	url: "/dashboard/testimonials",
	// 	icon: FaComments,
	// },
	// {
	// 	title: "Works",
	// 	url: "/dashboard/works",
	// 	icon: FaImages,
	// },
	// // {
	// //   title: "Teams",
	// //   url: "/dashboard/teams",
	// //   icon: FaUsers,
	// // },
	// {
	// 	title: "Contact",
	// 	url: "/dashboard/contact",
	// 	icon: FaAddressBook,
	// },
	// {
	// 	title: "Vlogs",
	// 	url: "/dashboard/vlogs",
	// 	icon: FaBlog,
	// },
	// {
	// 	title: "Experts",
	// 	url: "/dashboard/experts",
	// 	icon: FaBriefcase,
	// },
	// {
	// 	title: "Miscellaneous",
	// 	url: "/dashboard/miscellaneous",
	// 	icon: FaThList,
	// },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const router = useRouter();
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader className="bg-primary p-0">
				<Logo />
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Menu</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton
										asChild
										isActive={router.pathname === item.url}
									>
										<Link href={item.url} className="my-1.5">
											<item.icon />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<NavUser />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}

import { ChevronsUpDown, LogOut } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/hooks/use-store";
import { clearToken } from "@/services/local-storage-service";
import { LOGOUT } from "@/store/root-reducer";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import NextImage from "@/components/ui/image";

function NavUser() {
	const { isMobile } = useSidebar();
	const user = useAppSelector((state) => state.user.user);
	const dispatch = useAppDispatch();
	const router = useRouter();

	const handleLogout = () => {
		clearToken();
		dispatch({ type: LOGOUT });
		router.push("/login");
	};

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
						>
							<Avatar className="h-8 w-8 rounded-lg">
								<AvatarImage src={user.name} alt={user.name} />
								<AvatarFallback className="rounded-lg">CN</AvatarFallback>
							</Avatar>
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-semibold">{user.name}</span>
								<span className="truncate text-xs">{user.email}</span>
							</div>
							<ChevronsUpDown className="ml-auto size-4" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
						side={isMobile ? "bottom" : "right"}
						align="end"
						sideOffset={4}
					>
						<DropdownMenuLabel className="p-0 font-normal">
							<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
								<Avatar className="h-8 w-8 rounded-lg">
									<AvatarImage src={user.name} alt={user.name} />
									<AvatarFallback className="rounded-lg">CN</AvatarFallback>
								</Avatar>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-semibold">{user.name}</span>
									<span className="truncate text-xs">{user.email}</span>
								</div>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Button
								variant="ghost"
								size="sm"
								className="w-full text-left justify-start"
								onClick={handleLogout}
							>
								<LogOut />
								Log out
							</Button>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}

function Logo() {
	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<Link href="/dashboard" className="flex justify-center">
					<NextImage src="/assets/images/logo.png" className="aspect-[3/1] w-50" />
				</Link>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}

import DashBoardLayout from "@/components/layout/admin/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import StoriesList from "@/features/admin/stories/stories-list";
import Link from "next/link";

export default function StoryPage() {
	return (
		<div>
			<div className="flex flex-wrap justify-between items-center gap-5">
				<h2 className="text-lg">Stories</h2>
				<div className="flex items-stretch gap-3">
					<div>
						<Input placeholder="Search" className="h-full" />
					</div>
					<Link href="/dashboard/stories/create">
						<Button>Add Story</Button>
					</Link>
				</div>
			</div>
			<StoriesList />
		</div>
	);
}

StoryPage.getLayout = function getLayout(page: React.ReactElement) {
	return <DashBoardLayout>{page}</DashBoardLayout>;
};

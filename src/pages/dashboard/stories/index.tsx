import DashBoardLayout from "@/components/layout/admin/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageHeroForm from "@/features/admin/page-hero/page-hero-form";
import StoriesList from "@/features/admin/stories/stories-list";
import { useDispatch } from "@/store";
import { setStorySearch } from "@/store/features/story-slice";
import debounce from "lodash.debounce";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function StoryPage() {
	return (
		<Tabs defaultValue="stories" className="w-full flex flex-col gap-4">
			<TabsList>
				<TabsTrigger value="stories">Stories</TabsTrigger>
				<TabsTrigger value="page-hero">Page Hero</TabsTrigger>
			</TabsList>
			<TabsContent value="stories">
				<div className="flex flex-wrap justify-between items-center gap-5">
					<h2 className="text-lg">Stories</h2>
					<div className="flex items-stretch gap-3">
						<div>
							<SearchInput />
						</div>
						<Link href="/dashboard/stories/create">
							<Button>Add Story</Button>
						</Link>
					</div>
				</div>
				<StoriesList />
			</TabsContent>
			<TabsContent value="page-hero">
				<h2 className="text-lg mb-4">Stories Page Hero</h2>
				<PageHeroForm page="stories" />
			</TabsContent>
		</Tabs>
	);
}

const SearchInput = () => {
	const dispatch = useDispatch();
	const [searchInput, setSearchInput] = useState("");

	const debouncedSearch = useMemo(
		() =>
			debounce((value: string) => {
				dispatch(setStorySearch(value));
			}, 500),
		[dispatch],
	);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchInput(value);
		debouncedSearch(value);
	};

	useEffect(() => {
		return () => {
			debouncedSearch.cancel();
		};
	}, [debouncedSearch]);

	return (
		<Input
			placeholder="Search"
			value={searchInput}
			className="h-full"
			onChange={handleChange}
		/>
	);
};

StoryPage.getLayout = function getLayout(page: React.ReactElement) {
	return <DashBoardLayout>{page}</DashBoardLayout>;
};

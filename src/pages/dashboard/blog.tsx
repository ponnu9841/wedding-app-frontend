import DashBoardLayout from "@/components/layout/admin/dashboard-layout";
import AdminSectionLayout from "@/components/shared/admin-section-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BlogForm from "@/features/admin/blog/blog-form";
import BlogList from "@/features/admin/blog/blog-list";
import PageHeroForm from "@/features/admin/page-hero/page-hero-form";
import { useAppDispatch } from "@/hooks/use-store";
import { fetchBlogs } from "@/store/features/blog-slice";
import React, { useEffect } from "react";

const BlogsPage = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		const controller = new AbortController();
		dispatch(fetchBlogs({ controller }));
		return () => controller.abort();
	}, []);

	return (
		<Tabs defaultValue="blogs" className="w-full flex flex-col gap-4">
			<TabsList>
				<TabsTrigger value="blogs">Blogs</TabsTrigger>
				<TabsTrigger value="page-hero">Page Hero</TabsTrigger>
			</TabsList>
			<TabsContent value="blogs">
				<h2 className="text-lg mb-4">Blogs</h2>
				<AdminSectionLayout
					leftSection={<BlogForm />}
					rightSection={<BlogList />}
				/>
			</TabsContent>
			<TabsContent value="page-hero">
				<h2 className="text-lg mb-4">Blog Page Hero</h2>
				<PageHeroForm page="blog" />
			</TabsContent>
		</Tabs>
	);
};

BlogsPage.getLayout = function getLayout(page: React.ReactElement) {
	return <DashBoardLayout>{page}</DashBoardLayout>;
};

export default BlogsPage;

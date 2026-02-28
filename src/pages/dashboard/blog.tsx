import DashBoardLayout from "@/components/layout/admin/dashboard-layout";
import AdminSectionLayout from "@/components/shared/admin-section-layout";
import BlogForm from "@/features/admin/blog/blog-form";
import BlogList from "@/features/admin/blog/blog-list";
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
		<div className="space-y-4">
			<h2 className="text-lg">Blogs</h2>
			<AdminSectionLayout
				leftSection={<BlogForm />}
				rightSection={<BlogList />}
			/>
		</div>
	);
};

BlogsPage.getLayout = function getLayout(page: React.ReactElement) {
	return <DashBoardLayout>{page}</DashBoardLayout>;
};

export default BlogsPage;

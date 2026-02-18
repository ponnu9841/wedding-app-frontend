import BlogList from "@/features/user/blogs/blog-list";
import BlogsHero from "@/features/user/blogs/hero";
import React from "react";

const BlogsPage = () => {
	return (
		<div className="space-y-20">
			<BlogsHero />
            <BlogList />
		</div>
	);
};

export default BlogsPage;

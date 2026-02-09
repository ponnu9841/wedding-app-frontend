import BlogList from "@/features/blogs/blog-list";
import BlogsHero from "@/features/blogs/hero";
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

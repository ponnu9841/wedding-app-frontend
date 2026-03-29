export const dynamic = "force-dynamic";

import Typography from "@/components/shared/typography";
import BlogList from "@/features/user/blogs/blog-list";
import { generatePageMetadata } from "@/lib/utils";

export const generateMetadata = () => generatePageMetadata("blog");

const BlogsPage = async () => {

	return (
		<div className="space-y-20 mt-30">
			<div>
				<Typography variant="h1" className="mb-5 text-center">
					Blogs
				</Typography>
			</div>
			<div className="container">
				<BlogList />
			</div>
		</div>
	);
};

export default BlogsPage;

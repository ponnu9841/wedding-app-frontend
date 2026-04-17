export const dynamic = "force-dynamic";

import PageIntro from "@/components/shared/page-intro";
import BlogList from "@/features/user/blogs/blog-list";
import { generatePageMetadata } from "@/lib/utils";
import { getPageHeroServer } from "@/services/axios/get-data-server";

export const generateMetadata = () => generatePageMetadata("blog");

const BlogsPage = async () => {
	const hero = await getPageHeroServer("blog");

	return (
		<div className="space-y-20 mt-30">
			<div>
				{/* <Typography variant="h1" className="mb-5 text-center">
					Blogs
				</Typography> */}
				{hero && (
					<PageIntro
						title={hero.title}
						description={hero.description}
						className="[&>h1]:text-4xl md:[&>h1]:text-5xl"
					/>
				)}
			</div>
			<div className="container">
				<BlogList />
			</div>
		</div>
	);
};

export default BlogsPage;

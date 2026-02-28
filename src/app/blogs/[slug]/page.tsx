import NextImage from "@/components/ui/image";
import { formatDateToMonthYear, parseHtml } from "@/lib/utils";
import { getBlogById } from "@/services/axios/get-data-server";
import { Calendar } from "lucide-react";

const BlogDetailsPage = async (props: PageProps) => {
	const params = await props.params;

	const blog = params ? await getBlogById((params.slug as string) || "") : null;

	if (!blog) {
		return (
			<div className="min-h-screen flex justify-center items-center">
				<h1>Film not found</h1>
			</div>
		);
	}

	return (
		<div className="container my-32">
			<div className="max-w-[700px] mx-auto">
				<NextImage
					src={blog.image}
					alt={blog.title}
					className="aspect-square max-h-[400px]"
				/>
				<div className="flex gap-x-2 items-center text-muted-foreground text-sm mb-4">
					<Calendar size={16} />{" "}
					<span>{formatDateToMonthYear(blog.createdAt)}</span>
				</div>
				<h1 className="my-4 text-lg font-fairly-display">{blog.title}</h1>
				<div className="[&>ul]:list-disc [&>ul]:ml-8 text-foreground/80">
					{parseHtml(blog.content)}
				</div>
			</div>
		</div>
	);
};

export default BlogDetailsPage;

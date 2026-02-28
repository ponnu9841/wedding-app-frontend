import {
	fetchBlogs,
	setSelectedBlog,
	getBlogPageNo,
	getBlogData,
	setBlogPageNo,
} from "@/store/features/blog-slice";
import parse from "html-react-parser";
import { getBlogLoading } from "@/store/features/blog-slice";
import { useAppDispatch, useAppSelector } from "@/hooks/use-store";
import axiosClient from "@/services/axios";
import { Skeleton } from "@/components/ui/skeleton";
import NextImage from "@/components/ui/image";
import EditButton from "@/components/shared/edit-button";
import { DeleteDrawer } from "@/components/shared/delete-drawer";
import { CustomPagination } from "@/components/ui/custom-pagination";

export default function BlogList() {
	const dispatch = useAppDispatch();
	const loading = useAppSelector(getBlogLoading);
	const blogs = useAppSelector(getBlogData);

	const deleteBlog = async (id: string, image: string) => {
		try {
			const response = await axiosClient.delete(`/blog/${id}`, {
				data: { existingImage: image },
			});
			if (response && response.status === 200) {
				dispatch(setBlogPageNo(1));
				dispatch(fetchBlogs({}));
			}
		} catch (error) {
			throw error;
		}
	};

	return (
		<div>
			<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-h-[500px] overflow-auto">
				{loading &&
					Array(6)
						.fill(null)
						.map((_, index) => (
							<Skeleton key={index} className="aspect-square" />
						))}
				{!loading && blogs?.data.length === 0 && (
					<div className="col-span-4 text-center mt-3 text-red-500">
						No Record Found
					</div>
				)}
				{!loading &&
					blogs?.data.map((blog: Blog) => (
						<div key={blog.id} className="text-xs">
							<div className="relative">
								<NextImage className="aspect-square" src={blog.image} />
								<div className="absolute bottom-0 right-0">
									<EditButton onClick={() => dispatch(setSelectedBlog(blog))} />
									<DeleteDrawer
										title={`Delete Blog ${blog.title}`}
										description={`Are you sure you want to delete this blog? This action cannot be undone.`}
										onDelete={() => deleteBlog(blog.id, blog.image)}
									/>
								</div>
							</div>
							<div className="mt-3">
								<b>Title </b> {blog.title}
							</div>
							<div className="mt-3 max-h-40 overflow-y-auto">
								<b>Description </b> {parse(blog.content)}
							</div>
						</div>
					))}
			</div>
			{!loading && blogs?.data.length ? (
				<div className="mt-6">
					<CustomPagination
						totalPages={blogs.totalPages}
						currentPage={blogs?.page}
						onPageChange={(page) => dispatch(setBlogPageNo(page))}
					/>
				</div>
			) : (
				<></>
			)}
		</div>
	);
}

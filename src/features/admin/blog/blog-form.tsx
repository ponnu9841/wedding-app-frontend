import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/hooks/use-store";
import { fetchBlogs, getSelectedBlog, setSelectedBlog } from "@/store/features/blog-slice";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { BlogFormData, blogSchema } from "@/schema";
import axiosClient from "@/services/axios";
import FileUpload from "@/components/shared/file-upload";
import TextEditor from "@/components/shared/text-editor";
import FormAction from "@/components/shared/admin-form-action";

const defaultValues = {
	id: "",
	image: [],
	title: "",
	subtitle: "",
	imageAlt: "",
	content: "",
};

export default function BlogForm() {
	const form = useForm<BlogFormData>({
		resolver: zodResolver(blogSchema),
		defaultValues,
	});
	const loading = form.formState.isSubmitting;

	const dispatch = useAppDispatch();
	const selectedBlog = useAppSelector(getSelectedBlog);
	const existingImage = selectedBlog?.image ?? "";

	const resetForm = () => {
		form.reset(defaultValues);
        dispatch(setSelectedBlog(null));
	};

	const onSubmit = async (data: BlogFormData) => {
		const form = new FormData();
		form.append("title", data.title);
		form.append("content", data.content);
		form.append("alt", data.imageAlt || "");
		if (data.image?.length) {
			form.append("image", data.image[0]);
		}
		if (data.imageAlt) {
			form.append("alt", data.imageAlt);
		}
		if (data.id) {
			form.append("id", data.id);
		}
		const method = data.id ? axiosClient.put : axiosClient.post;

		const url = data.id ? `/blog/${data.id}` : `/blog`;

		const response = await method(url, form);
		if (response) {
			resetForm();
			dispatch(fetchBlogs({}));
		}
	};

	useEffect(() => {
		if (selectedBlog) {
			form.reset({
				id: selectedBlog.id,
				image: [],
				title: selectedBlog.title,
				content: selectedBlog.content,
				imageAlt: selectedBlog.alt || "",
			});
		}
	}, [selectedBlog]); //eslint-disable-line

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<input type="hidden" {...form.register("id")} />
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Title</FormLabel>
							<FormControl>
								<Input placeholder="Title" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="border px-4 py-4">
					<FormField
						control={form.control}
						name="image"
						render={({ field, fieldState: { error } }) => (
							<FormItem>
								<FormLabel>Image</FormLabel>
								<FormControl>
									<FileUpload
										files={field.value || []}
										setFiles={field.onChange}
										placeholder="Select Image"
										existingImage={existingImage}
										error={error?.message}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<FormField
					control={form.control}
					name="imageAlt"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Image Alt</FormLabel>
							<FormControl>
								<Input placeholder="Image Alt Text" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="content"
					render={({ field, fieldState: { error } }) => (
						<FormItem>
							<FormLabel>Content</FormLabel>
							<FormControl>
								<TextEditor
									placeholder="Enter Blog Content"
									value={field.value}
									setValue={field.onChange}
									error={error?.message}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormAction reset={() => resetForm()} loading={loading} />
			</form>
		</Form>
	);
}

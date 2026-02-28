import FileUpload from "@/components/shared/file-upload";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { StoryFormData, storySchema } from "@/schema";
import axiosClient from "@/services/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";

const initialState = {
	id: "",
	title: "",
	bannerImage: [],
	images: [],
};

const CreateStory = () => {
	const router = useRouter();

	const form = useForm<StoryFormData>({
		resolver: zodResolver(storySchema),
		defaultValues: initialState,
	});

	const loading = form.formState.isSubmitting;

	const onSubmit = async (data: StoryFormData) => {
		const form = new FormData();
		form.append("title", data.title || "");
		data.bannerImage?.forEach((element) => {
			form.append("bannerImage", element);
		});
		data.images?.forEach((element) => {
			form.append("images", element);
		});
		const response = await axiosClient.post("/story", form);
		if (response.status === 200) {
			router.replace("/dashboard/stories");
		}
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Image Alt</FormLabel>
							<FormControl>
								<Input {...field} placeholder="Enter Title" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="bannerImage"
					render={({ field, fieldState: { error } }) => (
						<FormItem>
							<FormLabel>Image</FormLabel>
							<FormControl>
								<FileUpload
									files={field.value || []}
									setFiles={field.onChange}
									placeholder="Select Image"
									// existingImage={existingImage}
									error={error?.message}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="images"
					render={({ field, fieldState: { error } }) => (
						<FormItem>
							<FormLabel>Image</FormLabel>
							<FormControl>
								<FileUpload
									files={field.value || []}
									setFiles={field.onChange}
									placeholder="Select Image"
									// existingImage={existingImage}
									error={error?.message}
									multiple
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button disabled={loading}>{loading ? "Creating" : "Create"}</Button>
			</form>
		</Form>
	);
};

export default CreateStory;

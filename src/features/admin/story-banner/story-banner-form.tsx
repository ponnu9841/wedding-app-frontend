import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/hooks/use-store";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { StoryBannerFormData, storyBannerSchema } from "@/schema";
import FileUpload from "@/components/shared/file-upload";
import {
	fetchStoryBanner,
	getStoryBannerData,
} from "@/store/features/home-slice";
import axiosInstance from "@/services/axios/axios-server-instance";
import { Button } from "@/components/ui/button";

const defaultValues = {
	id: "",
	image: [],
	headingText: "",
	headingAuthor: "",
	title: "",
	eventDate: "",
};

const StoryBannerForm = () => {
	const dispatch = useAppDispatch();
	const form = useForm<StoryBannerFormData>({
		resolver: zodResolver(storyBannerSchema),
		defaultValues,
	});
	const loading = form.formState.isSubmitting;

	const storyBanner = useAppSelector(getStoryBannerData);
	const existingImage = storyBanner?.backgroundImage ?? "";

	useEffect(() => {
		if (storyBanner) {
			form.reset({
				id: storyBanner.id,
				headingText: storyBanner.headingText || "",
				headingAuthor: storyBanner.headingAuthor || "",
				title: storyBanner.title || "",
				eventDate: storyBanner.eventDate || "",
			});
		}
	}, [storyBanner]);

	const handleFormSubmit = async (data: StoryBannerFormData) => {
		const formData = new FormData();

		if (data.id) formData.append("id", data.id);
		if (data.image?.length) formData.append("backgroundImage", data.image[0]);
		formData.append("headingText", data.headingText || "");
		formData.append("headingAuthor", data.headingAuthor || "");
		formData.append("title", data.title || "");
		formData.append("eventDate", data.eventDate || "");
		formData.append("existingImage", existingImage || "");

		const method = data.id ? axiosInstance.put : axiosInstance.post;
		const url = data.id ? `/story-banner/${data.id}` : `/story-banner`;
		const response = await method(url, formData);
		if (response) dispatch(fetchStoryBanner({}));
	};

	return (
		<Form {...form}>
			<form
				className="space-y-4"
				onSubmit={form.handleSubmit(handleFormSubmit)}
			>
				<input type="hidden" {...form.register("id")} />

				<FormField
					control={form.control}
					name="image"
					render={({ field, fieldState: { error } }) => (
						<FormItem>
							<FormLabel>Background Image*</FormLabel>
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

				<FormField
					control={form.control}
					name="headingText"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Heading Text*</FormLabel>
							<FormControl>
								<Input placeholder="Heading Text" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="headingAuthor"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Heading Author*</FormLabel>
							<FormControl>
								<Input placeholder="Heading Author" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Title*</FormLabel>
							<FormControl>
								<Input placeholder="Title" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="eventDate"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Event Date*</FormLabel>
							<FormControl>
								<Input placeholder="Event Date" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button disabled={loading}>Submit</Button>
			</form>
		</Form>
	);
};

export default StoryBannerForm;

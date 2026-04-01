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
import { HomeAboutBannerFormData, homeAboutBannerSchema } from "@/schema";
import FileUpload from "@/components/shared/file-upload";
import {
	fetchHomeAboutBanner,
	getHomeAboutBannerData,
} from "@/store/features/home-slice";
import axiosInstance from "@/services/axios/axios-server-instance";
import { Button } from "@/components/ui/button";

const defaultValues = {
	id: "",
	image: [],
	imageAlt: "",
	title: "",
	subtitle: "",
};

const HomeAboutBannerForm = () => {
	const dispatch = useAppDispatch();
	const form = useForm<HomeAboutBannerFormData>({
		resolver: zodResolver(homeAboutBannerSchema),
		defaultValues,
	});
	const loading = form.formState.isSubmitting;

	const homeAboutBanner = useAppSelector(getHomeAboutBannerData);
	const existingImage = homeAboutBanner?.image ?? "";

	useEffect(() => {
		if (homeAboutBanner) {
			form.reset({
				id: homeAboutBanner.id,
				imageAlt: homeAboutBanner.alt || "",
				title: homeAboutBanner.title || "",
				subtitle: homeAboutBanner.subtitle || "",
			});
		}
	}, [homeAboutBanner]);

	const handleFormSubmit = async (data: HomeAboutBannerFormData) => {
		const formData = new FormData();

		if (data.id) formData.append("id", data.id);
		if (data.image) formData.append("image", data.image[0]);
		formData.append("imageAlt", data.imageAlt || "");
		formData.append("title", data.title || "");
		formData.append("subtitle", data.subtitle || "");
		formData.append("existingImage", existingImage || "");
		formData.append("description", data.description || "");
		formData.append("url", data.url || "");

		const method = data.id ? axiosInstance.put : axiosInstance.post;
		const url = data.id
			? `/home-about-banner/${data.id}`
			: `/home-about-banner`;
		const response = await method(url, formData);
		if (response) dispatch(fetchHomeAboutBanner({}));
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

				<FormField
					control={form.control}
					name="imageAlt"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Image Alt</FormLabel>
							<FormControl>
								<Input placeholder="Image Alt" {...field} />
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
							<FormLabel>Title</FormLabel>
							<FormControl>
								<Input placeholder="Title" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="subtitle"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Sub Title</FormLabel>
							<FormControl>
								<Input placeholder="Subtitle" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Input placeholder="Description" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="url"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Url</FormLabel>
							<FormControl>
								<Input placeholder="Subtitle" {...field} />
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

export default HomeAboutBannerForm;

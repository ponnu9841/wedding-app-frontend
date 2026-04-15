import FormAction from "@/components/shared/admin-form-action";
import FileUpload from "@/components/shared/file-upload";
import { DeleteDrawer } from "@/components/shared/delete-drawer";
import NextImage from "@/components/ui/image";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAppDispatch, useAppSelector } from "@/hooks/use-store";
import { delayDispatch } from "@/lib/utils";
import { AboutBannerFormData, aboutBannerSchema } from "@/schema";
import axiosClient from "@/services/axios";
import {
	fetchAboutBanners,
	getAboutBanners,
} from "@/store/features/about-page-slice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const initialState: AboutBannerFormData = {
	id: "",
	image: [],
	imageAlt: "",
	title: "",
	description: "",
};

export const AboutBannerForm = () => {
	const form = useForm<AboutBannerFormData>({
		resolver: zodResolver(aboutBannerSchema),
		defaultValues: initialState,
	});
	const loading = form.formState.isSubmitting;

	const dispatch = useAppDispatch();
	const current = useAppSelector(getAboutBanners)[0] ?? null;
	const existingImage = current?.image ?? "";

	const onSubmit = async (data: AboutBannerFormData) => {
		const body = new FormData();
		body.append("alt", data.imageAlt || "");
		body.append("title", data.title || "");
		body.append("description", data.description || "");
		body.append("existingImage", existingImage);
		if (data.image && data.image.length > 0) body.append("image", data.image[0]);
		const method = data.id ? axiosClient.put : axiosClient.post;
		const url = data.id ? `/about-banner/${data.id}` : "/about-banner";
		const res = await method(url, body);
		if (res?.status === 200) {
			delayDispatch(dispatch, fetchAboutBanners({}));
			resetForm();
		}
	};

	const resetForm = () => {
		if (current) {
			form.reset({
				id: current.id,
				image: [],
				imageAlt: current.alt || "",
				title: current.title || "",
				description: current.description || "",
			});
		} else {
			form.reset(initialState);
		}
	};

	useEffect(() => {
		if (current) {
			form.reset({
				id: current.id,
				image: [],
				imageAlt: current.alt || "",
				title: current.title || "",
				description: current.description || "",
			});
		} else {
			form.reset(initialState);
		}
	}, [current?.id]); //eslint-disable-line

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
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
				<div className="mt-4">
					<FormField
						control={form.control}
						name="imageAlt"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Image Alt</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Enter Image Alt" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className="mt-4">
					<FormField
						control={form.control}
						name="title"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Title</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Enter Title" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className="mt-4">
					<FormField
						control={form.control}
						name="description"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Description</FormLabel>
								<FormControl>
									<Textarea {...field} placeholder="Enter Description" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormAction reset={resetForm} loading={loading} />
			</form>
		</Form>
	);
};

export const AboutBannerData = () => {
	const dispatch = useAppDispatch();
	const data = useAppSelector(getAboutBanners);

	const deleteItem = async (id: string, image: string) => {
		const res = await axiosClient.delete(`/about-banner`, {
			params: { id, image },
		});
		if (res.status === 200) delayDispatch(dispatch, fetchAboutBanners({}));
	};

	if (!data.length)
		return (
			<div className="text-sm text-muted-foreground">No about banners added</div>
		);

	return (
		<div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
			{data.map((item) => (
				<div key={item.id} className="max-w-[200px]">
					<div className="relative mb-3">
						<NextImage
							src={item.image}
							className="aspect-square max-w-[200px]"
							isUnOptimized
						/>
						<div className="absolute bottom-0 right-0">
							<DeleteDrawer
								title="Delete About Banner"
								description="Are you sure you want to delete this banner? This action cannot be undone."
								onDelete={() => deleteItem(item.id, item.image)}
							/>
						</div>
					</div>
					{item.title && (
						<div>
							<span className="font-bold">Title: </span>
							{item.title}
						</div>
					)}
					{item.description && (
						<div className="mt-2 max-h-[80px] overflow-auto text-sm">
							{item.description}
						</div>
					)}
				</div>
			))}
		</div>
	);
};

import FormAction from "@/components/shared/admin-form-action";
import FileUpload from "@/components/shared/file-upload";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/hooks/use-store";
import { delayDispatch } from "@/lib/utils";
import { InstagramFollowFormData, instagramFollowSchema } from "@/schema";
import axiosClient from "@/services/axios";
import {
	fetchInstagramFollowData,
	getSelectedInstagramData,
	setSelectedInstagramFollowData,
} from "@/store/features/instagram-follow-slice";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const initialState = {
	id: "",
	image: [],
	imageAlt: "",
	url: "",
};

const InstagramFollowForm = () => {
	const form = useForm<InstagramFollowFormData>({
		resolver: zodResolver(instagramFollowSchema),
		defaultValues: initialState,
	});
    const loading = form.formState.isSubmitting;

	const dispatch = useAppDispatch();
	const selectedInstagramData = useAppSelector(getSelectedInstagramData);
	const existingImage = selectedInstagramData?.image ?? "";

	const onSubmit = (data: InstagramFollowFormData) => {
		const form = new FormData();
		form.append("alt", data.imageAlt || "");
		form.append("url", data.url || "");
		form.append("existingImage", existingImage);
		if (data.image && data.image.length > 0) {
			form.append("image", data.image[0]);
		}
		if (data.id) form.append("id", data.id);
		const method = data.id ? axiosClient.put : axiosClient.post;
		method("/instagram-follow", form)
			.then((response) => {
				if (response.status === 200) {
					delayDispatch(dispatch, fetchInstagramFollowData({}));
					resetForm();
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const resetForm = () => {
		form.reset(initialState);
		dispatch(setSelectedInstagramFollowData(null));
	};

	useEffect(() => {
		if (selectedInstagramData) {
			form.reset({
				id: selectedInstagramData.id,
				imageAlt: selectedInstagramData.alt || "",
				url: selectedInstagramData.url,
			});
		}
	}, [selectedInstagramData]);

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<input type="hidden" {...form.register("id")} />
				<div className="mt-4">
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
						name="url"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Title</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Enter Instagram URL" />
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

export default InstagramFollowForm;

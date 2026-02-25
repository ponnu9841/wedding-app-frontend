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
import { useAppDispatch, useAppSelector } from "@/hooks/use-store";
import { delayDispatch } from "@/lib/utils";
import { AboutFormData, aboutSchema } from "@/schema";
import axiosClient from "@/services/axios";
import {
	fetchAboutImages,
	getAboutImagesData,
} from "@/store/features/about-slice";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const initialState = {
	id: "",
	imageOne: [],
	imageOneAlt: "",
	imageTwo: [],
	imageTwoAlt: "",
	imageThree: [],
	imageThreeAlt: "",
};

const AboutForm = () => {
	const form = useForm<AboutFormData>({
		resolver: zodResolver(aboutSchema),
		defaultValues: initialState,
	});
	const loading = form.formState.isSubmitting;

	const dispatch = useAppDispatch();
	const aboutImagesData = useAppSelector(getAboutImagesData);

	const onSubmit = (data: AboutFormData) => {
		const form = new FormData();
		form.append("imageOneAlt", data.imageOneAlt || "");
		form.append("imageTwoAlt", data.imageTwoAlt || "");
		form.append("imageThreeAlt", data.imageThreeAlt || "");
		form.append("existingImageOne", aboutImagesData?.imageOne ?? "");
		form.append("existingImageTwo", aboutImagesData?.imageTwo ?? "");
		form.append("existingImageThree", aboutImagesData?.imageThree ?? "");
		if (data.imageOne && data.imageOne.length > 0) {
			form.append("imageOne", data.imageOne[0]);
		}
		if (data.imageTwo && data.imageTwo.length > 0) {
			form.append("imageTwo", data.imageTwo[0]);
		}
		if (data.imageThree && data.imageThree.length > 0) {
			form.append("imageThree", data.imageThree[0]);
		}
		if (data.id) form.append("id", data.id);
		const method = data.id ? axiosClient.put : axiosClient.post;
		method("/about", form)
			.then((response) => {
				if (response.status === 200) {
					delayDispatch(dispatch, fetchAboutImages({}));
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		if (aboutImagesData) {
			form.reset({
				id: aboutImagesData.id,
				imageOneAlt: aboutImagesData.imageOneAlt || "",
				imageTwoAlt: aboutImagesData.imageTwoAlt || "",
				imageThreeAlt: aboutImagesData.imageThreeAlt || "",
			});
		}
	}, [aboutImagesData]);

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
				<input type="hidden" {...form.register("id")} />
				<div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
					<div className="space-y-5">
						<FormField
							control={form.control}
							name="imageOne"
							render={({ field, fieldState: { error } }) => (
								<FormItem>
									<FormLabel>Image One</FormLabel>
									<FormControl>
										<FileUpload
											files={field.value || []}
											setFiles={field.onChange}
											placeholder="Select Image"
											existingImage={aboutImagesData?.imageOne ?? ""}
											error={error?.message}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="imageOneAlt"
							render={({ field, fieldState: { error } }) => (
								<FormItem>
									<FormLabel>Image One Alt</FormLabel>
									<FormControl>
										<Input {...field} placeholder="Enter Image Alt" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="imageThree"
							render={({ field, fieldState: { error } }) => (
								<FormItem>
									<FormLabel>Image Three</FormLabel>
									<FormControl>
										<FileUpload
											files={field.value || []}
											setFiles={field.onChange}
											placeholder="Select Image"
											existingImage={aboutImagesData?.imageThree ?? ""}
											error={error?.message}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="imageThreeAlt"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Image Three Alt</FormLabel>
									<FormControl>
										<Input {...field} placeholder="Enter Image Alt" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="space-y-5">
						<FormField
							control={form.control}
							name="imageTwo"
							render={({ field, fieldState: { error } }) => (
								<FormItem>
									<FormLabel>Image Two</FormLabel>
									<FormControl>
										<FileUpload
											files={field.value || []}
											setFiles={field.onChange}
											placeholder="Select Image"
											existingImage={aboutImagesData?.imageTwo ?? ""}
											error={error?.message}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="imageTwoAlt"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Image Two Alt</FormLabel>
									<FormControl>
										<Input {...field} placeholder="Enter Image Alt" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</div>
				<Button disabled={loading} type="submit">
					{loading ? "Submitting..." : "Submit"}
				</Button>
			</form>
		</Form>
	);
};

export default AboutForm;

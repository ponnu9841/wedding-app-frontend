import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { capitalizeFirstLetter } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import FormAction from "@/components/shared/admin-form-action";
import { useAppDispatch, useAppSelector } from "@/hooks/use-store";
import axiosInstance from "@/services/axios/axios-server-instance";
import { fetchSeo, getSeoTags } from "@/store/features/seo-slice";
import { SeoFormData, seoSchema } from "@/schema";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

const defaultValues = {
	id: "",
	page: "",
	title: "",
	description: "",
};

export default function SeoForm({ page }: { page: string }) {
	const form = useForm<SeoFormData>({
		resolver: zodResolver(seoSchema),
		defaultValues,
	});
	const loading = form.formState.isSubmitting;

	const dispatch = useAppDispatch();
	const seoTags = useAppSelector(getSeoTags);
	const currentSeoTag = seoTags.find((tags) => tags.page === page);

	const onSubmit = async (data: SeoFormData) => {
		const method = data.id ? axiosInstance.put : axiosInstance.post;
        const url = data.id ? `/seo/${data.id}` : "/seo";
		const response = await method(url, data);

		if (response.status === 200) {
			form.reset(defaultValues);
			dispatch(fetchSeo({}));
		}
	};

	useEffect(() => {
		if (page) {
			form.setValue("page", page);
		}
	}, [page]);

	useEffect(() => {
		if (currentSeoTag) {
			form.reset({
				id: currentSeoTag.id,
				title: currentSeoTag.title || "",
				description: currentSeoTag.description || "",
			});
		}
	}, [currentSeoTag]); //eslint-disable-line

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<h2 className="text-lg mb-2">{capitalizeFirstLetter(page)}</h2>
				<input type="hidden" {...form.register("id")} />
				<input type="hidden" {...form.register("page")} value={page} />
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
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Textarea placeholder="Description" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="-mt-2">
					<FormAction loading={loading} showResetButton={false} />
				</div>
			</form>
		</Form>
	);
}

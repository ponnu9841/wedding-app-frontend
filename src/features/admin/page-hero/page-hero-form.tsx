import FormAction from "@/components/shared/admin-form-action";
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
import { handleToast } from "@/lib/handle-toast";
import { PageHeroFormData, pageHeroSchema } from "@/schema";
import axiosClient from "@/services/axios";
import { getPageHeroResponse } from "@/services/axios/get-data-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const PageHeroForm = ({ page }: { page: string }) => {
	const [initialLoaded, setInitialLoaded] = useState(false);

	const form = useForm<PageHeroFormData>({
		resolver: zodResolver(pageHeroSchema),
		defaultValues: { id: "", page, title: "", description: "" },
	});
	const loading = form.formState.isSubmitting;

	useEffect(() => {
		const controller = new AbortController();
		getPageHeroResponse({ page, controller })
			.then((data) => {
				if (data) {
					form.reset({
						id: data.id,
						page,
						title: data.title,
						description: data.description || "",
					});
				}
			})
			.finally(() => setInitialLoaded(true));
		return () => controller.abort();
	}, [page]); //eslint-disable-line

	const onSubmit = async (data: PageHeroFormData) => {
		try {
			const res = await axiosClient.put("/page-hero", {
				page,
				title: data.title,
				description: data.description || "",
			});
			if (res?.status === 200) {
				handleToast({ message: "Saved", variant: "success" });
				if (res.data?.data?.id) {
					form.reset({
						id: res.data.data.id,
						page,
						title: res.data.data.title,
						description: res.data.data.description || "",
					});
				}
			}
		} catch (e) {
			handleToast({ message: "Failed to save", variant: "error" });
		}
	};

	if (!initialLoaded)
		return <div className="text-sm text-muted-foreground">Loading...</div>;

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="max-w-2xl">
				<input type="hidden" {...form.register("id")} />
				<input type="hidden" {...form.register("page")} />
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
				<div className="mt-4">
					<FormField
						control={form.control}
						name="description"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Description</FormLabel>
								<FormControl>
									<Textarea
										{...field}
										rows={5}
										placeholder="Enter Description"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormAction loading={loading} showResetButton={false} />
			</form>
		</Form>
	);
};

export default PageHeroForm;

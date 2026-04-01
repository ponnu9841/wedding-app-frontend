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
import { WorksFormData, worksSchema } from "@/schema";
import FileUpload from "@/components/shared/file-upload";
import FormAction from "@/components/shared/admin-form-action";
import { fetchWorks, getSelectedWork, setSelectedWork } from "@/store/features/home-slice";
import axiosInstance from "@/services/axios/axios-server-instance";

const defaultValues = {
	id: "",
	image: [],
	imageAlt: "",
	title: "",
	subtitle: "",
};

const WorksForm = () => {
	const dispatch = useAppDispatch();
	const form = useForm<WorksFormData>({
		resolver: zodResolver(worksSchema),
		defaultValues,
	});
	const loading = form.formState.isSubmitting;

	const selectedWork = useAppSelector(getSelectedWork);
	const existingImage = selectedWork?.image ?? "";

	useEffect(() => {
		if (selectedWork) {
			form.reset({
				id: selectedWork.id,
				imageAlt: selectedWork.alt || "",
				title: selectedWork.title || "",
				subtitle: selectedWork.subtitle || "",
			});
		}
	}, [selectedWork, form]);

	const resetForm = () => {
		form.reset(defaultValues);
        dispatch(setSelectedWork(null));
	};

	const handleFormSubmit = async (data: WorksFormData) => {
		const formData = new FormData();

		if (data.id) formData.append("id", data.id);
		if (data.image?.length) formData.append("image", data.image[0]);
		formData.append("alt", data.imageAlt || "");
		formData.append("title", data.title || "");
		formData.append("subtitle", data.subtitle || "");

		const method = data.id ? axiosInstance.put : axiosInstance.post;

		const url = data.id ? `/works/${data.id}` : `/works`;

		const response = await method(url, formData);
		if (response) {
			dispatch(fetchWorks({}));
			resetForm();
		}
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(handleFormSubmit)}
				className="space-y-4"
			>
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

				<FormField
					control={form.control}
					name="subtitle"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Sub Title</FormLabel>
							<FormControl>
								<Input placeholder="Title" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

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
					name="url"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Url</FormLabel>
							<FormControl>
								<Input placeholder="/stories/b6eaacb4-5f1e-4581-bbec-9c41cf" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormAction reset={resetForm} loading={loading} />
			</form>
		</Form>
	);
};

export default WorksForm;

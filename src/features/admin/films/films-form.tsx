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
import { Textarea } from "@/components/ui/textarea";
import { useAppDispatch, useAppSelector } from "@/hooks/use-store";
import { FilmsFormData, filmsSchema } from "@/schema";
import axiosClient from "@/services/axios";
import {
	fetchFilms,
	getSelectedFilmData,
	setSelectedFilm,
} from "@/store/features/films-slice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const defaultValues = {
	id: "",
	thumbnail: [],
	title: "",
	shortDescription: "",
	videoUrl: "",
};

const FilmsForm = () => {
	const dispatch = useAppDispatch();
	const form = useForm<FilmsFormData>({
		resolver: zodResolver(filmsSchema),
		defaultValues,
	});
	const loading = form.formState.isSubmitting;

	const selectedFilmData = useAppSelector(getSelectedFilmData);

	const existingImage = selectedFilmData?.thumbnail ?? "";

	useEffect(() => {
		if (selectedFilmData) {
			form.reset({
				id: selectedFilmData.id,
				image: [],
				title: selectedFilmData.title,
				shortDescription: selectedFilmData.shortDescription,
				videoUrl: selectedFilmData.videoUrl,
			});
		}
	}, [selectedFilmData]);

	const onSubmit = async (data: FilmsFormData) => {
		const formData = new FormData();
		if (selectedFilmData?.thumbnail)
			formData.append("existingThumbnail", selectedFilmData.thumbnail);
		formData.append("title", data.title);
		formData.append("shortDescription", data.shortDescription || "");
		formData.append("videoUrl", data.videoUrl);
		if (data.image?.length) formData.append("thumbnail", data.image[0]);

		const method = data.id ? axiosClient.put : axiosClient.post;
        const url = data.id ? `/film/${data.id}` : `/film`;

		const response = await method(url, formData);
		if (response) {
			dispatch(fetchFilms({}));
			form.reset(defaultValues);
		}
	};

	const resetForm = () => {
		form.reset(defaultValues);
		dispatch(setSelectedFilm(null));
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<input type="hidden" {...form.register("id")} />
				<FormField
					control={form.control}
					name="image"
					render={({ field, fieldState: { error } }) => (
						<FormItem>
							<FormLabel>Thumbnail</FormLabel>
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
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Title</FormLabel>
							<FormControl>
								<Input {...field} placeholder="Enter Title/Name" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="shortDescription"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Short Description</FormLabel>
							<FormControl>
								<Textarea {...field} placeholder="Enter Short Description" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="videoUrl"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Video URL</FormLabel>
							<FormControl>
								<Input {...field} placeholder="Enter Embedded URL" />
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

export default FilmsForm;

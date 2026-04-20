import FormAction from "@/components/shared/admin-form-action";
import FileUpload from "@/components/shared/file-upload";
import { DeleteDrawer } from "@/components/shared/delete-drawer";
import EditButton from "@/components/shared/edit-button";
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
import { ManagingDirectorFormData, managingDirectorSchema } from "@/schema";
import axiosClient from "@/services/axios";
import {
	fetchManagingDirectors,
	getManagingDirectors,
	getSelectedManagingDirector,
	setSelectedManagingDirector,
} from "@/store/features/about-page-slice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const initialState: ManagingDirectorFormData = {
	id: "",
	image: [],
	imageAlt: "",
	name: "",
	description: "",
};

export const ManagingDirectorForm = () => {
	const form = useForm<ManagingDirectorFormData>({
		resolver: zodResolver(managingDirectorSchema),
		defaultValues: initialState,
	});
	const loading = form.formState.isSubmitting;

	const dispatch = useAppDispatch();
	const selected = useAppSelector(getSelectedManagingDirector);
	const existingImage = selected?.image ?? "";

	const onSubmit = async (data: ManagingDirectorFormData) => {
		const body = new FormData();
		body.append("alt", data.imageAlt || "");
		body.append("name", data.name || "");
		body.append("description", data.description || "");
		body.append("existingImage", existingImage);
		if (data.image && data.image.length > 0) body.append("image", data.image[0]);
		const method = data.id ? axiosClient.put : axiosClient.post;
		const url = data.id
			? `/managing-director/${data.id}`
			: "/managing-director";
		const res = await method(url, body);
		if (res?.status === 200) {
			delayDispatch(dispatch, fetchManagingDirectors({}));
			resetForm();
		}
	};

	const resetForm = () => {
		form.reset(initialState);
		dispatch(setSelectedManagingDirector(null));
	};

	useEffect(() => {
		if (selected) {
			form.reset({
				id: selected.id,
				image: [],
				imageAlt: selected.alt || "",
				name: selected.name,
				description: selected.description || "",
			});
		}
	}, [selected]); //eslint-disable-line

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
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Enter Name" />
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

export const ManagingDirectorData = () => {
	const dispatch = useAppDispatch();
	const data = useAppSelector(getManagingDirectors);

	const deleteItem = async (id: string, image: string) => {
		const res = await axiosClient.delete(`/managing-director`, {
			params: { id, image },
		});
		if (res.status === 200)
			delayDispatch(dispatch, fetchManagingDirectors({}));
	};

	if (!data.length)
		return (
			<div className="text-sm text-muted-foreground">
				No team members added
			</div>
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
							<EditButton
								onClick={() =>
									dispatch(setSelectedManagingDirector(item))
								}
							/>
							<DeleteDrawer
								title={`Delete ${item.name}`}
								description="Are you sure you want to delete this team member? This action cannot be undone."
								onDelete={() => deleteItem(item.id, item.image)}
							/>
						</div>
					</div>
					<div>
						<span className="font-bold">Name: </span>
						{item.name}
					</div>
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

import FormAction from "@/components/shared/admin-form-action";
import { DeleteDrawer } from "@/components/shared/delete-drawer";
import EditButton from "@/components/shared/edit-button";
import FileUpload from "@/components/shared/file-upload";
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
import {
	AboutServicesFormData,
	aboutServicesSchema,
	OurStoryFormData,
	ourStorySchema,
	TestimonialsFormData,
	testimonialsSchema,
	WhatMakesUsUniqueFormData,
	whatMakesUsUniqueSchema,
} from "@/schema";
import axiosClient from "@/services/axios";
import {
	fetchAboutServices,
	fetchOurStories,
	fetchTestimonials,
	fetchWhatMakesUsUnique,
	getAboutServices,
	getOurStories,
	getSelectedAboutService,
	getSelectedTestimonial,
	getTestimonials,
	getWhatMakesUsUnique,
	setSelectedAboutService,
	setSelectedTestimonial,
} from "@/store/features/about-page-slice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ZodType } from "zod";

type TitleDescItem = {
	id: string;
	title: string;
	description: string | null;
};

type TitleDescFormData = {
	id?: string;
	title: string;
	description?: string;
};

const TitleDescForm = <T extends TitleDescFormData>({
	schema,
	endpoint,
	current,
	onSaved,
}: {
	schema: ZodType<T>;
	endpoint: string;
	current: TitleDescItem | null;
	onSaved: () => void;
}) => {
	const initialState = { id: "", title: "", description: "" } as unknown as T;

	const form = useForm<T>({
		resolver: zodResolver(schema),
		defaultValues: initialState,
	});
	const loading = form.formState.isSubmitting;

	const onSubmit = async (data: T) => {
		const payload = {
			title: data.title,
			description: data.description || "",
		};
		const res = data.id
			? await axiosClient.put(`${endpoint}/${data.id}`, payload)
			: await axiosClient.post(endpoint, payload);
		if (res?.status === 200) {
			onSaved();
		}
	};

	const resetForm = () => {
		if (current) {
			form.reset({
				id: current.id,
				title: current.title,
				description: current.description || "",
			} as unknown as T);
		} else {
			form.reset(initialState);
		}
	};

	useEffect(() => {
		if (current) {
			form.reset({
				id: current.id,
				title: current.title,
				description: current.description || "",
			} as unknown as T);
		} else {
			form.reset(initialState);
		}
	}, [current?.id]); //eslint-disable-line

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<input type="hidden" {...form.register("id" as any)} />
				<FormField
					control={form.control}
					name={"title" as any}
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
						name={"description" as any}
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

const TitleDescList = ({
	items,
	onDelete,
	onEdit,
	emptyLabel,
}: {
	items: TitleDescItem[];
	onDelete: (id: string) => Promise<void>;
	onEdit?: (item: TitleDescItem) => void;
	emptyLabel: string;
}) => {
	if (!items.length)
		return <div className="text-sm text-muted-foreground">{emptyLabel}</div>;
	return (
		<div className="space-y-3">
			{items.map((item) => (
				<div
					key={item.id}
					className="border rounded p-3 flex gap-3 items-start justify-between"
				>
					<div className="flex-1">
						<div className="font-bold">{item.title}</div>
						{item.description && (
							<div className="text-sm mt-1 max-h-[80px] overflow-auto">
								{item.description}
							</div>
						)}
					</div>
					<div className="flex gap-1 shrink-0">
						{onEdit && <EditButton onClick={() => onEdit(item)} />}
						<DeleteDrawer
							title={`Delete ${item.title}`}
							description="Are you sure you want to delete this item? This action cannot be undone."
							onDelete={() => onDelete(item.id)}
						/>
					</div>
				</div>
			))}
		</div>
	);
};

/* ---------- Our Story ---------- */
export const OurStoryForm = () => {
	const dispatch = useAppDispatch();
	const current = useAppSelector(getOurStories)[0] ?? null;
	return (
		<TitleDescForm<OurStoryFormData>
			schema={ourStorySchema}
			endpoint="/our-story"
			current={current}
			onSaved={() => delayDispatch(dispatch, fetchOurStories({}))}
		/>
	);
};

export const OurStoryData = () => {
	const dispatch = useAppDispatch();
	const items = useAppSelector(getOurStories);
	const onDelete = async (id: string) => {
		const res = await axiosClient.delete(`/our-story/${id}`);
		if (res.status === 200) delayDispatch(dispatch, fetchOurStories({}));
	};
	return (
		<TitleDescList
			items={items}
			onDelete={onDelete}
			emptyLabel="No our story entries added"
		/>
	);
};

/* ---------- What Makes Us Unique ---------- */
export const WhatMakesUsUniqueForm = () => {
	const dispatch = useAppDispatch();
	const current = useAppSelector(getWhatMakesUsUnique)[0] ?? null;
	return (
		<TitleDescForm<WhatMakesUsUniqueFormData>
			schema={whatMakesUsUniqueSchema}
			endpoint="/what-makes-us-unique"
			current={current}
			onSaved={() => delayDispatch(dispatch, fetchWhatMakesUsUnique({}))}
		/>
	);
};

export const WhatMakesUsUniqueData = () => {
	const dispatch = useAppDispatch();
	const items = useAppSelector(getWhatMakesUsUnique);
	const onDelete = async (id: string) => {
		const res = await axiosClient.delete(`/what-makes-us-unique/${id}`);
		if (res.status === 200) delayDispatch(dispatch, fetchWhatMakesUsUnique({}));
	};
	return (
		<TitleDescList
			items={items}
			onDelete={onDelete}
			emptyLabel="No entries added"
		/>
	);
};

/* ---------- About Services (multi-record) ---------- */
const aboutServiceInitial: AboutServicesFormData = {
	id: "",
	title: "",
	description: "",
};

export const AboutServicesForm = () => {
	const dispatch = useAppDispatch();
	const selected = useAppSelector(getSelectedAboutService);

	const form = useForm<AboutServicesFormData>({
		resolver: zodResolver(aboutServicesSchema),
		defaultValues: aboutServiceInitial,
	});
	const loading = form.formState.isSubmitting;

	const onSubmit = async (data: AboutServicesFormData) => {
		const payload = { title: data.title, description: data.description || "" };
		const res = data.id
			? await axiosClient.put(`/about-services/${data.id}`, payload)
			: await axiosClient.post("/about-services", payload);
		if (res?.status === 200) {
			delayDispatch(dispatch, fetchAboutServices({}));
			resetForm();
		}
	};

	const resetForm = () => {
		form.reset(aboutServiceInitial);
		dispatch(setSelectedAboutService(null));
	};

	useEffect(() => {
		if (selected) {
			form.reset({
				id: selected.id,
				title: selected.title,
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

export const AboutServicesData = () => {
	const dispatch = useAppDispatch();
	const items = useAppSelector(getAboutServices);
	const onDelete = async (id: string) => {
		const res = await axiosClient.delete(`/about-services/${id}`);
		if (res.status === 200) delayDispatch(dispatch, fetchAboutServices({}));
	};
	return (
		<TitleDescList
			items={items}
			onEdit={(item) => dispatch(setSelectedAboutService(item))}
			onDelete={onDelete}
			emptyLabel="No services added"
		/>
	);
};

/* ---------- Testimonials ---------- */
const testimonialInitial: TestimonialsFormData = {
	id: "",
	image: [],
	name: "",
	testimonial: "",
};

export const TestimonialsForm = () => {
	const dispatch = useAppDispatch();
	const selected = useAppSelector(getSelectedTestimonial);
	const existingImage = selected?.image ?? "";

	const form = useForm<TestimonialsFormData>({
		resolver: zodResolver(testimonialsSchema),
		defaultValues: testimonialInitial,
	});
	const loading = form.formState.isSubmitting;

	const onSubmit = async (data: TestimonialsFormData) => {
		const body = new FormData();
		body.append("name", data.name || "");
		body.append("testimonial", data.testimonial || "");
		body.append("existingImage", existingImage);
		if (data.image && data.image.length > 0) body.append("image", data.image[0]);
		const res = data.id
			? await axiosClient.put(`/testimonials/${data.id}`, body)
			: await axiosClient.post("/testimonials", body);
		if (res?.status === 200) {
			delayDispatch(dispatch, fetchTestimonials({}));
			resetForm();
		}
	};

	const resetForm = () => {
		form.reset(testimonialInitial);
		dispatch(setSelectedTestimonial(null));
	};

	useEffect(() => {
		if (selected) {
			form.reset({
				id: selected.id,
				image: [],
				name: selected.name,
				testimonial: selected.testimonial || "",
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
						name="testimonial"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Testimonial</FormLabel>
								<FormControl>
									<Textarea {...field} placeholder="Enter Testimonial" />
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

export const TestimonialsData = () => {
	const dispatch = useAppDispatch();
	const items = useAppSelector(getTestimonials);
	const onDelete = async (id: string, image: string) => {
		const res = await axiosClient.delete(`/testimonials`, {
			params: { id, image },
		});
		if (res.status === 200) delayDispatch(dispatch, fetchTestimonials({}));
	};

	if (!items.length)
		return (
			<div className="text-sm text-muted-foreground">No testimonials added</div>
		);

	return (
		<div className="space-y-3">
			{items.map((item) => (
				<div
					key={item.id}
					className="border rounded p-3 flex gap-3 items-start justify-between"
				>
					<div className="flex gap-3 flex-1">
						{item.image && (
							<NextImage
								src={item.image}
								alt={item.name}
								className="rounded size-16 object-cover shrink-0"
								isUnOptimized
							/>
						)}
						<div className="flex-1">
							<div className="font-bold">{item.name}</div>
							{item.testimonial && (
								<div className="text-sm mt-1 max-h-[80px] overflow-auto">
									{item.testimonial}
								</div>
							)}
						</div>
					</div>
					<div className="flex gap-1 shrink-0">
						<EditButton
							onClick={() => dispatch(setSelectedTestimonial(item))}
						/>
						<DeleteDrawer
							title={`Delete ${item.name}`}
							description="Are you sure you want to delete this testimonial? This action cannot be undone."
							onDelete={() => onDelete(item.id, item.image)}
						/>
					</div>
				</div>
			))}
		</div>
	);
};

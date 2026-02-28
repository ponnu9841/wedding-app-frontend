import { DeleteDrawer } from "@/components/shared/delete-drawer";
import FileUpload from "@/components/shared/file-upload";
import GenericTable from "@/components/shared/generic-table/generic-table";
import SelectField from "@/components/shared/select-field";
import { Button } from "@/components/ui/button";
import CustomDialog from "@/components/ui/custom-dialog";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import NextImage from "@/components/ui/image";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/hooks/use-store";
import { handleToast } from "@/lib/handle-toast";
import {
	addStoryImages,
	AddStoryImagesFormData,
	UpdateStoryBanner,
	updateStoryBanner,
	updateStoryImage,
	UpdateStoryImageFormData,
} from "@/schema";
import axiosClient from "@/services/axios";
import {
	fetchStories,
	getStoriesData,
	getStoriesLoading,
	getStoriesPageNo,
	setStoryListPageNo,
} from "@/store/features/story-slice";
import { zodResolver } from "@hookform/resolvers/zod";
import { Row } from "@tanstack/react-table";
import { Check, Delete, Edit } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdDelete } from "react-icons/md";

type StoriesRow = {
	row: Row<Story>;
};

const AddImages = ({ id }: { id: string }) => {
	const dispatch = useAppDispatch();
	const initialState = {
		id,
		images: [],
	};

	const form = useForm<AddStoryImagesFormData>({
		resolver: zodResolver(addStoryImages),
		defaultValues: initialState,
	});

	const loading = form.formState.isSubmitting;

	const onSubmit = async (data: AddStoryImagesFormData) => {
		const form = new FormData();
		form.append("id", data.id);
		data.images.forEach((image) => {
			form.append("images", image);
		});
		const response = await axiosClient.put("/story/images", form);
		if (response) dispatch(fetchStories({}));
	};

	return (
		<Form {...form}>
			<form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
				<input type="hidden" {...form.register("id")} />
				<FormField
					control={form.control}
					name="images"
					render={({ field, fieldState: { error } }) => (
						<FormItem>
							<FormLabel>Image</FormLabel>
							<FormControl>
								<FileUpload
									files={field.value || []}
									setFiles={field.onChange}
									placeholder="Select Image"
									error={error?.message}
									multiple
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button disabled={loading} size="sm" className="float-end">
					Add Image
				</Button>
			</form>
		</Form>
	);
};

const UpdateBanner = ({
	id,
	bannerImage,
}: {
	id: string;
	bannerImage: string;
}) => {
	const dispatch = useAppDispatch();
	const initialState = {
		id,
		bannerImage: [],
	};

	const form = useForm<UpdateStoryBanner>({
		resolver: zodResolver(updateStoryBanner),
		defaultValues: initialState,
	});

	const loading = form.formState.isSubmitting;

	const onSubmit = async (data: UpdateStoryBanner) => {
		const form = new FormData();
		form.append("id", data.id);
		form.append("existingImage", bannerImage);
		data.bannerImage.forEach((image) => {
			form.append("bannerImage", image);
		});
		if (data.bannerImage.length === 0) {
			handleToast({
				message: "Image is required",
				variant: "error",
			});
			return;
		}
		const response = await axiosClient.put("/story/banner-image", form);
		if (response) dispatch(fetchStories({}));
	};

	return (
		<Form {...form}>
			<form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
				<input type="hidden" {...form.register("id")} />
				<FormField
					control={form.control}
					name="bannerImage"
					render={({ field, fieldState: { error } }) => (
						<FormItem>
							<FormLabel>Update Banner Image</FormLabel>
							<FormControl>
								<FileUpload
									files={field.value || []}
									setFiles={field.onChange}
									placeholder="Select Image"
									error={error?.message}
									existingImage={bannerImage}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button disabled={loading} size="sm" className="float-end">
					Add Image
				</Button>
			</form>
		</Form>
	);
};

const UpdateTitle = ({ row }: StoriesRow) => {
	const dispatch = useAppDispatch();
	const [isEditable, setIsEditable] = useState(false);
	const [titleValue, setTitleValue] = useState(row.original.title);
	const [loading, setLoading] = useState(false);

	const updateTitle = async () => {
		if (!titleValue) {
			handleToast({
				message: "Title is required",
				variant: "error",
			});
			return;
		}
		setLoading(true);
		try {
			const response = await axiosClient.patch("/story/title", {
				id: row.original.id,
				title: titleValue,
			});
			if (response) {
				setIsEditable(false);
				dispatch(fetchStories({}));
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="relative mx-auto flex items-center justify-center gap-3">
			{!isEditable ? (
				<>
					<div className="text-center">{row.original.title}</div>
					<Button
						size="icon"
						className="size-5"
						onClick={() => setIsEditable(true)}
					>
						<Edit className="size-3" />
					</Button>
				</>
			) : (
				<>
					<Input
						defaultValue={row.original.title}
						value={titleValue}
						onChange={(e) => setTitleValue(e.target.value)}
					/>
					<Button
						size="icon"
						className="size-5"
						onClick={updateTitle}
						disabled={loading}
					>
						<Check className="size-3" />
					</Button>
				</>
			)}
		</div>
	);
};

const EditImageDialog = ({ image }: { image: StoryImage }) => {
	const dispatch = useAppDispatch();
	const initialState = {
		id: image.id,
		image: [],
	};

	const form = useForm<UpdateStoryImageFormData>({
		resolver: zodResolver(updateStoryImage),
		defaultValues: initialState,
	});

	const loading = form.formState.isSubmitting;

	const onSubmit = async (data: UpdateStoryImageFormData) => {
		const form = new FormData();
		form.append("id", data.id);
		form.append("existingImage", image.imageUrl);
		data.image.forEach((image) => {
			form.append("image", image);
		});

		const response = await axiosClient.patch(`/story/image/${data.id}`, form);
		if (response) dispatch(fetchStories({}));
	};

	return (
		<CustomDialog
			hideDialogTitle
			hideDialogDescription
			isModal
			dialogButton={
				<Button size="icon" className="size-5">
					<Edit className="size-3" />
				</Button>
			}
			dialogContent={
				<Form {...form}>
					<form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
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
											error={error?.message}
											existingImage={image.imageUrl}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button disabled={loading} size="sm" className="float-end">
							Add Image
						</Button>
					</form>
				</Form>
			}
		/>
	);
};

const DeleteImageDialog = ({ image }: { image: StoryImage }) => {
	const dispatch = useAppDispatch();
	const handleDelete = async () => {
		const response = await axiosClient.delete(`/story/image/${image.id}`, {
			data: {
				existingImage: image.imageUrl,
			},
		});
		if (response) dispatch(fetchStories({}));
	};

	return (
		<DeleteDrawer
			title="Delete story image"
			description="Are you sure you want to delete this image?. This action cannot be undone."
			deleteButton={
				<Button size="icon" className="size-5" variant="destructive">
					<MdDelete className="size-3" />
				</Button>
			}
			onDelete={handleDelete}
		/>
	);
};

const UpdateOrder = ({ row }: StoriesRow) => {
	const dispatch = useAppDispatch();
	const totalStoryItems = useAppSelector(getStoriesData)?.totalItems || 0;
	const data = Array.from({ length: totalStoryItems }).map((_, index) => ({
		label: `${index + 1}`,
		value: `${index + 1}`,
	}));

	const [order, setOrder] = useState("");
	const [loading, setLoading] = useState(false);

	const updateOrder = async () => {
		setLoading(true);
		try {
			const response = await axiosClient.patch(`/story/order`, {
				id: row.original.id,
				order: +order,
			});
			if (response) dispatch(fetchStories({}));
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (row.original.order) setOrder(row.original.order.toString());
	}, [row.original]);

	return (
		<div className="flex gap-1 items-center">
			<SelectField
				data={data}
				triggerClassName="rounded-none"
				onValueChange={(value) => setOrder(value)}
				value={order}
			/>
			<Button
				size="icon"
				className="size-5"
				onClick={updateOrder}
				disabled={loading}
			>
				<Check className="size-3" />
			</Button>
		</div>
	);
};

const columns = [
	{
		accessorKey: "name",
		header: "Banner Image",
		align: "center",
		cell: ({ row }: StoriesRow) => (
			<div className="flex gap-3.25 items-center justify-center relative min-w-25">
				<div className="relative w-fit">
					<NextImage
						src={row.original.bannerImage}
						alt=""
						className="rounded size-16"
						isUnOptimized
					/>
					<div className="absolute top-0 right-0">
						<CustomDialog
							hideDialogTitle
							hideDialogDescription
							isModal
							dialogButton={
								<Button size="icon" className="size-5">
									<Edit className="size-3" />
								</Button>
							}
							dialogContent={
								<UpdateBanner
									id={row.original.id}
									bannerImage={row.original.bannerImage}
								/>
							}
						/>
					</div>
				</div>
			</div>
		),
	},
	{
		accessorKey: "title",
		header: "Title",
		width: 150,
		align: "center",
		cell: ({ row }: StoriesRow) => <UpdateTitle row={row} />,
	},
	{
		accessorKey: "images",
		header: "Images",

		align: "center",
		cell: ({ row }: StoriesRow) => (
			<div className="flex flex-wrap gap-3.25 items-center max-w-120 max-h-50 overflow-auto">
				{row.original.images?.map((item) => (
					<div key={item.id} className="relative">
						<NextImage
							src={item.imageUrl}
							alt=""
							className="object-cover rounded size-25"
							isUnOptimized
						/>
						<div className="absolute top-0 right-0">
							<div className="flex gap-1">
								<EditImageDialog image={item} />
								<DeleteImageDialog image={item} />
							</div>
						</div>
					</div>
				))}
			</div>
		),
	},
	{
		accessorKey: "order",
		header: "Order",
		cell: ({ row }: StoriesRow) => <UpdateOrder row={row} />,
	},
	{
		accessorKey: "action",
		header: "Action",
		cell: ({ row }: StoriesRow) => (
			<div className="flex gap-3 items-center justify-center">
				<CustomDialog
					isModal
					hideDialogTitle
					hideDialogDescription
					dialogButton={<Button size="sm">Add Image</Button>}
					dialogContent={<AddImages id={row.original.id} />}
				/>
			</div>
		),
	},
];

const StoriesList = () => {
	const dispatch = useAppDispatch();
	const stories = useAppSelector(getStoriesData);
	const pageNo = useAppSelector(getStoriesPageNo);
	const loading = useAppSelector(getStoriesLoading);

	useEffect(() => {
		const controller = new AbortController();
		dispatch(fetchStories({ controller }));
		return () => controller.abort();
	}, []);

	return (
		<div>
			<GenericTable
				rows={stories?.data || []}
				columns={columns}
				infiniteScroll
				pageNo={pageNo}
				totalPages={stories?.totalPages || 1}
				loading={loading}
				setPageNo={setStoryListPageNo}
				height="100vh"
			/>
		</div>
	);
};

export default StoriesList;

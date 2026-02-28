import { DeleteDrawer } from "@/components/shared/delete-drawer";
import EditButton from "@/components/shared/edit-button";
import { CustomPagination } from "@/components/ui/custom-pagination";
import NextImage from "@/components/ui/image";
import { useAppDispatch, useAppSelector } from "@/hooks/use-store";
import { delayDispatch } from "@/lib/utils";
import axiosClient from "@/services/axios";
import {
	fetchFilms,
	getFilmsData,
	setFilmsPageNo,
	setSelectedFilm,
} from "@/store/features/films-slice";

const FilmsList = () => {
	const dispatch = useAppDispatch();
	const data = useAppSelector(getFilmsData);

	const deleteFilm = async (id: string, image: string) => {
		const response = await axiosClient.delete(`/film/${id}`, {
			data: {
				existingThumbnail: image,
			},
		});
		if (response.status === 200) {
			delayDispatch(dispatch, fetchFilms({}));
		}
	};

	if (data?.data.length === 0)
		return <div className="text-center">No Films found</div>;

	return (
		<div className="space-y-6">
			<div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
				{data?.data.map((item, index) => (
					<div key={index} className="max-w-[200px]">
						<div className="relative mb-3">
							<NextImage
								src={item.thumbnail}
								className="aspect-square max-w-[200px]"
								isUnOptimized
							/>
							<div className="absolute bottom-0 right-0">
								<EditButton onClick={() => dispatch(setSelectedFilm(item))} />
								<DeleteDrawer
									title={`Delete Banner ${item.title}`}
									description={`Are you sure you want to delete ${item.title}? This action cannot be undone.`}
									onDelete={() => deleteFilm(item.id, item.thumbnail)}
								/>
							</div>
							{/* <div className="absolute top-3 right-16">edit</div> */}
						</div>

						<div>
							<span className="font-bold">Title:&nbsp;</span>
							{item.title}
						</div>
						<div className="mt-3 max-h-[100px] overflow-auto">
							<span className="font-bold">Description:&nbsp;</span>
							{item.shortDescription}
						</div>
					</div>
				))}
			</div>
			<CustomPagination
				totalPages={data?.totalPages || 1}
				currentPage={data?.page || 1}
				onPageChange={(page) => dispatch(setFilmsPageNo(page))}
				isCustomIcon={false}
			/>
		</div>
	);
};

export default FilmsList;

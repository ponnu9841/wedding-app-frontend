import { useAppSelector, useAppDispatch } from "@/hooks/use-store";
import { DeleteDrawer } from "@/components/shared/delete-drawer";
import axiosInstance from "@/services/axios";
import EditButton from "@/components/shared/edit-button";
import NextImage from "@/components/ui/image";
import {
	fetchInstagramFollowData,
	getInstagramData,
	setSelectedInstagramFollowData,
} from "@/store/features/instagram-follow-slice";
import Link from "next/link";
import { delayDispatch } from "@/lib/utils";

export default function InstagramFollowData() {
	const dispatch = useAppDispatch();
	const data = useAppSelector(getInstagramData);

	const deleteBanner = async (id: string, image: string) => {
		const response = await axiosInstance.delete(`/instagram-follow`, {
			params: { id, image },
		});
		if (response.status === 200) {
			delayDispatch(dispatch, fetchInstagramFollowData({}));
		}
	};

	return (
		<div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
			{data.length > 0
				? data.map((item, index) => (
						<div key={index} className="max-w-[200px]">
							<div className="relative mb-3">
								<NextImage
									src={item.image}
									className="aspect-square max-w-[200px]"
									isUnOptimized
								/>
								<div className="absolute bottom-0 right-0">
									<EditButton
										onClick={() =>
											dispatch(setSelectedInstagramFollowData(item))
										}
									/>
									<DeleteDrawer
										title={`Delete This Instagram Follow Post`}
										description={`Are you sure you want to delete this instagram follow post? This action cannot be undone.`}
										onDelete={() => deleteBanner(item.id, item.image)}
									/>
								</div>
								{/* <div className="absolute top-3 right-16">edit</div> */}
							</div>

							<div className="flex gap-2 items-center">
								<span className="font-bold">Url</span>
								<Link
									href={item.url}
									target="_blank"
									className="truncate"
								>
									{item.url}
								</Link>
							</div>
						</div>
					))
				: "Posts not Added"}
		</div>
	);
}

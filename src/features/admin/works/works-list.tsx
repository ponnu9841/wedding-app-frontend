import { DeleteDrawer } from "@/components/shared/delete-drawer";
import EditButton from "@/components/shared/edit-button";
import NextImage from "@/components/ui/image";
import { useAppDispatch, useAppSelector } from "@/hooks/use-store";
import { delayDispatch } from "@/lib/utils";
import axiosInstance from "@/services/axios/axios-server-instance";
import {
	fetchWorks,
	getWorksData,
	setSelectedWork,
} from "@/store/features/home-slice";
import React from "react";

const WorksList = () => {
	const data = useAppSelector(getWorksData);
	const dispatch = useAppDispatch();

	const deleteWork = async (id: string, image: string) => {
		const response = await axiosInstance.delete(`/works`, {
			params: { id, image },
		});
		if (response.status === 200) {
			delayDispatch(dispatch, fetchWorks({}));
		}
	};

	return (
		<div>
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
											onClick={() => dispatch(setSelectedWork(item))}
										/>
										<DeleteDrawer
											title={`Delete This Work`}
											description={`Are you sure you want to delete this work? This action cannot be undone.`}
											onDelete={() => deleteWork(item.id, item.image)}
										/>
									</div>
									{/* <div className="absolute top-3 right-16">edit</div> */}
								</div>

								<div className="space-y-2">
									<div>
										<b>Title:</b>
										&nbsp;{item.title}
									</div>
									<div>
										<b>Sub Title:</b>
										&nbsp;{item.subtitle}
									</div>
								</div>
							</div>
						))
					: "Works not Added"}
			</div>
		</div>
	);
};

export default WorksList;

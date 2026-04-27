"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/use-store";
// import { stories } from "@/lib/const";
import {
	fetchStories,
	getStoriesData,
	getStoriesPageNo,
	setStoryListPageNo,
} from "@/store/features/story-slice";
import { useEffect } from "react";
import StoriesCard from "./stories-card";
import { CustomPagination } from "@/components/ui/custom-pagination";

const StoriesList = () => {
	const dispatch = useAppDispatch();
	const stories = useAppSelector(getStoriesData);
	const pageNo = useAppSelector(getStoriesPageNo);

	useEffect(() => {
		const controller = new AbortController();
		dispatch(fetchStories({ controller, isInfiniteLoad: false }));
		return () => controller.abort();
	}, [dispatch, pageNo]);

	return (
		<>
			<div className="grid gap-5 lg:gap-8 grid-cols-2 md:gird-cols-3 lg:grid-cols-4">
				{stories?.data.map((item) => (
					<StoriesCard {...item} key={item.id} />
				))}
			</div>
			<CustomPagination
				totalPages={stories?.totalPages ?? 1}
				currentPage={stories?.page ?? 1}
				onPageChange={(page) => dispatch(setStoryListPageNo(page))}
			/>
		</>
	);
};

export default StoriesList;

"use client";

import { Card } from "@/components/ui/card";
import { CustomPagination } from "@/components/ui/custom-pagination";
import NextImage from "@/components/ui/image";
import { useAppDispatch, useAppSelector } from "@/hooks/use-store";
// import { films } from "@/lib/const";
import {
	fetchFilms,
	getFilmsData,
	getFilmsPageNo,
	setFilmsPageNo,
} from "@/store/features/films-slice";
import Link from "next/link";
import { useEffect } from "react";

const FilmsList = () => {
	const dispatch = useAppDispatch();
	const pageNo = useAppSelector(getFilmsPageNo);
	const films = useAppSelector(getFilmsData);

	useEffect(() => {
		const controller = new AbortController();
		dispatch(fetchFilms({ controller }));
		return () => controller.abort();
	}, [dispatch, pageNo]);

	return (
		<div className="max-w-349.25 mx-auto mt-50 p-1">
			<Card className=" p-5 lg:p-18 rounded-lg lg:rounded-[1.875rem]">
				<div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
					{films?.data.map((item) => (
						<Link href={`/films/${item.id}`} key={item.id}>
							<div className="aspect-[294/368]">
								<NextImage src={item.thumbnail} imageClassName="object-cover" />
							</div>
							<h2 className="text-lg font-playfair-display mt-3">
								{item.title}
							</h2>
							<p className="text-xs font-medium leading-5 mt-2 line-clamp-8">
								{item.shortDescription}
							</p>
							{/* <div className="mt-2 text-foreground/60 text-xs font-medium">{item.type}</div> */}
						</Link>
					))}
				</div>
				<CustomPagination
					totalPages={films?.totalPages}
					currentPage={films?.page}
					onPageChange={(page) => dispatch(setFilmsPageNo(page))}
				/>
			</Card>
		</div>
	);
};

export default FilmsList;

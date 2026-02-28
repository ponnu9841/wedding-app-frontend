"use client";

import { Button } from "@/components/ui/button";
import NextImage from "@/components/ui/image";
import { Separator } from "@/components/ui/separator";
import { useAppDispatch, useAppSelector } from "@/hooks/use-store";
import { blogs } from "@/lib/const";
import { parseHtml } from "@/lib/utils";
import { fetchBlogs } from "@/store/features/blog-slice";
import Link from "next/link";
import React, { useEffect } from "react";

const BlogList = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		const controller = new AbortController();
		dispatch(fetchBlogs({ controller }));
		return () => controller.abort();
	}, []); //eslint-disable-line

	const { blogs, loading, pageNo } = useAppSelector((state) => state.blog);

	return (
		<div className="px-3 mx-auto max-w-7xl">
			{/* <div className="flex flex-wrap gap-3 mb-8">
				<Button variant="ghost" className="p-0 h-fit hover:bg-transparent">
					All
				</Button>
				<div className="min-h-full w-0.25 bg-foreground/30" />
				<Button variant="ghost" className="p-0 h-fit hover:bg-transparent">
					Classic Story Telling
				</Button>
				<div className="min-h-full w-0.25 bg-foreground/30" />
				<Button variant="ghost" className="p-0 h-fit hover:bg-transparent">
					New Age Modern
				</Button>
				<div className="min-h-full w-0.25 bg-foreground/30" />
				<Button variant="ghost" className="p-0 h-fit hover:bg-transparent">
					Intimates
				</Button>
			</div> */}
			<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{blogs?.data.map((item) => (
					<Link href={`blogs/${item.id}`} key={item.id}>
						<div className="aspect-[334/222]">
							<NextImage
								src={item.image}
								className="aspect-[167/111]"
								imageClassName="object-cover"
							/>
						</div>
						{/* <div className="my-3 text-xs">{item.type}</div> */}
						<h3 className="mb-2 text-lg font-playfair-display">{item.title}</h3>
						{item.content && <div className="[&>p]:text-xs [&>p]leading-5">{parseHtml(item.content)}</div>}
					</Link>
				))}
			</div>
		</div>
	);
};

export default BlogList;

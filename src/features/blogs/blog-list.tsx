import { Button } from "@/components/ui/button";
import NextImage from "@/components/ui/image";
import { Separator } from "@/components/ui/separator";
import { blogs } from "@/lib/const";
import Link from "next/link";
import React from "react";

const BlogList = () => {
	return (
		<div className="max-w-7xl mx-auto">
			<div className="flex gap-3 mb-8">
				<Button variant="ghost" className="h-fit p-0 hover:bg-transparent">
					All
				</Button>
				<div className="min-h-full w-0.25 bg-foreground/30" />
				<Button variant="ghost" className="h-fit  p-0 hover:bg-transparent">
					Classic Story Telling
				</Button>
				<div className="min-h-full w-0.25 bg-foreground/30" />
				<Button variant="ghost" className="h-fit p-0 hover:bg-transparent">
					New Age Modern
				</Button>
				<div className="min-h-full w-0.25 bg-foreground/30" />
				<Button variant="ghost" className="h-fit p-0 hover:bg-transparent">
					Intimates
				</Button>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
				{blogs.map((item, index) => (
					<Link href="#" key={index}>
						<div className="aspect-[334/222]">
							<NextImage
								src={item.image}
								className="aspect-[167/111]"
								imageClassName="object-cover"
							/>
						</div>
						<div className="my-3 text-xs">{item.type}</div>
						<h3 className="font-playfair-display text-lg mb-2">{item.title}</h3>
						{item.description && (
							<p className="text-xs leading-5">{item.description}</p>
						)}
					</Link>
				))}
			</div>
		</div>
	);
};

export default BlogList;

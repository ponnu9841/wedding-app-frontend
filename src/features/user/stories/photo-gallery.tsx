"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Share2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import CustomDialog from "@/components/ui/custom-dialog";

// Matches your Tailwind breakpoints: columns-1 sm:columns-2 md:columns-3 lg:columns-4
const useColumnCount = () => {
	const [columns, setColumns] = useState(1);

	useEffect(() => {
		const getColumns = () => {
			const w = window.innerWidth;
			if (w >= 1024) return 4; // lg
			if (w >= 768) return 3; // md
			if (w >= 640) return 2; // sm
			return 2;
		};

		const update = () => setColumns(getColumns());
		update();
		window.addEventListener("resize", update);
		return () => window.removeEventListener("resize", update);
	}, []);

	return columns;
};

const PhotoGallery = ({ story }: { story: Story }) => {
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
	const selectedImage = selectedIndex !== null ? story.images[selectedIndex] : null;
	const columnCount = useColumnCount();

	// Distribute images round-robin so order reads left-to-right, top-to-bottom
	// (item 0 -> col 0, item 1 -> col 1, item 2 -> col 2 ... instead of filling col 0 fully first)
	const columnItems: { item: (typeof story.images)[number]; index: number }[][] = Array.from(
		{ length: columnCount },
		() => []
	);
	story.images.forEach((item, index) => {
		columnItems[index % columnCount].push({ item, index });
	});

	const goToPrev = () => {
		if (selectedIndex === null) return;
		setSelectedIndex((selectedIndex - 1 + story.images.length) % story.images.length);
	};

	const goToNext = () => {
		if (selectedIndex === null) return;
		setSelectedIndex((selectedIndex + 1) % story.images.length);
	};

	useEffect(() => {
		if (selectedIndex === null) return;
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowLeft")
				setSelectedIndex((i) => (i === null ? null : (i - 1 + story.images.length) % story.images.length));
			if (e.key === "ArrowRight")
				setSelectedIndex((i) => (i === null ? null : (i + 1) % story.images.length));
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [selectedIndex, story.images.length]);

	return (
		<div className="w-full min-h-screen p-4">
			<div className="mx-auto max-w-415">
				<h2 className="mb-8 text-4xl font-playfair-display text-center text-foreground/80">
					{story.title}
				</h2>

				{/* Replaces `columns-*` with a flex row of flex columns.
				    Each column stacks its own items with natural height (masonry-like),
				    but items are assigned round-robin so visual reading order goes left -> right. */}
				<div className="flex gap-2">
					{columnItems.map((col, colIdx) => (
						<div key={colIdx} className="flex flex-1 flex-col gap-2">
							{col.map(({ item, index }) => (
								<Card
									key={index}
									className="relative overflow-hidden cursor-pointer group hover:shadow-2xl p-0 rounded-none"
									onClick={() => setSelectedIndex(index)}
								>
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img
										src={item.imageUrl}
										alt={story.title}
										className="w-full h-full object-cover transition-all duration-300 group-hover:scale-[1.02]"
									/>

									{/* Overlay on hover */}
									<div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end justify-end opacity-0 group-hover:opacity-100">
										<div className="flex gap-4">
											<button
												className="relative bottom-2 right-2 p-3 cursor-pointer"
												onClick={(e) => {
													e.stopPropagation();
												}}
											>
												<Share2 className="w-5 h-5 text-white" />
											</button>
										</div>
									</div>
								</Card>
							))}
						</div>
					))}
				</div>

				{/* Lightbox Dialog */}
				<CustomDialog
					dialogOpen={!!selectedImage}
					setDialogOpen={() => setSelectedIndex(null)}
					hideDialogTitle
					hideDialogDescription
					contentClassName="p-0 max-h-[80vh] bg-transparent border-none shadow-none sm:max-w-8/10 sm:w-fit"
					dialogButton={<div />}
					isModal
					dialogContent={
						<div className="relative w-full h-full">
							{selectedImage && (
								<div className="flex items-center justify-center w-full h-full max-h-[78vh]">
									{/* eslint-disable-next-line */}
									<img
										src={selectedImage.imageUrl}
										alt={selectedImage.id}
										className="object-cover max-w-full max-h-full"
									/>
								</div>
							)}

							<button
								onClick={goToPrev}
								className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors cursor-pointer"
							>
								<ChevronLeft className="w-6 h-6 text-white" />
							</button>
							<button
								onClick={goToNext}
								className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors cursor-pointer"
							>
								<ChevronRight className="w-6 h-6 text-white" />
							</button>
						</div>
					}
				/>
			</div>
		</div>
	);
};

export default PhotoGallery;
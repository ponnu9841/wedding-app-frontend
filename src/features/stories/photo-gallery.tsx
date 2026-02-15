"use client";

import { useState } from "react";
import { Share2 } from "lucide-react";
import { storiesDetails } from "@/lib/const";
import { Card } from "@/components/ui/card";
import CustomDialog from "@/components/ui/custom-dialog";

const PhotoGallery = () => {
	const [selectedImage, setSelectedImage] = useState<{
		image: string;
		name: string;
	} | null>(null);

	return (
		<div className="w-full min-h-screen p-4 bg-gradient-to-br from-slate-50 to-slate-100">
			<div className="mx-auto max-w-415">
				<h1 className="mb-8 text-4xl font-bold text-center text-slate-800">
					Wedding Gallery
				</h1>

				<div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-2">
					{storiesDetails.map((item, index) => (
						<Card
							key={index}
							className="relative overflow-hidden cursor-pointer group hover:shadow-2xl p-0 mt-3 first:mt-0 rounded-none group"
							onClick={() => setSelectedImage(item)}
						>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src={item.image}
								alt={item.name}
								className="w-full h-full object-cover transition-all duration-300 group-hover:scale-[1.02]"
							/>

							{/* Overlay on hover */}
							<div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end justify-end opacity-0 group-hover:opacity-100">
								<div className="flex gap-4">
									{/* <button
										className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
										onClick={(e) => {
											e.stopPropagation();
											// Handle like
										}}
									>
										<Heart className="w-5 h-5 text-slate-700" />
									</button>
									<button
										className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
										onClick={(e) => {
											e.stopPropagation();
										}}
									>
										<Download className="w-5 h-5 text-slate-700" />
									</button> */}
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

				{/* Masonry Grid Layout */}

				{/* Lightbox Dialog */}
				<CustomDialog
					dialogOpen={!!selectedImage}
					setDialogOpen={() => setSelectedImage(null)}
					hideDialogTitle
					hideDialogDescription
					contentClassName="p-0 max-h-[80vh] bg-transparent border-none shadow-none max-w-fit"
					dialogButton={<div />}
					isModal
					dialogContent={
						<div className="relative w-full h-full">
							{selectedImage && (
								<div className="flex items-center justify-center w-full h-full max-h-[78vh]">
									{/* eslint-disable-next-line */}
									<img
										src={selectedImage.image}
										alt={selectedImage.name}
										className="object-contain max-w-full max-h-full"
									/>
								</div>
							)}

							{/* Navigation and actions */}
							{selectedImage && (
								<div className="absolute bottom-0 left-0 right-0 p-6">
									<div className="flex justify-center gap-4">
										<button className="p-3 transition-colors rounded-full bg-white/20 hover:bg-white/30 cursor-pointer">
											<Share2 className="w-6 h-6 text-white" />
										</button>
									</div>
								</div>
							)}
						</div>
					}
				/>
			</div>
		</div>
	);
};

export default PhotoGallery;

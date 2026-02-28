"use client";

import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

interface CustomPaginationProps {
	totalPages: number;
	currentPage: number;
	onPageChange: (page: number) => void;
}

export function CustomPagination({
	totalPages,
	currentPage,
	onPageChange,
}: CustomPaginationProps) {
	const handlePrevious = () => {
		if (currentPage > 1) {
			onPageChange(currentPage - 1);
		}
	};

	const handleNext = () => {
		if (currentPage < totalPages) {
			onPageChange(currentPage + 1);
		}
	};

	return (
		<Pagination className="my-8">
			<PaginationContent className="gap-0 justify-center w-full">
				{/* Previous Button */}
				<PaginationItem>
					<button
						onClick={handlePrevious}
						disabled={currentPage === 1}
						className="text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors relative w-15 lg:w-35.5 cursor-pointer"
						aria-label="Previous page"
					>
						<div className="relative w-full z-3">
							<div
								className={cn(
									"relative -rotate-45 border-t-2 border-l-2 border-foreground/50 size-3 left-0.5 z-2",
								)}
							></div>
							<div
								className={cn(
									"absolute top-1/2 -translate-y-1/2 h-0.25 bg-foreground/50 w-full z-1",
								)}
							></div>
							<span className="sr-only">Previous slide</span>
						</div>
						{/* <ChevronLeftIcon className="w-5 h-5" /> */}
					</button>
				</PaginationItem>

				{/* Page Numbers */}
				<div className="flex-1 flex flex-wrap justify-center items-center gap-2 px-4 max-w-[calc(100%-8rem)]">
					{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
						<PaginationItem key={page}>
							<PaginationLink
								onClick={() => onPageChange(page)}
								isActive={page === currentPage}
								className={cn(
									"size-6 lg:size-10 flex items-center justify-center font-mono text-sm cursor-pointer text-foreground border-none",
								)}
							>
								{String(page).padStart(2, "0")}
							</PaginationLink>
						</PaginationItem>
					))}
				</div>

				{/* Next Button */}
				<PaginationItem>
					<button
						onClick={handleNext}
						disabled={currentPage === totalPages}
						className="text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors relative w-15 lg:w-35.5 cursor-pointer"
						aria-label="Next page"
					>
						<div
							className={cn(
								"relative border-2 border-r-0 border-b-0 border-foreground/50 rotate-135 size-3 right-0.5 float-right z-2",
							)}
						/>
						<div
							className={cn(
								"absolute top-1/2 left-0 -translate-y-1/2 h-0.25 bg-foreground/50 w-[calc(100%-0.05rem)] z-1 rounded-r",
							)}
						/>
					</button>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}

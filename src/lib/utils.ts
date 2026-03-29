import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import parse from "html-react-parser";
import { Action } from "@reduxjs/toolkit";
import { getMetaTags } from "@/services/axios/get-data-server";
import { Metadata } from "next";

type PageKey = "home" | "about" | "story" | "films" | "blog" | "contact";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const parseHtml = (html?: string) => {
	if (!html) return "";
	return parse(html);
};

export const delayDispatch = (
	dispatch: (action: Action) => void,
	action: any, // eslint-disable-line
	delay: number = 500,
) => {
	setTimeout(() => {
		dispatch(action);
	}, delay);
};

export const formatDateToMonthYear = (dateString: string) => {
	// Create a new Date object from the input string
	const date = new Date(dateString);

	// Define an array of short month names
	const shortMonths = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	// Extract the month and year
	const month = shortMonths[date.getMonth()];
	const year = date.getFullYear();
	const day = `0${date.getDate()}`.slice(-2);

	// Return the formatted string
	// return `${month} ${year}`;
	return `${day} ${month} ${year}`;
};

export const checkIfAltPresent = (pathName: string | null) => {
	return (
		pathName?.includes("/stories") ||
		pathName?.includes("/films") ||
		pathName?.includes("/contact") ||
		pathName?.includes("/blogs")
	);
};

export function getPages() {
	return ["home", "about", "story", "films", "blog", "contact"];
}

export function capitalizeFirstLetter(str: string): string {
	if (!str) return str;
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getCurrentMetaTag(metaTags: Seo[] | null, page: string) {
	if (!metaTags || metaTags.length === 0) return null;
	return metaTags?.find((metaTag) => metaTag.page === page);
}

export async function generatePageMetadata(
	pageKey: PageKey,
): Promise<Metadata> {
	const metaTags = await getMetaTags();
	const currentMetaTag = getCurrentMetaTag(metaTags, pageKey);

	return {
		title: currentMetaTag?.title || "Default Title",
		description:
			currentMetaTag?.description || "Default description for the site.",
	};
}

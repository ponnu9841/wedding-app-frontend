import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import parse from "html-react-parser";
import { Action } from "@reduxjs/toolkit";

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

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import parse from "html-react-parser";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const parseHtml = (html?: string) => {
	if (!html) return "";
	return parse(html);
};

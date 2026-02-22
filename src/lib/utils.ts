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

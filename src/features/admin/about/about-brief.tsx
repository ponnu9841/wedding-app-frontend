import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/hooks/use-store";
import { AboutBriefFormData, aboutBriefSchema } from "@/schema";
import axiosClient from "@/services/axios";
import {
	fetchAboutBrief,
	getAboutBriefData,
} from "@/store/features/about-slice";
import {
	fetchHomeVideoBanner,
	getHomeVideoBannerData,
} from "@/store/features/home-slice";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const initialState = {
	id: "",
	videoUrl: "",
};

const AboutBrief = ({ type }: { type?: string }) => {
	const form = useForm<AboutBriefFormData>({
		resolver: zodResolver(aboutBriefSchema),
		defaultValues: initialState,
	});
	const loading = form.formState.isSubmitting;

	const dispatch = useAppDispatch();
	const aboutBriefData = useAppSelector(getAboutBriefData);
	const homeBannerData = useAppSelector(getHomeVideoBannerData);

	const onSubmit = async (data: AboutBriefFormData) => {
		const reqBody = {
			id: data.id || "",
			videoUrl: data.videoUrl || "",
		};
		const method = data.id ? axiosClient.put : axiosClient.post;

		let url = `/about/brief`;
		if (type === "video-banner") {
			url = data.id ? `/home-video-banner/${data.id}` : `/home-video-banner`;
		}

		const response = await method(url, reqBody);
		if (response) {
			if (type === "video-banner") {
				dispatch(fetchHomeVideoBanner({}));
				return;
			}
			dispatch(fetchAboutBrief({}));
		}
	};

	useEffect(() => {
		if (type === "video-banner" && homeBannerData) {
			form.reset(homeBannerData);
			return;
		}
		if (type !== "video-banner" && aboutBriefData) {
			form.reset(aboutBriefData);
		}
	}, [aboutBriefData]);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4   ">
					<input type="hidden" {...form.register("id")} />
					<FormField
						control={form.control}
						name="videoUrl"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Video URL</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Enter Video URL" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button disabled={loading}>
						{loading ? "Submitting..." : "Submit"}
					</Button>
				</form>
			</Form>
			<iframe
				src={
					type === "video-banner"
						? homeBannerData?.bannerUrl
						: aboutBriefData?.videoUrl
				}
			/>
		</div>
	);
};

export default AboutBrief;

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
import { VideoBannerFormData, videoBannerSchema } from "@/schema";
import axiosInstance from "@/services/axios/axios-server-instance";
import { getAboutBriefData } from "@/store/features/about-slice";
import {
	fetchHomeVideoBanner,
	getHomeVideoBannerData,
} from "@/store/features/home-slice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const initialState = {
	id: "",
	videoUrl: "",
};

const VideoBanner = () => {
	const form = useForm<VideoBannerFormData>({
		resolver: zodResolver(videoBannerSchema),
		defaultValues: initialState,
	});
	const loading = form.formState.isSubmitting;

	const dispatch = useAppDispatch();
	const homeBannerData = useAppSelector(getHomeVideoBannerData);

	console.log(homeBannerData)

	const onSubmit = async (data: VideoBannerFormData) => {
		const reqBody = {
			id: data.id || "",
			videoUrl: data.videoUrl || "",
		};
		const method = data.id ? axiosInstance.put : axiosInstance.post;

		const url = data.id
			? `/home-video-banner/${data.id}`
			: `/home-video-banner`;

		const response = await method(url, reqBody);
		if (response) {
			dispatch(fetchHomeVideoBanner({}));
		}
	};

	useEffect(() => {
		if (homeBannerData) {
			form.reset({
				videoUrl: homeBannerData.bannerUrl || "",
			});
			return;
		}
	}, [homeBannerData]);

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
			<iframe src={homeBannerData?.bannerUrl} />
		</div>
	);
};

export default VideoBanner;

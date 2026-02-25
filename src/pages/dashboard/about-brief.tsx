import DashBoardLayout from "@/components/layout/admin/dashboard-layout";
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
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const initialState = {
	id: "",
	videoUrl: "",
};

const AboutBriefPage = () => {
	const form = useForm<AboutBriefFormData>({
		resolver: zodResolver(aboutBriefSchema),
		defaultValues: initialState,
	});
	const loading = form.formState.isSubmitting;

	const dispatch = useAppDispatch();
	const aboutBriefData = useAppSelector(getAboutBriefData);

	const onSubmit = async (data: AboutBriefFormData) => {
		const reqBody = {
			id: data.id || "",
			videoUrl: data.videoUrl || "",
		};
		const method = data.id ? axiosClient.put : axiosClient.post;

		const response = await method("/about/brief", reqBody);
		if (response) {
			dispatch(fetchAboutBrief({}));
		}
	};

	useEffect(() => {
		const controller = new AbortController();
		dispatch(fetchAboutBrief({ controller }));
		return () => controller.abort();
	}, []);

	useEffect(() => {
		if (aboutBriefData) {
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
			<iframe src={aboutBriefData?.videoUrl} />
		</div>
	);
};

AboutBriefPage.getLayout = function getLayout(page: React.ReactElement) {
	return <DashBoardLayout>{page}</DashBoardLayout>;
};

export default AboutBriefPage;

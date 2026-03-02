// import Banner from "@/components/admin/banner";

import DashBoardLayout from "@/components/layout/admin/dashboard-layout";
import AdminSectionLayout from "@/components/shared/admin-section-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AboutBrief from "@/features/admin/about/about-brief";
import AboutForm from "@/features/admin/about/about-form";
import BannerData from "@/features/admin/banner/banner-data";
import BannerForm from "@/features/admin/banner/banner-form";
import InstagramFollowData from "@/features/admin/instagram-follow/instagram-follow-data";
import InstagramFollowForm from "@/features/admin/instagram-follow/instagram-follow-form";
import { useAppDispatch } from "@/hooks/use-store";
import {
	fetchAboutBrief,
	fetchAboutImages,
} from "@/store/features/about-slice";
import { fetchBanner, setSelectedBanner } from "@/store/features/banner-slice";
import {
	fetchInstagramFollowData,
	setSelectedInstagramFollowData,
} from "@/store/features/instagram-follow-slice";
import { useEffect } from "react";

export default function DashboardPage() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		const controller = new AbortController();
		dispatch(fetchBanner(controller));
		dispatch(fetchAboutImages({ controller }));
		dispatch(fetchAboutBrief({ controller }));
		dispatch(fetchInstagramFollowData({ controller }));
		return () => {
			controller.abort();
			dispatch(setSelectedBanner(null));
			dispatch(setSelectedInstagramFollowData(null));
		};
	}, [dispatch]);

	return (
		<Tabs defaultValue="banner" className="w-full flex flex-col gap-4">
			<TabsList>
				<TabsTrigger value="banner">Banner</TabsTrigger>
				<TabsTrigger value="about">About</TabsTrigger>
				<TabsTrigger value="aboutBrief">About Brief</TabsTrigger>
				<TabsTrigger value="instagram">Follow on Instagram</TabsTrigger>
			</TabsList>
			<TabsContent value="banner">
				<AdminSectionLayout
					leftSection={<BannerForm />}
					rightSection={<BannerData />}
				/>
			</TabsContent>
			<TabsContent value="about">
				<AboutForm />
			</TabsContent>
			<TabsContent value="aboutBrief">
				<AboutBrief />
			</TabsContent>
			<TabsContent value="instagram">
				<AdminSectionLayout
					leftSection={<InstagramFollowForm />}
					rightSection={<InstagramFollowData />}
				/>
			</TabsContent>
		</Tabs>
	);
}

DashboardPage.getLayout = function getLayout(page: React.ReactElement) {
	return <DashBoardLayout>{page}</DashBoardLayout>;
};

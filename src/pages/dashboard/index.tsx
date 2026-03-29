// import Banner from "@/components/admin/banner";

import DashBoardLayout from "@/components/layout/admin/dashboard-layout";
import AdminSectionLayout from "@/components/shared/admin-section-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AboutBrief from "@/features/admin/about/about-brief";
import AboutForm from "@/features/admin/about/about-form";
import BannerData from "@/features/admin/banner/banner-data";
import BannerForm from "@/features/admin/banner/banner-form";
import HomeAboutBannerForm from "@/features/admin/home-about-banner/home-about-banner-form";
import StoryBannerForm from "@/features/admin/story-banner/story-banner-form";
import InstagramFollowData from "@/features/admin/instagram-follow/instagram-follow-data";
import InstagramFollowForm from "@/features/admin/instagram-follow/instagram-follow-form";
import WorksForm from "@/features/admin/works/works-form";
import WorksList from "@/features/admin/works/works-list";
import { useAppDispatch } from "@/hooks/use-store";
import {
	fetchAboutBrief,
	fetchAboutImages,
} from "@/store/features/about-slice";
import { fetchBanner, setSelectedBanner } from "@/store/features/banner-slice";
import {
	fetchHomeAboutBanner,
	fetchHomeVideoBanner,
	fetchStoryBanner,
	fetchWorks,
	setSelectedWork,
} from "@/store/features/home-slice";
import {
	fetchInstagramFollowData,
	setSelectedInstagramFollowData,
} from "@/store/features/instagram-follow-slice";
import { useEffect } from "react";
import Seo from "@/features/admin/seo/seo";
import { fetchSeo } from "@/store/features/seo-slice";
import VideoBanner from "@/features/admin/video-banner/video-banner";

export default function DashboardPage() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		const controller = new AbortController();
		dispatch(fetchBanner(controller));
		dispatch(fetchAboutImages({ controller }));
		dispatch(fetchAboutBrief({ controller }));
		dispatch(fetchInstagramFollowData({ controller }));
		dispatch(fetchHomeAboutBanner({ controller }));
		dispatch(fetchHomeVideoBanner({ controller }));
		dispatch(fetchStoryBanner({ controller }));
		dispatch(fetchWorks({ controller }));
		dispatch(fetchSeo({ controller }));
		return () => {
			controller.abort();
			dispatch(setSelectedBanner(null));
			dispatch(setSelectedInstagramFollowData(null));
			dispatch(setSelectedWork(null));
		};
	}, [dispatch]);

	return (
		<Tabs defaultValue="banner" className="w-full flex flex-col gap-4">
			<TabsList>
				<TabsTrigger value="banner">Banner</TabsTrigger>
				<TabsTrigger value="about">About</TabsTrigger>
				<TabsTrigger value="aboutBrief">About Brief</TabsTrigger>
				<TabsTrigger value="instagram">Follow on Instagram</TabsTrigger>
				<TabsTrigger value="banner-1">Home Banner 1</TabsTrigger>
				<TabsTrigger value="video-banner">Video Banner</TabsTrigger>
				<TabsTrigger value="story-banner">Story Banner</TabsTrigger>
				<TabsTrigger value="works">Works</TabsTrigger>
				<TabsTrigger value="seo">Seo</TabsTrigger>
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
			<TabsContent value="banner-1">
				<HomeAboutBannerForm />
			</TabsContent>
			<TabsContent value="video-banner">
				<VideoBanner />
			</TabsContent>
			<TabsContent value="story-banner">
				<StoryBannerForm />
			</TabsContent>
			<TabsContent value="works">
				<AdminSectionLayout
					leftSection={<WorksForm />}
					rightSection={<WorksList />}
				/>
			</TabsContent>
			<TabsContent value="seo">
				<Seo />
			</TabsContent>
		</Tabs>
	);
}

DashboardPage.getLayout = function getLayout(page: React.ReactElement) {
	return <DashBoardLayout>{page}</DashBoardLayout>;
};

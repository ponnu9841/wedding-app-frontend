import DashBoardLayout from "@/components/layout/admin/dashboard-layout";
import AdminSectionLayout from "@/components/shared/admin-section-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	AboutBannerData,
	AboutBannerForm,
} from "@/features/admin/about-page/about-banner-section";
import {
	FounderData,
	FounderForm,
} from "@/features/admin/about-page/founder-section";
import {
	ManagingDirectorData,
	ManagingDirectorForm,
} from "@/features/admin/about-page/managing-director-section";
import {
	AboutServicesData,
	AboutServicesForm,
	OurStoryData,
	OurStoryForm,
	TestimonialsData,
	TestimonialsForm,
	WhatMakesUsUniqueData,
	WhatMakesUsUniqueForm,
} from "@/features/admin/about-page/text-sections";
import { useAppDispatch } from "@/hooks/use-store";
import {
	fetchAboutBanners,
	fetchAboutServices,
	fetchFounders,
	fetchManagingDirectors,
	fetchOurStories,
	fetchTestimonials,
	fetchWhatMakesUsUnique,
	setSelectedAboutBanner,
	setSelectedAboutService,
	setSelectedFounder,
	setSelectedManagingDirector,
	setSelectedOurStory,
	setSelectedTestimonial,
	setSelectedWhatMakesUsUnique,
} from "@/store/features/about-page-slice";
import React, { useEffect } from "react";

export default function AboutDashboardPage() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		const controller = new AbortController();
		dispatch(fetchFounders({ controller }));
		dispatch(fetchManagingDirectors({ controller }));
		dispatch(fetchAboutBanners({ controller }));
		dispatch(fetchOurStories({ controller }));
		dispatch(fetchWhatMakesUsUnique({ controller }));
		dispatch(fetchAboutServices({ controller }));
		dispatch(fetchTestimonials({ controller }));
		return () => {
			controller.abort();
			dispatch(setSelectedFounder(null));
			dispatch(setSelectedManagingDirector(null));
			dispatch(setSelectedAboutBanner(null));
			dispatch(setSelectedOurStory(null));
			dispatch(setSelectedWhatMakesUsUnique(null));
			dispatch(setSelectedAboutService(null));
			dispatch(setSelectedTestimonial(null));
		};
	}, [dispatch]);

	return (
		<Tabs defaultValue="about-banner" className="w-full flex flex-col gap-4">
			<TabsList>
				<TabsTrigger value="about-banner">About Banner</TabsTrigger>
				<TabsTrigger value="founder">Founder</TabsTrigger>
				<TabsTrigger value="our-story">Our Story</TabsTrigger>
				<TabsTrigger value="what-makes-us-unique">
					What Makes Us Unique
				</TabsTrigger>
				<TabsTrigger value="about-services">About Services</TabsTrigger>
				<TabsTrigger value="testimonials">Testimonials</TabsTrigger>
				<TabsTrigger value="team">Team</TabsTrigger>
			</TabsList>
			<TabsContent value="founder">
				<h2 className="text-lg font-semibold mb-4">Founder</h2>
				<AdminSectionLayout
					leftSection={<FounderForm />}
					rightSection={<FounderData />}
				/>
			</TabsContent>
			<TabsContent value="about-banner">
				<h2 className="text-lg font-semibold mb-4">About Banner</h2>
				<AdminSectionLayout
					leftSection={<AboutBannerForm />}
					rightSection={<AboutBannerData />}
				/>
			</TabsContent>
			<TabsContent value="our-story">
				<h2 className="text-lg font-semibold mb-4">Our Story</h2>
				<AdminSectionLayout
					leftSection={<OurStoryForm />}
					rightSection={<OurStoryData />}
				/>
			</TabsContent>
			<TabsContent value="what-makes-us-unique">
				<h2 className="text-lg font-semibold mb-4">What Makes Us Unique</h2>
				<AdminSectionLayout
					leftSection={<WhatMakesUsUniqueForm />}
					rightSection={<WhatMakesUsUniqueData />}
				/>
			</TabsContent>
			<TabsContent value="about-services">
				<h2 className="text-lg font-semibold mb-4">About Services</h2>
				<AdminSectionLayout
					leftSection={<AboutServicesForm />}
					rightSection={<AboutServicesData />}
				/>
			</TabsContent>
			<TabsContent value="testimonials">
				<h2 className="text-lg font-semibold mb-4">Testimonials</h2>
				<AdminSectionLayout
					leftSection={<TestimonialsForm />}
					rightSection={<TestimonialsData />}
				/>
			</TabsContent>
			<TabsContent value="team">
				<h2 className="text-lg font-semibold mb-4">Team</h2>
				<AdminSectionLayout
					leftSection={<ManagingDirectorForm />}
					rightSection={<ManagingDirectorData />}
				/>
			</TabsContent>
		</Tabs>
	);
}

AboutDashboardPage.getLayout = function getLayout(page: React.ReactElement) {
	return <DashBoardLayout>{page}</DashBoardLayout>;
};

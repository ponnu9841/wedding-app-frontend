import DashBoardLayout from "@/components/layout/admin/dashboard-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageHeroForm from "@/features/admin/page-hero/page-hero-form";
import ContactSubmissions from "@/features/admin/contact/contact-submissions";
import React from "react";

const ContactDashboardPage = () => {
	return (
		<Tabs defaultValue="submissions" className="w-full flex flex-col gap-4">
			<TabsList>
				<TabsTrigger value="submissions">Submissions</TabsTrigger>
				<TabsTrigger value="page-hero">Page Hero</TabsTrigger>
			</TabsList>
			<TabsContent value="submissions">
				<h2 className="text-lg mb-4">Contact Submissions</h2>
				<ContactSubmissions />
			</TabsContent>
			<TabsContent value="page-hero">
				<h2 className="text-lg mb-4">Contact Page Hero</h2>
				<PageHeroForm page="contact" />
			</TabsContent>
		</Tabs>
	);
};

ContactDashboardPage.getLayout = function getLayout(page: React.ReactElement) {
	return <DashBoardLayout>{page}</DashBoardLayout>;
};

export default ContactDashboardPage;

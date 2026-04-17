import DashBoardLayout from "@/components/layout/admin/dashboard-layout";
import PageHeroForm from "@/features/admin/page-hero/page-hero-form";
import React from "react";

const ContactDashboardPage = () => {
	return (
		<div className="space-y-4">
			<h2 className="text-lg">Contact Page Hero</h2>
			<PageHeroForm page="contact" />
		</div>
	);
};

ContactDashboardPage.getLayout = function getLayout(page: React.ReactElement) {
	return <DashBoardLayout>{page}</DashBoardLayout>;
};

export default ContactDashboardPage;

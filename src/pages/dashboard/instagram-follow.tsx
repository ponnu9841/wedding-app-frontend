import DashBoardLayout from "@/components/layout/admin/dashboard-layout";
import AdminSectionLayout from "@/components/shared/admin-section-layout";
import InstagramFollowData from "@/features/admin/instagram-follow/instagram-follow-data";
import InstagramFollowForm from "@/features/admin/instagram-follow/instagram-follow-form";
import { useAppDispatch } from "@/hooks/use-store";
import {
	fetchInstagramFollowData,
	setSelectedInstagramFollowData,
} from "@/store/features/instagram-follow-slice";
import React, { useEffect } from "react";

export default function DashboardPage() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		const controller = new AbortController();
		dispatch(fetchInstagramFollowData({ controller }));
		return () => {
			controller.abort();
			dispatch(setSelectedInstagramFollowData(null));
		};
	}, [dispatch]);

	return (
		<div>
			<h2 className="text-lg">Instagram Follow</h2>
			<AdminSectionLayout
                leftSection={<InstagramFollowForm />}
                rightSection={<InstagramFollowData />}
            />
		</div>
	);
}

DashboardPage.getLayout = function getLayout(page: React.ReactElement) {
	return <DashBoardLayout>{page}</DashBoardLayout>;
};

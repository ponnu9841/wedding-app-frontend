// import Banner from "@/components/admin/banner";

import DashBoardLayout from "@/components/layout/admin/dashboard-layout";
import AdminSectionLayout from "@/components/shared/admin-section-layout";
import BannerData from "@/features/admin/banner/banner-data";
import BannerForm from "@/features/admin/banner/banner-form";
import { useAppDispatch } from "@/hooks/use-store";
import { fetchBanner, setSelectedBanner } from "@/store/features/banner-slice";
import { useEffect } from "react";

export default function DashboardPage() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		const controller = new AbortController();
		dispatch(fetchBanner(controller));
		return () => {
			controller.abort();
			dispatch(setSelectedBanner(null));
		};
	}, [dispatch]);

	return (
		<div>
			<h2 className="text-lg">Banner</h2>
			<AdminSectionLayout
				leftSection={<BannerForm />}
				rightSection={<BannerData />}
			/>
		</div>
	);
}

DashboardPage.getLayout = function getLayout(page: React.ReactElement) {
	return <DashBoardLayout>{page}</DashBoardLayout>;
};

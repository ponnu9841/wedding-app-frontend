import DashBoardLayout from "@/components/layout/admin/dashboard-layout";
import AboutForm from "@/features/admin/about/about-form";
import { useAppDispatch } from "@/hooks/use-store";
import { fetchAboutImages } from "@/store/features/about-slice";
import React, { useEffect } from "react";

export default function AboutPage() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        const controller = new AbortController();
        dispatch(fetchAboutImages({ controller }));
        return () => {
            controller.abort();
        };
    }, [dispatch]);

    return (
        <div>
            <h2 className="text-lg">About Images</h2>
            <AboutForm />
        </div>
    );
}

AboutPage.getLayout = function getLayout(page: React.ReactElement) {
    return <DashBoardLayout>{page}</DashBoardLayout>;
};

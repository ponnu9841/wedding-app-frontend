import DashBoardLayout from "@/components/layout/admin/dashboard-layout";
import AdminSectionLayout from "@/components/shared/admin-section-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FilmsForm from "@/features/admin/films/films-form";
import FilmsList from "@/features/admin/films/films-list";
import PageHeroForm from "@/features/admin/page-hero/page-hero-form";
import { useAppDispatch } from "@/hooks/use-store";
import { fetchFilms } from "@/store/features/films-slice";
import React, { useEffect } from "react";

const FilmsPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const controller = new AbortController();
        dispatch(fetchFilms({ controller }));
        return () => controller.abort();
    }, [])

	return (
		<Tabs defaultValue="films" className="w-full flex flex-col gap-4">
			<TabsList>
				<TabsTrigger value="films">Films</TabsTrigger>
				<TabsTrigger value="page-hero">Page Hero</TabsTrigger>
			</TabsList>
			<TabsContent value="films">
				<h2 className="text-lg mb-4">Films</h2>
				<AdminSectionLayout
					leftSection={<FilmsForm />}
					rightSection={<FilmsList />}
				/>
			</TabsContent>
			<TabsContent value="page-hero">
				<h2 className="text-lg mb-4">Films Page Hero</h2>
				<PageHeroForm page="films" />
			</TabsContent>
		</Tabs>
	);
};

FilmsPage.getLayout = function getLayout(page: React.ReactElement) {
	return <DashBoardLayout>{page}</DashBoardLayout>;
};

export default FilmsPage;

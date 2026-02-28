import DashBoardLayout from "@/components/layout/admin/dashboard-layout";
import AdminSectionLayout from "@/components/shared/admin-section-layout";
import FilmsForm from "@/features/admin/films/films-form";
import FilmsList from "@/features/admin/films/films-list";
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
		<div>
			<h2 className="text-lg">Films</h2>
			<AdminSectionLayout
				leftSection={<FilmsForm />}
				rightSection={<FilmsList />}
			/>
		</div>
	);
};

FilmsPage.getLayout = function getLayout(page: React.ReactElement) {
	return <DashBoardLayout>{page}</DashBoardLayout>;
};

export default FilmsPage;

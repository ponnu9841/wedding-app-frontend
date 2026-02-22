import { Card } from "@/components/ui/card";
import NextImage from "@/components/ui/image";
import { films } from "@/lib/const";
import Link from "next/link";
import React from "react";

const FilmsList = () => {
	return (
		<div className="max-w-349.25 mx-auto mt-50 p-1">
			<Card className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5 lg:p-18 rounded-lg lg:rounded-[1.875rem]">
                {films.map((item, index) => (
                    <Link href={`/films/${index}`} key={index}>
                        <div className="aspect-[294/368]">
                            <NextImage src={item.image} imageClassName="object-cover" />
                        </div>
                        <h2 className="text-lg font-playfair-display mt-3">{item.title}</h2>
                        <p className="text-xs font-medium leading-5 mt-2">{item.description}</p>
                        <div className="mt-2 text-foreground/60 text-xs font-medium">{item.type}</div>
                    </Link>
                ))}
            </Card>
		</div>
	);
};

export default FilmsList;

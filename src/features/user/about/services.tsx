import Typography from "@/components/shared/typography";
import React from "react";

const AboutServices = ({ data }: { data?: AboutServiceItem[] | null }) => {
	if (!data || data.length === 0) return null;

	return (
		<div className="container">
			<Typography variant="h2" className="mb-6">
				Our Services
			</Typography>
			<div className="space-y-6">
				{data.map((service) => (
					<ServiceCard
						key={service.id}
						title={service.title}
						description={service.description || ""}
					/>
				))}
			</div>
		</div>
	);
};

const ServiceCard = ({
	title,
	description,
}: {
	title: string;
	description: string | React.ReactNode;
}) => {
	return (
		<div className="flex flex-col gap-2">
			<h3 className="text-lg md:text-xl tracking-widest uppercase font-playfair-display">
				{title}
			</h3>
			<Typography variant="p" className="white-space-pre">{description}</Typography>
		</div>
	);
};

export default AboutServices;

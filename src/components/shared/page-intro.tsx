import React from "react";

type PageIntroProps = {
	title: string;
	description?: string | null;
	className?: string;
};

const PageIntro = ({ title, description, className }: PageIntroProps) => {
	return (
		<div className={`text-center ${className ?? ""}`}>
			<h1 className="text-3xl font-playfair-display text-foreground/80">{title}</h1>
			{description && (
				<p className="mt-6 whitespace-pre-line">{description}</p>
			)}
		</div>
	);
};

export default PageIntro;

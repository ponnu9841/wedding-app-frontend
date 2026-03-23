
const FilmsHero = ({ videoUrl }: { videoUrl?: string }) => {
	return (
		<div className="h-[60vh]">
			<iframe src={videoUrl} className="min-w-full h-full" />
		</div>
	);
};

export default FilmsHero;

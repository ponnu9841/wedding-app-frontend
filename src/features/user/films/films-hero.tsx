
const FilmsHero = ({ videoUrl }: { videoUrl?: string }) => {
	return (
		<div className="h-screen">
			<iframe src={videoUrl} className="min-w-full h-full" />
		</div>
	);
};

export default FilmsHero;

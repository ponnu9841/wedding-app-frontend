
const FilmsHero = ({ videoUrl }: { videoUrl?: string }) => {
	return (
		<div className="h-[60vh]">
			<video
				key={videoUrl}
				className="min-w-full h-full object-cover"
				autoPlay
				loop
				muted
				playsInline
			>
				<source
					src={videoUrl}
					type="video/mp4"
				/>
			</video>
		</div>
	);
};

export default FilmsHero;

import { WaveBottom, WaveTop } from "@/components/icons/waves";
import React from "react";

const VideoBanner = ({
	videoBanner,
}: {
	videoBanner: HomeVideoBanner | null;
}) => {
	return (
		<div className="relative h-[50vh] md:h-[81vh] -mt-20">
			<div className="absolute top-0 left-0 w-full z-2">
				<WaveTop className="text-card" />
			</div>
			<div className="absolute bottom-0 left-0 w-full z-2">
				<WaveBottom className="text-card" />
			</div>
			{/* <div className="absolute inset-0 w-full h-full z-1"> */}

			<video
				key={videoBanner?.bannerUrl}
				className="absolute inset-0 min-w-full h-full z-1 bg-black object-cover"
				autoPlay
				loop
				muted
				playsInline
			>
				<source
					src={videoBanner?.bannerUrl}
					type="video/mp4"
				/>
			</video>
		</div>
	);
};

export default VideoBanner;

import { WaveBottom, WaveTop } from "@/components/icons/waves";
import React from "react";

const VideoBanner = () => {
	return (
		<div className="relative h-screen -mt-20">
			<div className="absolute top-0 left-0 w-full z-2">
				<WaveTop className="text-background-alt" />
			</div>
			<div className="absolute bottom-0 left-0 w-full z-2">
				<WaveBottom className="text-background" />
			</div>
			{/* <div className="absolute inset-0 w-full h-full z-1"> */}
				<iframe
					src="https://www.youtube.com/embed/TOFye6sSv1I"
					className="absolute inset-0 w-full h-full z-1"
				/>
			{/* </div> */}
		</div>
	);
};

export default VideoBanner;

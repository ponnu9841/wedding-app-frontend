import { cn } from "@/lib/utils";

const WaveTop = ({ className }: IconProps) => {
	return (
		<svg
			id="wave"
			viewBox="0 0 1440 130"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			className={cn("rotate-180", className)}
		>
			<path
				fill="currentColor"
				d="M0,65L288,13L576,78L864,0L1152,104L1440,91L1728,13L2016,65L2304,91L2592,78L2880,39L3168,0L3456,65L3744,78L4032,39L4320,0L4608,39L4896,117L5184,39L5472,65L5760,39L6048,13L6336,26L6624,13L6912,0L6912,130L6624,130L6336,130L6048,130L5760,130L5472,130L5184,130L4896,130L4608,130L4320,130L4032,130L3744,130L3456,130L3168,130L2880,130L2592,130L2304,130L2016,130L1728,130L1440,130L1152,130L864,130L576,130L288,130L0,130Z"
			></path>
		</svg>
		// <svg
		// 	id="wave"
		// 	style="transform:rotate(180deg); transition: 0.3s"
		// 	viewBox="0 0 1440 130"
		// 	version="1.1"
		// 	xmlns="http://www.w3.org/2000/svg"
		// >
		// 	<defs>
		// 		<linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
		// 			<stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop>
		// 			<stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop>
		// 		</linearGradient>
		// 	</defs>
		// 	<path
		// 		style="transform:translate(0, 0px); opacity:1"
		// 		fill="url(#sw-gradient-0)"
		// 		d="M0,65L288,13L576,78L864,0L1152,104L1440,91L1728,13L2016,65L2304,91L2592,78L2880,39L3168,0L3456,65L3744,78L4032,39L4320,0L4608,39L4896,117L5184,39L5472,65L5760,39L6048,13L6336,26L6624,13L6912,0L6912,130L6624,130L6336,130L6048,130L5760,130L5472,130L5184,130L4896,130L4608,130L4320,130L4032,130L3744,130L3456,130L3168,130L2880,130L2592,130L2304,130L2016,130L1728,130L1440,130L1152,130L864,130L576,130L288,130L0,130Z"
		// 	></path>
		// </svg>
	);
};

const WaveBottom = ({ className }: IconProps) => {
	return (
		// <svg
		// 	xmlns="http://www.w3.org/2000/svg"
		// 	viewBox="0 0 1440 320"
		// 	className={className}
		// >
		// 	<path
		// 		fill="currentColor"
		// 		fill-opacity="1"
		// 		d="M0,64L480,224L960,32L1440,96L1440,320L960,320L480,320L0,320Z"
		// 	></path>
		// </svg>
		<svg
			id="wave"
			viewBox="0 0 1440 130"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				fill="currentColor"
				d="M0,13L480,0L960,78L1440,0L1920,0L2400,117L2880,104L3360,78L3840,65L4320,39L4800,26L5280,65L5760,0L6240,26L6720,26L7200,52L7680,39L8160,65L8640,104L9120,13L9600,78L10080,104L10560,39L11040,52L11520,117L11520,130L11040,130L10560,130L10080,130L9600,130L9120,130L8640,130L8160,130L7680,130L7200,130L6720,130L6240,130L5760,130L5280,130L4800,130L4320,130L3840,130L3360,130L2880,130L2400,130L1920,130L1440,130L960,130L480,130L0,130Z"
			></path>
		</svg>
	);
};

export { WaveTop, WaveBottom };

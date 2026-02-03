import { cn } from "@/lib/utils";

const SectionSeperatorTop = ({ className }: IconProps) => (
	<svg
		className={cn("section-divider-svg-stroke block", className)}
		preserveAspectRatio="none"
		viewBox="0 0 100 10"
	>
		<path
			path="currentColor"
			d="M0,0 L100,0 L100,10 L0,5 Z"
			// vectorEffect="non-scaling-stroke"
		></path>
	</svg>
);

const SectionSeperatorBottom = ({ className }: IconProps) => (
	<svg
		className={cn("section-divider-svg-stroke", className)}
		viewBox="0 0 100 1"
		preserveAspectRatio="none"
	>
		<path
			className="section-divider-stroke "
			d="M-100,0.5 L-100,1.5 M1.9235, 0.897 L1.9235, 0.897 l0,0 l-0.75,0.103 l-0.25,-0.103l0,0 l-0.75,0.103 l-0.25,-0.103l0,0 l-0.75,0.103 l-0.25,-0.103"
			vectorEffect="non-scaling-stroke"
			fill="currentColor"
		/>
	</svg>
);

export { SectionSeperatorTop, SectionSeperatorBottom };

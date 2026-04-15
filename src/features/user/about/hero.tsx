import PageHero from "@/components/shared/page-hero";

const DEFAULT_IMAGE =
	"https://images-pw.pixieset.com/elementfield/27271805/3dbc2b491435b4ab752a7ff28974ea52-8cd218f6.jpg";
const DEFAULT_TITLE = "About CELEBRATE WEDDING";
const DEFAULT_SUBTITLE = "Get to know a little better";

const AboutHero = ({ data }: { data?: AboutBanner | null }) => {
	return (
		<PageHero
			imageSrc={data?.image || DEFAULT_IMAGE}
			title={data?.title || DEFAULT_TITLE}
			subtitle={data?.description || DEFAULT_SUBTITLE}
		/>
	);
};

export default AboutHero;

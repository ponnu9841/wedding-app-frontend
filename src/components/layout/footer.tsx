import Link from "next/link";

const socialChannels = [
	{
		name: "Instagram",
		link: "https://www.instagram.com/celebrate_wedding_company",
	},
	// {
	// 	name: "Twitter",
	// 	link: "https://twitter.com/",
	// },
	{
		name: "Facebook",
		link: "https://www.facebook.com/CelebrateWeddingCompany",
	},
	// {
	// 	name: "LinkedIn",
	// 	link: "https://www.linkedin.com/",
	// },
	{
		name: "YouTube",
		link: "www.youtube.com/@celebrateweddingcompany2983",
	},
];

const Footer = () => {
	return (
		<footer className="pt-10">
			<div className="py-10 border-t container-fluid">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
					<div className="md:col-span-2">
						<h3 className="text-4xl md:text-5xl font-playfair-display">
							Discover, share, connect
						</h3>
						<div className="flex flex-wrap gap-6 mt-5">
							{socialChannels.map((channel, index) => (
								<Link
									key={index}
									href={channel.link}
									className="text-base"
									target="_blank"
								>
									{channel.name}
								</Link>
							))}
						</div>
					</div>
					<div className="grid col-span-2 gap-5 md:grid-cols-2 lg:gap-30">
						<div className="flex flex-col gap-10">
							<div className="text-base">
								Celebrate Wedding Company
								<br />
								CMC - 29 , Near Providence Junction , Cherthala P.O
								<br />
								Pin - 688524
								<br />
								Alappuzha District , Kerala , India
								{/* 8th Floor, Alapatt Heritage Building,
								<br />
								Mahatma Gandhi Rd, Kochi,
								<br />
								Kerala - 682035F */}
							</div>
							<div className="flex flex-col gap-1">
								<Link
									href="mailto:info@celebrateweddingcompany.com"
									className="duration-1000  hover:underline transition-underline ease"
								>
									info@celebrateweddingcompany.com
								</Link>
								<Link
									href="tel:+917012628933"
									className="duration-1000  hover:underline transition-underline ease"
								>
									+91 7012628933
								</Link>
							</div>
						</div>
						<div className="flex flex-col gap-8">
							<div className="text-base">
								162 Wissler Rd
								<br />
								Waterloo
								<br />
								ON N2K 3R1
								<br />
								Ontario, Canada
							</div>
							<div>
								All rights reserved
								<br />
								&copy; 2026 Celebrate Wedding Company
							</div>
							{/* <Link href="#">Terms and Conditions</Link> */}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

import Link from "next/link";

const socialChannels = [
	{
		name: "Instagram",
		link: "https://instagram",
	},
	{
		name: "Twitter",
		link: "https://twitter.com/",
	},
	{
		name: "Facebook",
		link: "https://www.facebook.com/",
	},
	{
		name: "LinkedIn",
		link: "https://www.linkedin.com/",
	},
	{
		name: "YouTube",
		link: "https://www.youtube.com/",
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
							<Link
								href="#"
								target="_blank"
								className="text-base transition-all duration-1000 hover:underline ease"
							>
								8th Floor, Alapatt Heritage Building,
								<br />
								Mahatma Gandhi Rd, Kochi,
								<br />
								Kerala - 682035F
							</Link>
							<div className="flex flex-col gap-1">
								<Link
									href="mailto:info@magicmotionmedia.in"
									className="duration-1000  hover:underline transition-underline ease"
								>
									info@magicmotionmedia.in
								</Link>
								<Link
									href="tel:+91 8075358113"
									className="duration-1000  hover:underline transition-underline ease"
								>
									+91 8075358113
								</Link>
							</div>
						</div>
						<div className="flex flex-col gap-8">
							<div>
								All rights reserved
								<br />
	                            &copy; 2026 Magic Motion Media
							</div>
							<Link href="#">Terms and Conditions</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

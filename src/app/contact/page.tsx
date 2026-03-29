export const dynamic = "force-dynamic";
// import ContactCta from "@/features/user/contact/contact-cta"
// import ContactForm from "@/features/user/contact/contact-form"
import { Button } from "@/components/ui/button";
import { generatePageMetadata } from "@/lib/utils";
// import ContactHero from "@/features/user/contact/hero";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export const generateMetadata = () => generatePageMetadata("contact");

const ContactPage = async () => {
	return (
		<div className="min-h-[calc(100dvh-9.5rem)] flex justify-center items-center">
			{/* <ContactHero /> */}
			{/* <ContactCta />
        <ContactForm /> */}
			<div className="w-full max-w-4xl mx-auto px-5 lg:px-0">
				<div className="mt-15">
					<h1 className="text-6xl text-center font-playfair-display font-semibold">
						Contact Us
					</h1>
				</div>
				<div className="flex flex-wrap justify-around items-center gap-8 my-15">
					<Link href="https://wa.me/1234567890" target="_blank">
						<Button className="w-50 h-15">
							UNITED KINGDOM
							<FaWhatsapp />
						</Button>
					</Link>
					<Link href="https://wa.me/1234567890" target="_blank">
						<Button className="w-50 h-15">
							INDIA
							<FaWhatsapp />
						</Button>
					</Link>
					<Link href="https://wa.me/1234567890" target="_blank">
						<Button className="w-50 h-15">
							MIDDLE EAST
							<FaWhatsapp />
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;

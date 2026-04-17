export const dynamic = "force-dynamic";
import PageIntro from "@/components/shared/page-intro";
import { Button } from "@/components/ui/button";
import ContactForm from "@/features/user/contact/contact-form";
import { generatePageMetadata } from "@/lib/utils";
import { getPageHeroServer } from "@/services/axios/get-data-server";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export const generateMetadata = () => generatePageMetadata("contact");

const DEFAULT_TITLE = "Contact Us";
const DEFAULT_DESCRIPTION = "";

const ContactPage = async () => {
	const hero = await getPageHeroServer("contact");
	return (
		<div className="flex justify-center items-center py-20">
			<div className="w-full max-w-4xl mx-auto px-5 lg:px-0">
				<div className="mt-15">
					<PageIntro
						title={hero?.title || DEFAULT_TITLE}
						description={hero?.description || DEFAULT_DESCRIPTION}
						className="[&>h1]:text-6xl [&>h1]:font-playfair-display [&>h1]:font-semibold"
					/>
				</div>

				<div className="flex flex-wrap justify-around items-center gap-8 my-15">
					<Link href="https://wa.me/+15195882563" target="_blank">
						<Button className="w-50 h-15">
							UNITED KINGDOM
							<FaWhatsapp />
						</Button>
					</Link>
					<Link href="https://wa.me/+917012628933" target="_blank">
						<Button className="w-50 h-15">
							INDIA
							<FaWhatsapp />
						</Button>
					</Link>
					<Link href="https://wa.me/+15195882563" target="_blank">
						<Button className="w-50 h-15">
							CANADA
							<FaWhatsapp />
						</Button>
					</Link>
				</div>

				<div className="border-t pt-15">
					<h2 className="text-2xl text-center font-playfair-display mb-10">
						Send Us a Message
					</h2>
					<ContactForm />
				</div>
			</div>
		</div>
	);
};

export default ContactPage;

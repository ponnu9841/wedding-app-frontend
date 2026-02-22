import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/const";
import { parseHtml } from "@/lib/utils";
import React from "react";

const Faq = () => {
	return (
		<div className="container">
			<h2 className="mb-5 tracking-wide font-playfair-display">Faq</h2>
			<Accordion type="single" collapsible className="w-full border-t">
				{faqs.map((item, index) => (
					<AccordionItem value={item.title} key={index} className="py-6">
						<AccordionTrigger className="text-lg lg:text-2xl tracking-wide font-playfair-display">
							{item.title}
						</AccordionTrigger>
						<AccordionContent>{parseHtml(item.faq)}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
};

export default Faq;

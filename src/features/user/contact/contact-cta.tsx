import Typography from "@/components/shared/typography";

const ContactCta = () => {
	return (
		<div className="container max-w-4xl mx-auto">
			<Typography
				variant="h2"
				className="mb-5"
			>{`Let's Start Your Journey`}</Typography>
			<Typography variant="p">
				Your wedding story deserves to be captured beautifully. If you have any
				questions or want to check our availability, simply fill in the form
				below with your details, and Team Pepper Green will get back to you
				soon.
				<br />
				<br />
				<b>Pro Tip:</b> Be sure to check your spam folder in case our email
				takes a detour! <br />
				<b>Email:</b> info@peppergreenwedding.com | peppergreenwedding@gmail.com
				<br />
				<b>Contact:</b> +91 96330 65508
				<br />
				<br />
				Available for Weddings in Kerala | Kochi | Bangalore | India | UK |
				Dubai
				<br />
				Let’s create unforgettable memories together!
			</Typography>
		</div>
	);
};

export default ContactCta;

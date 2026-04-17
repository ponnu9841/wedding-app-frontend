"use client";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { handleToast } from "@/lib/handle-toast";
import { ContactFormData, contactFormSchema } from "@/schema";
import axiosClient from "@/services/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const initialState: ContactFormData = {
	name: "",
	email: "",
	phone: "",
	message: "",
};

const ContactForm = () => {
	const form = useForm<ContactFormData>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: initialState,
	});
	const loading = form.formState.isSubmitting;

	const onSubmit = async (data: ContactFormData) => {
		try {
			const res = await axiosClient.post("/contact", data);
			if (res?.status === 200) {
				handleToast({
					message: "Message sent successfully! We'll get back to you soon.",
					variant: "success",
				});
				form.reset(initialState);
			}
		} catch {
			handleToast({
				message: "Failed to send message. Please try again.",
				variant: "error",
			});
		}
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-full max-w-xl mx-auto space-y-6"
			>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="Your name"
										className="h-12"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="phone"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Phone Number</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="Your phone number"
										className="h-12"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									{...field}
									type="email"
									placeholder="Your email address"
									className="h-12"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Message</FormLabel>
							<FormControl>
								<Textarea
									{...field}
									rows={5}
									placeholder="Tell us about your event, dates, and any special requirements..."
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="flex justify-center pt-2">
					<Button
						type="submit"
						disabled={loading}
						className="min-w-40 h-12"
					>
						{loading ? "Sending..." : "Send Message"}
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default ContactForm;

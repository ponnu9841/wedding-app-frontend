import axiosClient from "@/services/axios";
import { useEffect, useState } from "react";

type ContactSubmission = {
	id: string;
	name: string;
	email: string;
	phone: string;
	message: string;
	createdAt: string;
};

const ContactSubmissions = () => {
	const [data, setData] = useState<ContactSubmission[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axiosClient
			.get("/contact")
			.then((res) => setData(res.data?.data ?? []))
			.finally(() => setLoading(false));
	}, []);

	if (loading)
		return <div className="text-sm text-muted-foreground">Loading...</div>;

	if (!data.length)
		return (
			<div className="text-sm text-muted-foreground">
				No submissions yet
			</div>
		);

	return (
		<div className="space-y-4">
			{data.map((item) => (
				<div
					key={item.id}
					className="border rounded p-4 space-y-2"
				>
					<div className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
						<div>
							<span className="font-bold">Name: </span>
							{item.name}
						</div>
						<div>
							<span className="font-bold">Email: </span>
							<a
								href={`mailto:${item.email}`}
								className="text-blue-600 underline"
							>
								{item.email}
							</a>
						</div>
						<div>
							<span className="font-bold">Phone: </span>
							{item.phone}
						</div>
						<div className="text-muted-foreground">
							{new Date(item.createdAt).toLocaleDateString("en-US", {
								year: "numeric",
								month: "short",
								day: "numeric",
								hour: "2-digit",
								minute: "2-digit",
							})}
						</div>
					</div>
					<div className="text-sm max-h-[120px] overflow-auto whitespace-pre-line">
						{item.message}
					</div>
				</div>
			))}
		</div>
	);
};

export default ContactSubmissions;

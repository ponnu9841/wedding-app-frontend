import { z } from "zod";

const requireImageIfNoId = {
	message: "Image is required",
	path: ["image"],
	condition: (data: { id?: string; image?: ExtendedFile[] }) =>
		!!data.id?.trim() || (data.image?.length ?? 0) >= 1,
};

export const fileSchema = (errorMessage = "Invalid Image") =>
	z.array(
		z.custom<ExtendedFile>(
			(file) =>
				file instanceof File &&
				"url" in file &&
				typeof (file as ExtendedFile).url === "string",
			{ message: errorMessage },
		),
	);

// export const fileSchema = (
//    minFiles = 1,
//    maxFiles = 10,
//    errorMessage = "Invalid file"
// ) =>
//    z
//       .array(
//          z.custom<ExtendedFile>(
//             (file) =>
//                file instanceof File &&
//                "url" in file &&
//                typeof (file as ExtendedFile).url === "string",
//             { message: errorMessage }
//          )
//       )
//       .min(minFiles, "Image is required")
//       .max(maxFiles, `You can upload up to ${maxFiles} files`);

export const loginSchema = z.object({
	email: z.string().email("Invalid email address"),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

export const bannerSchema = z
	.object({
		id: z.string().optional(),
		image: fileSchema().optional(),
		imageAlt: z.string().optional(),
		title: z.string().optional(),
		description: z.string().optional(),
	})
	.refine(requireImageIfNoId.condition, {
		message: requireImageIfNoId.message,
		path: requireImageIfNoId.path,
	});

export const instagramFollowSchema = z
	.object({
		id: z.string().optional(),
		image: fileSchema().optional(),
		imageAlt: z.string().optional(),
		url: z.url().min(1, "URL is required"),
	})
	.refine(requireImageIfNoId.condition, {
		message: requireImageIfNoId.message,
		path: requireImageIfNoId.path,
	});

export const aboutSchema = z
	.object({
		id: z.string().optional(),

		imageOne: fileSchema().optional(),
		imageOneAlt: z.string().optional(),

		imageTwo: fileSchema().optional(),
		imageTwoAlt: z.string().optional(),

		imageThree: fileSchema().optional(),
		imageThreeAlt: z.string().optional(),
	})
	.refine(
		(data) => {
			// ✅ If updating → allow missing images
			if (data.id?.trim()) return true;

			// ❌ If creating → all three images required
			return (
				(data.imageOne?.length ?? 0) > 0 &&
				(data.imageTwo?.length ?? 0) > 0 &&
				(data.imageThree?.length ?? 0) > 0
			);
		},
		{
			message: "All three images are required",
			path: ["imageOne"], // attach error to first field (or customize)
		},
	);

export const aboutBriefSchema = z.object({
	id: z.string().optional(),
	videoUrl: z.url(),
});

export type AboutBriefFormData = z.infer<typeof aboutBriefSchema>;

export type AboutFormData = z.infer<typeof aboutSchema>;

export type InstagramFollowFormData = z.infer<typeof instagramFollowSchema>;

export type BannerFormData = z.infer<typeof bannerSchema>;

export type LoginFormData = z.infer<typeof loginSchema>;

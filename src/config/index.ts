export const config = {
  baseUrl: "https://next-level-portfolio-server.vercel.app/api/v1",
  cloudinaryCloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  cloudinaryApiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  cloudinaryApiSecret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
  cloudinaryUploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
  email_service_id: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
  email_template_id: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
  email_public_id: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_ID as string,
};

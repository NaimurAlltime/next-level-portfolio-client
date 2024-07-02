"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import dynamic from "next/dynamic";
import uploadFileToCloudinary from "@/utils/uploadFileToCloudinary";
import REForm from "@/components/Forms/REForm";
import REInput from "@/components/Forms/REInput";
import REFileUploader from "@/components/Forms/REFileUploader";
import {
  useCreateBlogMutation,
  useGetAllBlogQuery,
} from "@/redux/api/blog.api";
import { IBlog } from "@/types";
import Image from "next/image";

const RichText = dynamic(() => import("@/components/UI/RechTextEditor"), {
  ssr: false,
});

const schema = z.object({
  title: z
    .string({ required_error: "Blog title is required" })
    .min(1, { message: "Blog title is required" }),
});

const BlogsPage = () => {
  const [value, setValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [createBlog] = useCreateBlogMutation();
  const { data, isLoading: isBlogLoading } = useGetAllBlogQuery(undefined);

  const handleFileUpload = (file: File) => {
    setFile(file);
  };

  const handleSubmit = async (data: any) => {
    setIsLoading(true);

    if (!file) {
      toast.error("Please upload a cover image for the blog post");
      setIsLoading(false);
      return;
    }
    if (!value) {
      toast.error("Please enter the blog content");
      setIsLoading(false);
      return;
    }

    try {
      const imageLink = await uploadFileToCloudinary(file);

      if (!imageLink) {
        toast.error("Failed to upload image");
        setIsLoading(false);
        return;
      }

      const res = await createBlog({
        title: data.title,
        cover: imageLink,
        text: value,
      }).unwrap();

      if (res.success) {
        toast.success("Blog created successfully");
        setFile(null);
        setValue("");
        return true;
      } else {
        toast.error("Failed to create blog");
      }
    } catch (error) {
      toast.error("Failed to create blog");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Stack>
      <Container maxWidth="xl">
        <Stack>
          <REForm
            onSubmit={handleSubmit}
            defaultValues={{ title: "" }}
            resolver={zodResolver(schema)}
          >
            <Stack>
              <Stack my={1}>
                <REInput label="Blog Title" name="title" />
              </Stack>
              <Stack mb={8}>
                <RichText value={value} setValue={setValue} />
              </Stack>
              <Stack gap={2}>
                <REFileUploader
                  label="Upload a cover image for the blog post"
                  name="file"
                  onFileUpload={handleFileUpload}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 1.1,
                  }}
                />
                <Button
                  type="submit"
                  sx={{ p: 1.1 }}
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  {isLoading ? (
                    <CircularProgress
                      sx={{
                        width: "25px !important",
                        height: "25px !important",
                        color: "white",
                      }}
                    />
                  ) : (
                    "Create Blog"
                  )}
                </Button>
              </Stack>
            </Stack>
          </REForm>
        </Stack>
      </Container>
      <Stack my={5} alignItems="center">
        {isBlogLoading ? (
          <h1>Loading...</h1>
        ) : (
          <Container maxWidth="xl">
            <Grid container spacing={3} mt={6}>
              {data?.data?.map((blog: IBlog) => (
                <Grid item xs={12} md={6} key={blog._id}>
                  <Stack
                    boxShadow={24}
                    borderRadius={3}
                    overflow="hidden"
                    height="100%"
                  >
                    <Image
                      src={blog.cover}
                      alt={blog.title}
                      width={500}
                      height={250}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "1rem 1rem 0 0",
                        backgroundPosition: "center",
                      }}
                    />
                    <Box p={2}>
                      <Typography variant="h6" gutterBottom>
                        {blog.title}
                      </Typography>
                      {/* <Typography
                        variant="body2"
                        color="textSecondary"
                        component="div"
                        dangerouslySetInnerHTML={{
                          __html: blog.text.slice(0, 95),
                        }}
                      /> */}
                    </Box>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Container>
        )}
      </Stack>
    </Stack>
  );
};

export default BlogsPage;

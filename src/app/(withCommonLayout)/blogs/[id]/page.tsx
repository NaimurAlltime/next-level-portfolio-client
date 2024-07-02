"use client";

import Loader from "@/components/UI/Loader";
import { useGetSingleBlogQuery } from "@/redux/api/blog.api";
import { Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useParams } from "next/navigation";
import CommonLayout from "../../layout";

const BlogDetailsPage = () => {
  const params = useParams();
  const { data, isLoading } = useGetSingleBlogQuery(params.id);

  if (isLoading) return <Loader />;

  function createMarkup() {
    return { __html: data?.data?.text };
  }

  return (
    <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#05174e] to-[#030a1c] py-20 px-4 md:px-12 lg:px-32">
      <Container maxWidth="lg">
        <Stack my={5}>
          <Image
            src={data?.data?.cover}
            alt={data?.data?.title}
            width={500}
            height={300}
            style={{ width: "100%" }}
          />
          <Typography mt={2} color={"white"} variant="h4">
            Q. {data?.data?.title}
          </Typography>
          <div
            className="text-gray-200 w-full md:w-5/6 mt-4"
            dangerouslySetInnerHTML={createMarkup()}
          />
        </Stack>
      </Container>
    </div>
  );
};

export default BlogDetailsPage;

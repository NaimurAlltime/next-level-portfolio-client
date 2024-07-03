"use client";
import { Divider, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import CircleIcon from "@mui/icons-material/Circle";
import { useGetAllExperienceQuery } from "@/redux/api/experience.api";
import { IExperience } from "@/types";
import dateFormatter from "@/utils/dateFormatter";

const Experience = () => {
  const { data } = useGetAllExperienceQuery(undefined);

  return (
    <div
      className="timeline py-14 px-3 md:px-60 lg:px-80 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#030a1c] to-[#05174e]"
      style={{ width: "100%" }}
    >
      <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-white">
          Experience
        </h2>
      </div>

      <Grid container spacing={2}>
        {data?.data?.map((exp: IExperience) => (
          <Grid item key={exp._id} xs={12} md={12}>
            <Stack
              p={2}
              boxShadow={12}
              gap={0.5}
              borderRadius={1}
              border={2}
              borderColor={"white"}
            >
              <Typography
                variant="h5"
                lineHeight={1}
                fontWeight="700"
                color={"white"}
              >
                {exp.title} at{" "}
                <Link href={exp.link} target="_blank">
                  {exp.organization}
                </Link>
              </Typography>
              <Typography
                variant="h6"
                lineHeight={1}
                fontWeight="500"
                color={"white"}
                marginBlockStart={2}
              >
                Responsibilities:
              </Typography>
              <Divider />
              {exp.responsibilities.map((res) => (
                <Typography
                  color={"lightgray"}
                  variant="body1"
                  pl={1}
                  key={res}
                  lineHeight={1.25}
                >
                  <CircleIcon sx={{ fontSize: "10px" }} /> {res}
                </Typography>
              ))}
              <Typography
                variant="body1"
                mt={1}
                lineHeight={1}
                fontSize="700"
                color={"white"}
              >
                {dateFormatter(exp.startDate, exp.endDate)}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Experience;

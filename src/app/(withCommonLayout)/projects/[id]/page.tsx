"use client";

import Technology from "@/app/(withDashboardLayout)/dashboard/projects/components/Technology";
import Loader from "@/components/UI/Loader";
import { useGetSingleProjectQuery } from "@/redux/api/project.api";
import { IProject } from "@/types";
import CircleIcon from "@mui/icons-material/Circle";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const ProjectDetailsPage = () => {
  const params = useParams();
  const { data, isLoading } = useGetSingleProjectQuery(params.id);

  if (isLoading) return <Loader />;

  const project: IProject = data?.data;

  return (
    <div className="px-4 md:px-12 lg:px-28 py-16 sm:px-6 lg:py-24 mx-auto bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#030a1c] to-[#05174e]">
      <Stack key={project._id} boxShadow={24} p={4}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Image
              src={project.cover}
              alt={project.name}
              width={1000}
              height={1000}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "1rem",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Stack justifyContent="space-between" height="100%" color={"white"}>
              <Box>
                <Typography variant="h4" lineHeight={1}>
                  {project.name}
                </Typography>
                <Typography variant="h6">{project.description}</Typography>
              </Box>
              <Box>
                <Typography variant="h6" fontWeight="700" mt={1}>
                  Features:{" "}
                </Typography>
                {project.features.map((feature) => (
                  <Typography key={feature} pl={1} color={"lightgray"}>
                    <CircleIcon sx={{ fontSize: "10px", mx: "2px" }} />
                    {feature}
                  </Typography>
                ))}
              </Box>
              <Box>
                <Typography variant="h6" fontWeight="700" mt={1}>
                  Technology:{" "}
                </Typography>
                <Box display="flex" flexWrap="wrap">
                  {project.technologies.map((tech) => (
                    <Technology key={tech._id} technology={tech} theme="dark" />
                  ))}
                </Box>
              </Box>
              <Stack my={2} spacing={1} direction="row">
                <Button
                  LinkComponent={Link}
                  href={project.liveSiteLink}
                  startIcon={<LinkIcon />}
                  variant="outlined"
                  color="primary"
                >
                  Live Site
                </Button>
                {Object.entries(project.repositoryLink).map(([key, value]) => (
                  <>
                    {value && (
                      <Button
                        LinkComponent={Link}
                        href={value}
                        startIcon={<GitHubIcon />}
                        variant="outlined"
                        color="primary"
                      >
                        {key.split("_").join(" ").toUpperCase()}
                      </Button>
                    )}
                  </>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
};

export default ProjectDetailsPage;

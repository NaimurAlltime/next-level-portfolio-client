"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

// mui
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Stack,
} from "@mui/material";

import REForm from "@/components/Forms/REForm";
import REInput from "@/components/Forms/REInput";
import REFileUploader from "@/components/Forms/REFileUploader";
import uploadFileToCloudinary from "@/utils/uploadFileToCloudinary";
import { ISkill } from "@/types";
import Skill from "./components/Skill";
import { useAddSkillMutation, useGetSkillQuery } from "@/redux/api/skill";
import Skills from "@/components/UI/HomePage/Skills/Skills";

const schema = z.object({
  name: z
    .string({ required_error: "Technology Name is required!" })
    .min(1, { message: "Must Provide Technology Name" }),
  percentage: z
    .string({ required_error: "Percentage is required!" })
    .min(0, { message: "Must be a valid percentage" })
    .max(100, { message: "Must be a valid percentage" }),
});

const TechnologiesPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const { data, isLoading: isTechLoading } = useGetSkillQuery(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [addSkill] = useAddSkillMutation();

  const handleSubmit = async (formData: any) => {
    setIsLoading(true);

    if (!file) {
      toast.error("Please upload a file");
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

      const res = await addSkill({
        name: formData.name,
        percentage: Number(formData.percentage),
        icon: imageLink,
      }).unwrap();

      if (res.success) {
        toast.success("Skill added successfully");
        setFile(null);
        return true;
      } else {
        toast.error("Failed to add skill");
      }
    } catch (error) {
      toast.error("Failed to add skill");
    } finally {
      setIsLoading(false);
      setFile(null);
    }
  };

  const handleFileUpload = (file: File) => {
    setFile(file);
  };

  return (
    <Stack>
      <Container maxWidth="lg">
        <Stack boxShadow={24} p={2} borderRadius={2}>
          <REForm
            onSubmit={handleSubmit}
            resolver={zodResolver(schema)}
            defaultValues={{ name: "", percentage: 0 }}
          >
            <Grid container spacing={1}>
              <Grid item xs={12} md={4}>
                <REInput label="Skill Name" name="name" />
              </Grid>

              <Grid item xs={12} md={3}>
                <REInput label="Percentage" name="percentage" type="number" />
              </Grid>

              <Grid item xs={12} md={2}>
                <REFileUploader
                  label="Upload Icon"
                  name="file"
                  onFileUpload={handleFileUpload}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 1.1,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
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
                      }}
                    />
                  ) : (
                    "Add Skill"
                  )}
                </Button>
              </Grid>
            </Grid>
          </REForm>
        </Stack>
      </Container>
      <Stack my={6}>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {isTechLoading ? (
            <CircularProgress
              color="secondary"
              sx={{
                width: "100px !important",
                height: "100px !important",
              }}
            />
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
                {data?.data?.map((skill: ISkill) => (
                  <Skill key={skill._id} skill={skill} />
                ))}
              </div>
            </>
          )}
        </Box>
      </Stack>
    </Stack>
  );
};

export default TechnologiesPage;

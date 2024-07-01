"use client";

import defaultProfile from "@/assets/image/user_placeholder.png";
import { getUserInfo } from "@/services/auth.services";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

// Define the user data type
interface UserData {
  email: string;
  profilePhoto?: string;
}

const ProfilePage = () => {
  const [data, setData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const userInfo = await getUserInfo();
      setData(userInfo);
    };
    fetchData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <Stack mx={{ xs: 1, md: 8 }}>
      <Stack py={5}>
        <Grid container spacing={3} justifyContent="center" height="100%">
          <Grid item xs={12} lg={4} justifyContent="center">
            <Box maxWidth={400} maxHeight={400}>
              {data?.profilePhoto ? (
                <Image
                  src={data?.profilePhoto}
                  alt="Donor Image"
                  width={400}
                  height={400}
                  style={{
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <Image
                  src={defaultProfile}
                  alt="Donor Image"
                  width={200}
                  height={200}
                  style={{
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
              )}
            </Box>
            <Box>
              <h1 className="text-xl mt-3">
                <span className="text-2xl font-semibold ">Email:</span>
                {data.email}
              </h1>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default ProfilePage;

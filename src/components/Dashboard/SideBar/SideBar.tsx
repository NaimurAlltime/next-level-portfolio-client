import { Box, List, Stack, Typography } from "@mui/material";
import Link from "next/link";
import SidebarItem from "./SidebarItem";
import { drawerItems } from "@/utils/drawerItems";

const SideBar = () => {
  return (
    <Box>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        component={Link}
        href="/"
      >
        <h2 className="text-orange-500 font-semibold text-2xl">
          Naimur Rahman
        </h2>
      </Stack>
      <List>
        {drawerItems().map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBar;

"use client";

import assets from "@/assets";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery, useTheme } from "@mui/material";
import { getUserInfo, isLoggedIn, removeUser } from "@/services/auth.services";
import { logout } from "@/services/actions/logout";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [isTop, setIsTop] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 50) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  };

  useEffect(() => window.addEventListener("scroll", controlNavbar), []);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      className={`w-full fixed top-0 z-50   ${
        isTop
          ? " bg-opacity-10 "
          : "bg-gradient-to-tr from-[#0235a3] via-[#030a1c] to-[#05174e] shadow-md"
      }`}
    >
      <div className="px-3 md:px-12 lg:px-32">
        <Grid sx={{}} container py={2} alignItems="center">
          <Grid item xs={6} md={4} lg={3}>
            <div className="flex items-center">
              <Link href="/" className="flex justify-center items-center">
                <Image
                  src="/imgs/logo.png"
                  alt=""
                  width={30}
                  height={25}
                  className="text-white w-[45px] h-[50px]"
                />
                <h1 className="text-xl text-blue-500 font-sans lg:text-2xl ms-2 font-semibold">
                  Naimur Rahman
                </h1>
              </Link>
            </div>
          </Grid>

          {isMobile ? (
            <Grid item xs={6} md={8} lg={9} sx={{ textAlign: "right" }}>
              <IconButton
                edge="start"
                color="primary"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem component={Link} href="/" onClick={handleMenuClose}>
                  Home
                </MenuItem>

                <MenuItem
                  component={Link}
                  href="/about-us"
                  onClick={handleMenuClose}
                >
                  About Us
                </MenuItem>

                <MenuItem
                  component={Link}
                  href="/skills"
                  onClick={handleMenuClose}
                >
                  Skills
                </MenuItem>

                <MenuItem
                  component={Link}
                  href="/projects"
                  onClick={handleMenuClose}
                >
                  Projects
                </MenuItem>

                <MenuItem
                  component={Link}
                  href="/contacts"
                  onClick={handleMenuClose}
                >
                  Contacts
                </MenuItem>

                <MenuItem
                  component={Link}
                  href="/blogs"
                  onClick={handleMenuClose}
                >
                  Blogs
                </MenuItem>

                <MenuItem onClick={handleMenuClose}>
                  <Button component={Link} href="/login">
                    Hire Me
                  </Button>
                </MenuItem>
              </Menu>
            </Grid>
          ) : (
            <Grid
              item
              container
              xs={6}
              md={8}
              lg={9}
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs>
                <Stack
                  direction="row"
                  spacing={4}
                  alignItems="center"
                  justifyContent="center"
                  color={"white"}
                >
                  <Typography
                    component={Link}
                    href="/"
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    Home
                  </Typography>
                  <Typography
                    component={Link}
                    href="/about-us"
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    About Us
                  </Typography>
                  <Typography
                    component={Link}
                    href="/skills"
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    Skills
                  </Typography>
                  <Typography
                    component={Link}
                    href="/projects"
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    Projects
                  </Typography>

                  <Typography
                    component={Link}
                    href="/contacts"
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    Contacts
                  </Typography>
                  <Typography
                    component={Link}
                    href="/blogs"
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    Blogs
                  </Typography>
                </Stack>
              </Grid>

              <Grid item>
                <Button component={Link} href="/login">
                  Hire Me
                </Button>
              </Grid>
            </Grid>
          )}
        </Grid>
      </div>
    </div>
  );
};

export default Navbar;

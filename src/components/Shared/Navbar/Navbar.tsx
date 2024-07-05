"use client";

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
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const pathname = usePathname();

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

  const isActiveLink = (path: string) => pathname === path;

  return (
    <div
      className={`w-full fixed top-0 z-50 ${
        isTop
          ? " bg-opacity-10 "
          : "bg-gradient-to-tr from-[#0235a3] via-[#030a1c] to-[#05174e] shadow-md"
      }`}
    >
      <div className="px-3 md:px-12 lg:px-32">
        <Grid container py={2} alignItems="center">
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
                <h1 className="text-xl text-white font-sans lg:text-3xl ms-2 font-semibold">
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
                <MenuItem
                  component={Link}
                  href="/"
                  onClick={handleMenuClose}
                  selected={isActiveLink("/")}
                >
                  Home
                </MenuItem>
                <MenuItem
                  component={Link}
                  href="/about-us"
                  onClick={handleMenuClose}
                  selected={isActiveLink("/about-us")}
                >
                  About Us
                </MenuItem>
                <MenuItem
                  component={Link}
                  href="/skills"
                  onClick={handleMenuClose}
                  selected={isActiveLink("/skills")}
                >
                  Skills
                </MenuItem>
                <MenuItem
                  component={Link}
                  href="/projects"
                  onClick={handleMenuClose}
                  selected={isActiveLink("/projects")}
                >
                  Projects
                </MenuItem>
                <MenuItem
                  component={Link}
                  href="/contacts"
                  onClick={handleMenuClose}
                  selected={isActiveLink("/contacts")}
                >
                  Contacts
                </MenuItem>
                <MenuItem
                  component={Link}
                  href="/blogs"
                  onClick={handleMenuClose}
                  selected={isActiveLink("/blogs")}
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
                    sx={{
                      textDecoration: "none",
                      color: isActiveLink("/") ? "inherit" : "inherit",
                      fontWeight: isActiveLink("/") ? "normal" : "normal",
                    }}
                  >
                    Home
                  </Typography>
                  <Typography
                    component={Link}
                    href="/about-us"
                    sx={{
                      textDecoration: "none",
                      color: isActiveLink("/about-us") ? "white" : "inherit",
                      fontWeight: isActiveLink("/about-us") ? "bold" : "normal",
                    }}
                  >
                    About Us
                  </Typography>
                  <Typography
                    component={Link}
                    href="/skills"
                    sx={{
                      textDecoration: "none",
                      color: isActiveLink("/skills") ? "white" : "inherit",
                      fontWeight: isActiveLink("/skills") ? "bold" : "normal",
                    }}
                  >
                    Skills
                  </Typography>
                  <Typography
                    component={Link}
                    href="/projects"
                    sx={{
                      textDecoration: "none",
                      color: isActiveLink("/projects") ? "white" : "inherit",
                      fontWeight: isActiveLink("/projects") ? "bold" : "normal",
                    }}
                  >
                    Projects
                  </Typography>
                  <Typography
                    component={Link}
                    href="/contacts"
                    sx={{
                      textDecoration: "none",
                      color: isActiveLink("/contacts") ? "white" : "inherit",
                      fontWeight: isActiveLink("/contacts") ? "bold" : "normal",
                    }}
                  >
                    Contacts
                  </Typography>
                  <Typography
                    component={Link}
                    href="/blogs"
                    sx={{
                      textDecoration: "none",
                      color: isActiveLink("/blogs") ? "white" : "inherit",
                      fontWeight: isActiveLink("/blogs") ? "bold" : "normal",
                    }}
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

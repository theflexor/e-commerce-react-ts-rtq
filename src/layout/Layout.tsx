import Header from "@components/Header/Header";
import { Footer, SideBar } from "@components/index";
import { Container, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import React from "react";
import styled from "styled-components";

export const Layout: React.FC = () => {
  const matches = useMediaQuery("(min-width:768px)");
  const query = useLocation();
  return (
    <Box>
      <Header />
      <Container maxWidth="xl" sx={{ display: "flex" }}>
        {matches && query.pathname == "/" && <SideBar />}
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};

import Iconify from "@/components/iconify";
import { Box,  Stack, Typography } from "@mui/material";
import React from "react";

const SectionOne = () => {
  return (
    <>
      <Stack direction="column" alignItems="center">
        <Box component="img" src="/assets/logo.png" alt="logo" width={60} />
        <Box
          component="img"
          src="/assets/images/logo/aheadlogo.png"
          width={90}
          alt="logo"
        />
        <Stack direction="row" spacing={6} py={2}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Iconify icon="mdi:location" color="#000" />
            <Typography color="#000">AugustraBe 26, 10117 Berlin</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <Iconify icon="material-symbols:mail" color="#000" />
            <Typography color="#000">hi@xyz.com</Typography>
          </Stack>
        </Stack>
          <Box component="img" src="/assets/appstore.png" width={180} />
      </Stack>
    </>
  );
};

export default SectionOne;

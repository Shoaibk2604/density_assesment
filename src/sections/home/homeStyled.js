import { Box, Button, styled, Typography } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#f6f6f7",
  padding: "5em",
  borderRadius: "3em",
  position:"relative",
  overflow:"hidden"
}));
export const StyledIconBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
}));
export const StyledListBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#f2f2f2",
}));
export const StyledLocBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#f2f2f2",
  padding: "4em",
}));
export const StyledImageBox = styled(Box)(({ theme }) => ({
  width: "6em",
}));
export const StyledBgTestBox = styled("div")(({ theme }) => ({
  margin: "1em auto",
  width: "100%",
  height: "100%",
  padding: "1em 0 2em 0",
  backgroundImage: `url(/testbg.avif)`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
}));
export const StyledTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  margin: "1em 0",
  color: "#fff",
}));
export const StyledBoxTest = styled(Box)(({ theme }) => ({
  backgroundColor: "#ff7533",
  padding: "3em 0",
}));
export const StyledBoxhelpful = styled(Box)(({ theme }) => ({
  backgroundColor: "#ececec",
  padding: "4em 0",
}));
export const StyledBoxDiv = styled(Box)(({ theme }) => ({
  border: "1px solid lightgrey",
  position: "absolute",
  top: "50%",
  left: "20%",
  width: "60%",
}));
export const StyledBoxBall = styled(Box)(({ theme }) => ({
  position: "absolute",
  borderRadius: "50%",
  padding: "15px",
}));
export const StyledBlackBtn = styled(Button)(({ theme }) => ({
  backgroundColor: "#000",
  px:2,
  color: "#fff",
  borderRadius: "3em",
  ":hover": {
    backgroundColor: "#000000bf",
  },
}));

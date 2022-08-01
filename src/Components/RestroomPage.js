import { Typography, CardMedia, Grid } from "@mui/material";
import { Box } from "@mui/system";
import AmazonLogo from "/Users/abrahams/Commissions/amazon-comission-sa/src/Images/amazon-logo-transparent.png";
import SideDrawer from "./SideDrawer";
import { CssBaseline } from "@mui/material";
import Lamp from "/Users/abrahams/Commissions/amazon-comission-sa/src/Images/lamp.jpeg";

function RestroomPage() {
  return (
    <>
      <CssBaseline />
      <Box id="drawer">
        <SideDrawer />
      </Box>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        id="restroom"
        sx={{ width: "100%", height: "100vh" }}
      >
        <Box id="closed-page" sx={{ paddingTop: 5 }}>
          <Grid
            container
            direction="row"
            justifyContent="right"
            alignItems="center"
          >
            <Box display="flex" justifyContent="center" flexDirection="row">
              <CardMedia
                height="100"
                sx={{ width: "50%", height: "50%" }}
                component="img"
                image={AmazonLogo}
                alt="Hey where did our logo go?"
                title="Amazon Logo"
              />
            </Box>
          </Grid>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          flex-direction="column"
          sx={{ paddingTop: 5 }}
        >
          <Box>
            <Typography textAlign="center">TO OUR VALUED CUSTOMERS:</Typography>

            <Typography sx={{ paddingTop: 5 }} textAlign="center">
              The Amazon Hub Associate{" "}
              <Typography
                sx={{ display: "inline", textDecoration: "underline" }}
              >
                has stepped away for a moment.
              </Typography>{" "}
            </Typography>
            <Typography sx={{ paddingTop: 5 }} textAlign="center">
              If you have a return, see{" "}
              <Typography
                sx={{ display: "inline", textDecoration: "underline" }}
              >
                Guest Services
              </Typography>{" "}
              for assistance.
            </Typography>
            <Typography
              textAlign="center"
              sx={{ textDecoration: "underline", paddingTop: 5 }}
            >
              Thank You!
            </Typography>
          </Box>
        </Box>
      </Grid>
    </>
  );
}

export default RestroomPage;

import { Typography, CardMedia, Grid } from "@mui/material";
import { Box } from "@mui/system";
import AmazonLogo from "/Users/abrahams/Commissions/amazon-comission-sa/src/Images/amazon-logo-transparent.png";
import SideDrawer from "./SideDrawer";
import { CssBaseline } from "@mui/material";
import Plant from "/Users/abrahams/Commissions/amazon-comission-sa/src/Images/plant.jpeg";
function ClosedPage() {
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
        id="closed"
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
          sx={{ paddingTop: 2 }}
        >
          <Box>
            <Typography textAlign="center">TO OUR VALUED CUSTOMERS:</Typography>
            <Typography sx={{ paddingTop: 1 }} textAlign="center">
              The Amazon Hub Counter is now:{" "}
              {/* <Typography
                sx={{ display: "inline", textDecoration: "underline" }}
              >
                CLOSED.
              </Typography>{" "} */}
            </Typography>
            <Typography
              fontSize={30}
              sx={{ textDecoration: "underline", color: "red", paddingTop: 2 }}
              textAlign="center"
            >
              CLOSED
            </Typography>

            <Typography sx={{ paddingTop: 1 }} textAlign="center">
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
              sx={{ textDecoration: "underline", paddingTop: 1 }}
            >
              Thank You!
            </Typography>
            <Typography textAlign="center">HOURS:</Typography>
            <Typography sx={{ paddingTop: 1 }} textAlign="center">
              9:00 A.M - 7:00 P.M
            </Typography>
          </Box>
        </Box>
      </Grid>
    </>
  );
}

export default ClosedPage;

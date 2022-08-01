import {
  Box,
  Grid,
  Typography,
  CardMedia,
  Button,
  CssBaseline,
} from "@mui/material";
import AmazonLogo from "/Users/abrahams/Commissions/amazon-comission-sa/src/Images/amazon-logo-transparent.png";
import party from "party-js";
import { useState } from "react";
import { useSnackbar } from "notistack";
import SideDrawer from "./SideDrawer";
function MainPage({ name }) {
  const [counter, setCounter] = useState(-1);
  const { enqueueSnackbar } = useSnackbar();
  const thankYouMessages = [
    "You're awesome!",
    "Have a blessed day!",
    "WOOHOOO!",
    "Success WOOO!",
    "Groovy!",
  ];
  function counterCelebration(variant) {
    let index = Math.floor(Math.random() * thankYouMessages.length);
    enqueueSnackbar(thankYouMessages[index], { variant });
    document
      .getElementById("main-page")
      .addEventListener("click", function (e) {
        party.confetti(this, {
          count: party.variation.range(60, 80),
          size: party.variation.range(0.6, 1.4),
          // speed: party.variation.range(50, 300),
        });
      });

    setCounter(counter + 1);
  }

  return (
    <>
      <section>
        <CssBaseline />
        <Box id="drawer">
          <SideDrawer />
        </Box>
        <Grid
          id="main-page"
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ width: "100%", height: "100vh" }}
        >
          <Grid>
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
          <Grid>
            <Typography
              variant="h2"
              textAlign="center"
              sx={{
                display: "inline",
                fontWeight: "bold",
              }}
            >
              {counter === -1
                ? "Total Survey" + "'" + "s"
                : `Total Survey\'s : ${counter}`}
            </Typography>{" "}
          </Grid>
          <Grid>
            <Typography textAlign="center">
              <Typography
                textAlign="center"
                sx={{
                  display: "inline",
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                Hello!
              </Typography>{" "}
              My name is{" "}
              <Typography
                textAlign="center"
                sx={{
                  fontWeight: "bold",

                  display: "inline",

                  fontFamily: "Mate SC",
                  textDecoration: "underline",
                }}
              >
                {name}{" "}
              </Typography>{" "}
            </Typography>
          </Grid>
          <Grid>
            <Typography textAlign="center">Thanks for choosing us!</Typography>
          </Grid>
          <Grid>
            <Typography textAlign="center">
              It was a pleasure to assist you. We'd like to hear from you!{" "}
            </Typography>
          </Grid>
          <Grid>
            <Typography textAlign="center">
              Please take a moment to rate us a{" "}
              <Typography
                textAlign="center"
                sx={{
                  fontWeight: "bold",
                  display: "inline",
                  fontFamily: "Mate SC",
                }}
              >
                10 and mention my name.{" "}
              </Typography>{" "}
            </Typography>
          </Grid>
          <Grid>
            <Typography
              textAlign="center"
              sx={{
                fontWeight: "bold",
                display: "inline",

                fontFamily: "Mate SC",
              }}
            >
              You will find the survey in the receipt by E-MAIL following your
              visit.{" "}
            </Typography>
          </Grid>
          <Grid xs="auto">
            <Button
              sx={{ backgroundColor: "#146EB4", color: "white" }}
              variant="contained"
              onClick={() => counterCelebration("success")}
            >
              {counter === -1 ? "PRESS TO RESET" : `AWESOME!`}
            </Button>
          </Grid>
        </Grid>
      </section>
    </>
  );
}

export default MainPage;

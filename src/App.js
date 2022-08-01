import "./App.css";
import MainPage from "./Components/MainPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
  Button,
  CssBaseline,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import SideDrawer from "./Components/SideDrawer";
import AmazonTruckGIF from "/Users/abrahams/Commissions/amazon-comission-sa/src/Animations/amazon-truck-gif.gif";
import { useMediaQuery } from "react-responsive";

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  const [name, setName] = useState("");
  const [formSubmmited, setFormSubmmited] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setName(name.trim());
      console.log(name);
      setFormSubmmited(true);
    }
  };
  let theme = createTheme({
    palette: {
      primary: {
        main: "#FF9900",
      },
      secondary: {
        main: "#146EB4",
      },
      background: {
        // default: "#146EB4",
        // paper: "#146EB4",
      },
    },
    typography: {
      body1: {
        color: "#000000",
      },
      fontSize: {},
      fontFamily: ["Amazon Ember"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {loading && <MainPage /> ? (
        <>
          <CssBaseline />
          <Box
            sx={{
              width: "100%",
              height: "100vh",
              bgcolor: "#146EB4",
            }}
          >
            <img
              style={{
                position: "absolute",
                width: "400px",
                height: "400px",

                borderRadius: "50%/50%",
                left: "50%",
                top: "50%",
                right: "50%",
                objectFit: "cover",
                transform: "translate(-50%,-50%)",
              }}
              src={AmazonTruckGIF}
              title="Getting ready for deliveries..."
              alt="Amazon Truck"
            />
          </Box>
        </>
      ) : (
        <>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {isDesktopOrLaptop && (
              <>
                {!formSubmmited && name !== undefined && <MainPage /> ? (
                  <>
                    <ThemeProvider theme={theme}>
                      <CssBaseline />
                      <Box
                        id="desktop"
                        justifyContent="center"
                        display="flex"
                        flex-direction="row"
                        sx={{
                          paddingTop: "50px",
                          paddingBottom: "50px",
                          paddingLeft: "50px",
                          paddingRight: "50px",
                        }}
                      >
                        <Typography textAlign="center">
                          Hello! Please enter your name and submit.
                        </Typography>
                      </Box>
                      <Box
                        justifyContent="center"
                        display="flex"
                        flex-direction="column"
                        sx={{ width: "100%", height: "100vh" }}
                      >
                        <form
                          noValidate
                          autoComplete="off"
                          id="form"
                          onSubmit={handleSubmit}
                        >
                          <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Grid item xs="auto">
                              <TextField
                                sx={{ width: "100%", height: "100%" }}
                                text-align="right"
                                helperText=" "
                                variant="outlined"
                                onChange={(e) => setName(e.target.value)}
                                label="My name is . . ."
                              />
                            </Grid>
                          </Grid>{" "}
                          <Box
                            justifyContent="center"
                            display="flex"
                            flex-direction="column"
                            paddingTop={5}
                          >
                            <Button
                              type="submit"
                              size="large"
                              variant="contained"
                              color="primary"
                              sx={{ width: "75%", height: "25%" }}
                            >
                              <DoneIcon />
                            </Button>
                          </Box>
                        </form>
                      </Box>
                    </ThemeProvider>
                  </>
                ) : (
                  <>
                    <Box id="desktop">
                      <CssBaseline />
                      {/* <SideDrawer /> */}
                      <MainPage name={name} />
                    </Box>
                  </>
                )}
              </>
            )}
            {isBigScreen && (
              <>
                {!formSubmmited && name !== undefined && <MainPage /> ? (
                  <>
                    <ThemeProvider theme={theme}>
                      <CssBaseline />
                      <Box
                        id="big-screen"
                        justifyContent="center"
                        display="flex"
                        flex-direction="row"
                        sx={{
                          paddingTop: "50px",
                          paddingBottom: "50px",
                          paddingLeft: "50px",
                          paddingRight: "50px",
                        }}
                      >
                        <Typography textAlign="center">
                          Hello! Please enter your name and submit.
                        </Typography>
                      </Box>
                      <Box
                        justifyContent="center"
                        display="flex"
                        flex-direction="column"
                        sx={{ width: "100%", height: "100vh" }}
                      >
                        <form
                          noValidate
                          autoComplete="off"
                          id="form"
                          onSubmit={handleSubmit}
                        >
                          <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Grid item xs="auto">
                              <TextField
                                sx={{ width: "100%", height: "100%" }}
                                text-align="right"
                                helperText=" "
                                variant="outlined"
                                onChange={(e) => setName(e.target.value)}
                                label="My name is . . ."
                              />
                            </Grid>
                          </Grid>{" "}
                          <Box
                            justifyContent="center"
                            display="flex"
                            flex-direction="column"
                            paddingTop={5}
                          >
                            <Button
                              type="submit"
                              size="large"
                              variant="contained"
                              color="primary"
                              sx={{ width: "75%", height: "25%" }}
                            >
                              <DoneIcon />
                            </Button>
                          </Box>
                        </form>
                      </Box>
                    </ThemeProvider>
                  </>
                ) : (
                  <>
                    <Box id="big-screen">
                      <CssBaseline />
                      {/* <SideDrawer /> */}
                      <MainPage name={name} />
                    </Box>
                  </>
                )}
              </>
            )}
            {isTabletOrMobile && (
              <>
                {!formSubmmited && name !== undefined && <MainPage /> ? (
                  <>
                    <ThemeProvider theme={theme}>
                      <CssBaseline />

                      <Box
                        id="mobile"
                        justifyContent="center"
                        display="flex"
                        flex-direction="row"
                        sx={{
                          paddingTop: "50px",
                          paddingBottom: "50px",
                          paddingLeft: "50px",
                          paddingRight: "50px",
                        }}
                      >
                        <Typography textAlign="center">
                          Hello! Please enter your name and submit.
                        </Typography>
                      </Box>
                      <Box
                        justifyContent="center"
                        display="flex"
                        flex-direction="column"
                        sx={{ width: "100%", height: "100vh" }}
                      >
                        <form
                          noValidate
                          autoComplete="off"
                          id="form"
                          onSubmit={handleSubmit}
                        >
                          <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Grid item xs="auto">
                              <TextField
                                sx={{ width: "100%", height: "100%" }}
                                text-align="right"
                                helperText=" "
                                variant="outlined"
                                onChange={(e) => setName(e.target.value)}
                                label="My name is . . ."
                              />
                            </Grid>
                          </Grid>{" "}
                          <Box
                            justifyContent="center"
                            display="flex"
                            flex-direction="column"
                            paddingTop={5}
                          >
                            <Button
                              type="submit"
                              size="large"
                              variant="contained"
                              color="primary"
                              sx={{ width: "75%", height: "25%" }}
                            >
                              <DoneIcon />
                            </Button>
                          </Box>
                        </form>
                      </Box>
                    </ThemeProvider>
                  </>
                ) : (
                  <>
                    <Box id="mobile">
                      <CssBaseline />
                      {/* <SideDrawer /> */}
                      <MainPage name={name} />
                    </Box>
                  </>
                )}
              </>
            )}
          </ThemeProvider>
        </>
      )}
    </ThemeProvider>
  );
}

export default App;

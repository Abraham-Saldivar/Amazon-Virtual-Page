import { Box, Typography, TextField, Grid, Button } from "@mui/material";
import { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
function Form() {
  const [name, setName] = useState(null);
  const [formSubmmited, setFormSubmmited] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setName(name.trim());
      console.log(name);
      setFormSubmmited(true);
    }
  };
  return (
    <>
      <Box
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
        <Typography>Hello! Please enter your name and submit.</Typography>
      </Box>
      <Box
        justifyContent="center"
        display="flex"
        flex-direction="column"
        sx={{ width: "100%", height: "100vh" }}
      >
        <form noValidate autoComplete="off" id="form" onSubmit={handleSubmit}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs="auto">
              <TextField
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
              sx={{ width: "50%", height: "25%" }}
            >
              <DoneIcon />
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
}

export default Form;

import AmazonLogo from "/Users/abrahams/Commissions/amazon-comission-sa/src/Images/amazon-logo-transparent.png";
import { Box, CardMedia, Grid } from "@mui/material";

function Logo() {
  return (
    <Box sx={{ paddingTop: 5 }}>
      <Grid
        container
        direction="row"
        justifyContent="right"
        alignItems="center"
      >
        <Grid item xs="auto">
          <CardMedia
            component="img"
            height="50"
            image={AmazonLogo}
            alt="amazon-logo"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Logo;

import { IconButton, Drawer, ListItem, List, Button } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import WcIcon from "@mui/icons-material/Wc";
import BlockIcon from "@mui/icons-material/Block";
import HomeIcon from "@mui/icons-material/Home";
function SideDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <IconButton onClick={() => setIsDrawerOpen(true)}>
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <List>
          <List>
            <ListItem>
              <Button href="/" variant="contained" endIcon={<HomeIcon />}>
                Home
              </Button>
            </ListItem>
            <ListItem>
              <Button
                href="/closed"
                variant="contained"
                endIcon={<BlockIcon />}
              >
                Closed
              </Button>
            </ListItem>
            <ListItem>
              <Button href="/restroom" variant="contained" endIcon={<WcIcon />}>
                Restroom
              </Button>
            </ListItem>
          </List>
        </List>
      </Drawer>
    </>
  );
}

export default SideDrawer;

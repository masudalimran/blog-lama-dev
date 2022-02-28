import {
  Drawer,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

export default function TopBarMenuMobile({ openDrawer, setOpenDrawer }) {
  return (
    <Drawer
      anchor="right"
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
    >
      <List>
        <ListItem
          divider
          button
          onClick={() => setOpenDrawer(false)}
          sx={{ backgroundColor: "orange" }}
        >
          <Link href="/" color="inherit" underline="none">
            <ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemIcon>
          </Link>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <Link href="/about-us" color="inherit" underline="none">
            <ListItemIcon>
              <ListItemText>About</ListItemText>
            </ListItemIcon>
          </Link>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <Link href="/contact" color="inherit" underline="none">
            <ListItemIcon>
              <ListItemText>Contact</ListItemText>
            </ListItemIcon>
          </Link>
        </ListItem>

        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <Link href="/blog" color="inherit" underline="none">
            <ListItemIcon>
              <ListItemText>Blog</ListItemText>
            </ListItemIcon>
          </Link>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <Link href="/write-post" color="inherit" underline="none">
            <ListItemIcon>
              <ListItemText>Write Blog</ListItemText>
            </ListItemIcon>
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
}

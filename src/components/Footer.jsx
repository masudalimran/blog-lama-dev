import {
  Avatar,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import generateWord from "../hooks/GenerateRandomWord";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SocialMedia from "./topbar/socialMedia/SocialMedia";

export default function Footer() {
  return (
    <>
      <Divider sx={{ background: "black", mt: 5 }} />
      <Grid container sx={{ mt: 1 }} justifyContent="center">
        <Grid item xl={2}>
          <Grid container spacing={2} justifyContent="flex-start">
            <Grid item>
              <img
                src="https://picsum.photos/id/237/50/50"
                alt="Logo"
                title="Site logo"
                style={{ borderRadius: "50%" }}
              />
            </Grid>
            <Grid item>
              <Typography variant="h4">Site Name</Typography>
            </Grid>
          </Grid>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo eos
            cupiditate error! Deserunt aliquid vel, vitae est asperiores facilis
            consectetur quo. Suscipit ut iure laboriosam unde quibusdam.
          </Typography>
        </Grid>

        <Grid item xl={2}>
          <Typography variant="h3">Latest Post</Typography>
          <Divider variant="inset" sx={{ background: "black" }} />
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {[...Array(3)].map((x, i) => (
              <>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt={`Jorge Washington Dc number ${i + 1}`}
                      title={`Jorge Washington Dc number ${i + 1}`}
                      src={`https://mui.com/static/images/avatar/${i + 1}.jpg`}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={generateWord(18)}
                    secondary={
                      <>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {generateWord(9)}
                        </Typography>
                        {` — I'll be ${generateWord(30)}…`}
                      </>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </>
            ))}
          </List>
        </Grid>

        <Grid item xl={2}>
          <Typography variant="h3">Services</Typography>
          <Divider variant="inset" sx={{ background: "black" }} />
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {[...Array(5)].map((x, i) => (
              <>
                <ListItem alignItems="flex-start">
                  <ListItemIcon>
                    <ArrowRightIcon />
                  </ListItemIcon>
                  <ListItemText primary={generateWord(18)} />
                </ListItem>
              </>
            ))}
          </List>
        </Grid>

        <Grid item xl={2}>
          <Typography variant="h3">Get in touch</Typography>
          <Divider variant="inset" sx={{ background: "black" }} />
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <LocalPhoneIcon />
                <ListItemText primary="+880 1315686147" sx={{ ml: 2 }} />
              </ListItemIcon>
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <MailOutlineIcon />
                <ListItemText
                  primary="masud@bismibtechnology.com"
                  sx={{ ml: 2, mt: -0.1 }}
                />
              </ListItemIcon>
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <ContactMailIcon />
                <ListItemText
                  primary="Office: H# DCC1, Momin Shoroni Road, North Ibrahimpur, Mirpur-14, Dhaka - 1206, Bangladesh"
                  sx={{ ml: 2, maxWidth: "40%", mt: -0.1 }}
                />
              </ListItemIcon>
            </ListItem>
            <SocialMedia />
          </List>
        </Grid>
      </Grid>
      <Typography
        variant="subtitle2"
        align="center"
        sx={{
          background: "black",
          color: "white",
          position: "sticky",
          bottom: 0,
        }}
      >
        All Rights Reserved | Masud@2022
      </Typography>
    </>
  );
}

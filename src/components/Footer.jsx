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
        <Grid item xl={2} xs={11} sm={5}>
          <Grid
            container
            spacing={2}
            justifyContent={{ xl: "flex-start", xs: "center" }}
            alignItems="center"
          >
            <Grid item>
              <img
                src="https://picsum.photos/id/237/50/50"
                alt="Logo"
                title="Site logo"
                style={{ borderRadius: "50%" }}
              />
            </Grid>
            <Grid item>
              <Typography variant="h6">Site Name</Typography>
            </Grid>
          </Grid>
          <Typography
            variant="body2"
            sx={{ textAlign: { xs: "center", xl: "left" } }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo eos
            cupiditate error! Deserunt aliquid vel, vitae est asperiores facilis
            consectetur quo. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Nemo eos cupiditate error! Deserunt aliquid vel, vitae est
            asperiores facilis consectetur quo. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Nemo eos cupiditate error! Deserunt
            aliquid vel, vitae est asperiores facilis consectetur quo.
          </Typography>
        </Grid>

        <Grid item xl={2} xs={11} sm={5}>
          <Typography variant="h6" align="center">
            Latest Post
          </Typography>
          <Divider variant="inset" sx={{ background: "black" }} />
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {[...Array(3)].map((x, i) => (
              <>
                <ListItem>
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

        <Grid item xl={2} xs={11} sm={5}>
          <Typography variant="h6" align="center">
            Services
          </Typography>
          <Divider variant="inset" sx={{ background: "black" }} />
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            dense
          >
            {[...Array(5)].map((x, i) => (
              <>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon />
                  </ListItemIcon>
                  <ListItemText primary={generateWord(18)} />
                </ListItem>
              </>
            ))}
          </List>
        </Grid>

        <Grid item xl={2} xs={11} sm={5}>
          <Typography variant="h6" align="center">
            Get in touch
          </Typography>
          <Divider variant="inset" sx={{ background: "black" }} />
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            dense
          >
            <ListItem>
              <ListItemIcon>
                <LocalPhoneIcon />
                <ListItemText primary="+880 1315686147" sx={{ ml: 2 }} />
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <MailOutlineIcon />
                <ListItemText
                  primary="masud@bismibtechnology.com"
                  sx={{ ml: 2, mt: -0.1 }}
                />
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ContactMailIcon />
                <ListItemText
                  primary="Office: Mirpur-14, Dhaka - 1206"
                  sx={{ ml: 2, mt: -0.1 }}
                />
                <Typography sx={{ ml: 2, mt: -0.1 }}></Typography>
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

import {
  Alert,
  Avatar,
  Button,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import generateWord from "../hooks/GenerateRandomWord";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SocialMedia from "./topbar/socialMedia/SocialMedia";
import { useSelector } from "react-redux";
import Loading from "./alerts/Loading";
import { PF } from "../publicFolder";

const concerns = [
  {
    name: "MEDICINE FOR WORLD",
    link: "https://medicineforworld.com.bd",
  },
  {
    name: "BISMIB TECHNOLOGY",
    link: "https://bismibtechnology.com",
  },
  {
    name: "BISMIB FASHION",
    link: "https://bismibfashion.com",
  },
  {
    name: "MFW",
    link: "https://mfw.com.bd",
  },
  {
    name: "BISMIB FASHION Alternate",
    link: "https://alternate.bismibfashion.com",
  },
];

export default function Footer() {
  // States
  const [latestPosts, setLatestPosts] = useState([]);

  // Store
  const { pending, error, allPosts } = useSelector((state) => state.post);

  // Use effect
  useEffect(() => {
    allPosts.posts && setLatestPosts(allPosts.posts.slice(0, 3));
  }, [allPosts]);
  return (
    <>
      {pending ? (
        <Loading />
      ) : error ? (
        <Alert severity="error">Something Went Wrong...</Alert>
      ) : (
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
                    src={PF + "logo.png"}
                    alt="Logo"
                    title="Site logo"
                    style={{
                      borderRadius: "50%",
                      width: "100%",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h6">B-Express</Typography>
                </Grid>
              </Grid>
              <Typography
                variant="body2"
                sx={{ textAlign: { xs: "center", xl: "left" } }}
              >
                This is a blog post website where you can express your self
                without any restriction. Feel free to login and create your
                post.
              </Typography>
            </Grid>

            <Grid item xl={2} xs={11} sm={5}>
              <Typography variant="h6" align="center">
                Latest Post
              </Typography>
              <Divider variant="inset" sx={{ background: "black" }} />
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {latestPosts.length > 0 ? (
                  latestPosts.map((x, i) => (
                    <ListItem key={i}>
                      <ListItemAvatar>
                        <Avatar
                          alt={`Jorge Washington Dc number ${i + 1}`}
                          title={`Jorge Washington Dc number ${i + 1}`}
                          src={x.postPic && PF + "post/" + x.postPic}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={x.title}
                        secondary={
                          <>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              {x.shortDesc}
                            </Typography>
                            {` — ${x.fullPost && x.fullPost.slice(0, 20)}…`}
                            <Link
                              href={`/single-post/${x._id}`}
                              underline="none"
                            >
                              <Button variant="text" size="small" color="error">
                                More
                              </Button>
                            </Link>
                          </>
                        }
                        sx={{ borderBottom: "1px solid gray" }}
                      />
                    </ListItem>
                  ))
                ) : (
                  <Typography align="center" variant="subtitle1" color="error">
                    No Post To Show
                  </Typography>
                )}
              </List>
            </Grid>

            <Grid item xl={2} xs={11} sm={5}>
              <Typography variant="h6" align="center">
                Our other services
              </Typography>
              <Divider variant="inset" sx={{ background: "black" }} />
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
                dense
              >
                {concerns.map((x, i) => (
                  <ListItem key={i}>
                    <ListItemIcon>
                      <ArrowRightIcon />
                    </ListItemIcon>
                    <Link href={x.link} underline="none" target="_blank">
                      <ListItemText primary={x.name} color="primary" />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid item xl={2} xs={11} sm={5}>
              <Typography variant="h6" align="center">
                Get in touch
              </Typography>
              <Divider variant="inset" sx={{ background: "black" }} />
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
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
      )}
    </>
  );
}

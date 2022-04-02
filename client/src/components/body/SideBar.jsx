import {
  Alert,
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { PF } from "../../publicFolder";
import SocialMedia from "../topbar/socialMedia/SocialMedia";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../alerts/Loading";

export default function SideBar() {
  // States
  const [latestPosts, setLatestPosts] = useState([]);

  // Store
  const { pending, error, allPosts } = useSelector((state) => state.post);

  // Use effect
  useEffect(() => {
    allPosts.posts && setLatestPosts(allPosts.posts.slice(0, 3));
  }, [allPosts]);

  const localData = JSON.parse(localStorage.getItem("loginInfo"));

  return (
    <>
      {pending ? (
        <Loading />
      ) : error ? (
        <Alert severity="error">Something Went Wrong...</Alert>
      ) : (
        <>
          <Box sx={{ border: "3px double gray" }}>
            <Box sx={{ px: 4 }}>
              <Divider variant="middle" sx={{ mt: 1 }} />
              <Link to="/profile">
                <Typography variant="h6" align="center">
                  About Me
                </Typography>
              </Link>
              <Divider variant="middle" sx={{ mb: 1 }} />
              <Box component="div">
                <img
                  src={
                    localData.profilePic
                      ? PF + "user/" + localData.profilePic
                      : PF + "00000no_231_image.jpg"
                  }
                  alt="About Me"
                  width="100%"
                />
              </Box>
              <Typography variant="subtitle1" align="center">
                {localData.username.toUpperCase()}
              </Typography>
              <Divider variant="middle" sx={{ mt: 1 }} />
              <Typography variant="h6" align="center">
                My Recent Posts
              </Typography>
              <Divider variant="middle" />
            </Box>

            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {latestPosts.length > 0 ? (
                latestPosts.map(
                  (x, i) =>
                    x.userId === localData._id && (
                      <ListItem alignItems="flex-start" key={i}>
                        <ListItemAvatar>
                          <Avatar
                            alt={x.title}
                            title={x.title}
                            src={x.postPic && PF + "post/" + x.postPic}
                            variant="square"
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
                              {` — ${x.fullPost && x.fullPost.slice(0, 30)}…`}
                              <Link to={`/single-post/${x._id}`}>
                                <Button
                                  variant="text"
                                  size="small"
                                  color="error"
                                  sx={{ textDecoration: "none" }}
                                >
                                  Read More
                                </Button>
                              </Link>
                            </>
                          }
                          sx={{
                            borderBottom: "1px solid gray",
                          }}
                        />
                      </ListItem>
                    )
                )
              ) : (
                <Typography align="center" variant="subtitle1" color="error">
                  No Post To Show
                </Typography>
              )}
            </List>
            <Divider variant="middle" sx={{ mt: 1 }} />
            <Typography variant="h6" align="center">
              Follow Us
            </Typography>
            <Divider variant="middle" />
            <SocialMedia user={true} />
          </Box>
        </>
      )}
    </>
  );
}

import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import generateWord from "../../hooks/GenerateRandomWord";
import SocialMedia from "../topbar/socialMedia/SocialMedia";

export default function SideBar() {
  return (
    <>
      <Box sx={{ border: "3px double gray" }}>
        <Box sx={{ px: 4 }}>
          <Divider variant="middle" sx={{ mt: 1 }} />
          <Typography variant="h6" align="center">
            About Me
          </Typography>
          <Divider variant="middle" sx={{ mb: 1 }} />
          <Box component="div">
            <img
              src="https://picsum.photos/300/400"
              alt="About Me"
              width="100%"
            />
          </Box>
          <Typography variant="body2" align="center">
            {generateWord(40)}
          </Typography>
          <Divider variant="middle" sx={{ mt: 1 }} />
          <Typography variant="h6" align="center">
            My Posts
          </Typography>
          <Divider variant="middle" />
        </Box>

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {[...Array(3)].map((x, i) => (
            <ListItem alignItems="flex-start" key={i}>
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
                sx={{ borderBottom: "1px solid gray" }}
              />
            </ListItem>
          ))}
        </List>
        <Divider variant="middle" sx={{ mt: 1 }} />
        <Typography variant="h6" align="center">
          Follow Us
        </Typography>
        <Divider variant="middle" />
        <SocialMedia />
      </Box>
    </>
  );
}

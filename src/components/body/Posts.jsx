import Typography from "@mui/material/Typography";
import {
  Button,
  Card,
  Grid,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Link,
} from "@mui/material";
import generateWord from "../../hooks/GenerateRandomWord";

export default function Posts() {
  return (
    <>
      <Divider variant="middle" sx={{ backgroundColor: "red" }} />
      <Typography variant="h6" align="center">
        Posts
      </Typography>
      <Divider variant="middle" sx={{ mb: 1, backgroundColor: "red" }} />
      <Grid container spacing={4} justifyContent="center" sx={{ mb: 2 }}>
        {[...Array(12)].map((x, i) => (
          <Grid item key={i}>
            <Card sx={{ maxWidth: 345 }}>
              <Link href={`/single-post/${i}`} underline="none">
                <CardMedia
                  component="img"
                  alt={`Post number ${i + 1}`}
                  title={`Post number ${i + 1}`}
                  height="140"
                  image={`https://picsum.photos/id/${i + 310}/500/300`}
                />
              </Link>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {generateWord(9)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {generateWord(55)}
                </Typography>
              </CardContent>
              <CardActions>
                <Link href={`/single-post/${i}`} underline="none">
                  <Button variant="outlined" color="error" size="small">
                    Read More
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SideBar from "../components/body/SideBar";

export default function SinglePost() {
  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ minHeight: "90vh" }}
      >
        <Grid item lg={10}>
          <Card sx={{ ml: 1 }} variant="outlined">
            <CardMedia
              component="img"
              alt="green iguana"
              height={400}
              image="https://mui.com//static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                </Grid>
                <Grid item>
                  <IconButton aria-label="edit" title="Edit Post">
                    <EditIcon color="primary" />
                  </IconButton>
                  <IconButton aria-label="delete" title="Delete Post">
                    <DeleteIcon color="error" />
                  </IconButton>
                </Grid>
              </Grid>
              <Typography variant="body2" component="div" color="primary">
                Author: Imon Khan
              </Typography>
              <Typography
                gutterBottom
                variant="subtitle2"
                component="div"
                color="error"
              >
                1 hour ago
              </Typography>
              <Divider />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  ":first-letter": {
                    ml: 3,
                    fontSize: "30px",
                    fontWeight: "900",
                    color: "black",
                  },
                  lineHeight: "25px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                eos ratione assumenda sit? Ipsam eveniet eum molestias error
                velit, quisquam, exercitationem aperiam harum, obcaecati
                laudantium ullam id quibusdam officiis eos excepturi quasi.
                Exercitationem molestiae hic aliquid at culpa voluptates libero
                explicabo, maxime, inventore a corporis sapiente voluptas
                pariatur debitis repellat voluptatibus adipisci odit praesentium
                recusandae illo. Esse ab delectus tenetur atque! Vitae minus
                impedit ab fugiat nihil corrupti facere, dolorum a, beatae
                explicabo temporibus repellat cumque, sunt placeat id cupiditate
                accusamus ex rerum. Numquam consectetur magnam ipsam alias saepe
                eaque architecto ullam voluptatum explicabo voluptatem, harum
                incidunt iusto. Praesentium illo inventore consequatur enim
                facilis commodi, porro possimus! Amet incidunt pariatur et. Sed
                explicabo, nobis eveniet voluptas mollitia iusto nihil eum neque
                voluptatibus ratione accusamus dolore blanditiis commodi? Eum
                sequi mollitia repellendus quam, rerum quis consectetur
                distinctio magni nihil, ex minima soluta at aspernatur quo
                temporibus placeat reiciendis explicabo est dolor autem.
                Aspernatur cum quasi tempora, sequi perferendis consectetur
                dolorem mollitia natus porro? Aperiam ducimus necessitatibus
                libero nihil vel aliquam iure quos minus dolores laboriosam,
                consectetur sit eos, ea corrupti enim? Corrupti molestiae quam
                odit aliquid consequuntur magnam provident nostrum non ex
                ducimus doloremque ab inventore velit, numquam ea delectus.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={2}>
          <SideBar />
        </Grid>
      </Grid>
    </>
  );
}

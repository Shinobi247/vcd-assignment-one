import {
  Grid,
  Card,
  CardMedia,
  IconButton,
  Avatar,
  CardHeader
} from "@mui/material";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
type CarsInfo = {
  carInfo: {
    objectId: string;
    picture: string;
    model: string;
    make: string;
  };
};
export default function SingleCarCard(props: CarsInfo) {
  return (
    <Grid item xs={4} key={props.carInfo.objectId}>
      <Card elevation={1} sx={{ border: 1, borderColor: "#1976d2" }}>
        <CardHeader
          avatar={
            <Avatar>
              <img src={props.carInfo.picture} alt="" />
            </Avatar>
          }
          title={props.carInfo.model}
          subheader={props.carInfo.make}
        />
        <CardMedia
          component="img"
          alt={`${props.carInfo.model + " " + props.carInfo.make}`}
          height="140"
          width="240"
          image={props.carInfo.picture}
          title={`${props.carInfo.model + " " + props.carInfo.make}`}
        />
      </Card>
    </Grid>
  );
}

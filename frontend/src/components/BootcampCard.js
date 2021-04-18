import {
  Avatar,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

// Format Price
const formatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

const BootcampCard = ({ bootcamp }) => {
  return (
    <div>
      <CardHeader
        avatar={<Avatar />}
        title={<Typography variant="h6">{bootcamp.name}</Typography>}
      />
      <CardContent>
        <Typography variant="caption"> {bootcamp.description} </Typography>

        <Typography variant="h6" gutterBottom>
          {" "}
          {formatter.format(bootcamp.price)}{" "}
        </Typography>
        <Rating
          value={bootcamp.rating}
          readOnly
          name={bootcamp.name}
          size="small"
          precision={0.5}
        />
      </CardContent>

      <CardActions>
        <Button variant="contained" size="small" color="primary">
          Book Now
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </div>
  );
};

export default BootcampCard;

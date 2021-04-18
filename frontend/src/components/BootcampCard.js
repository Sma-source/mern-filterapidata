import { Avatar, CardContent, CardHeader, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

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
          {bootcamp.price}{" "}
        </Typography>
        <Rating
          value={bootcamp.rating}
          readOnly
          name={bootcamp.name}
          size="small"
          precision={0.5}
        />
      </CardContent>
    </div>
  );
};

export default BootcampCard;

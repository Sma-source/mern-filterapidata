import { Avatar, CardContent, CardHeader, Typography } from "@material-ui/core";
import React from "react";

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
      </CardContent>
    </div>
  );
};

export default BootcampCard;

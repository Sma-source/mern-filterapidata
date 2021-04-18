import { Avatar, CardHeader, Typography } from "@material-ui/core";
import React from "react";

const BootcampCard = ({ bootcamp }) => {
  return (
    <div>
      <p>{bootcamp.name} </p>
      <CardHeader
        avatar={<Avatar />}
        title={<Typography variant="h6">{bootcamp.name}</Typography>}
      />
    </div>
  );
};

export default BootcampCard;

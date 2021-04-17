import React from "react";

import { AppBar, ToolBar, Typography } from "@material-ui/core";

const Navbar = () => {
  return (
    <AppBar>
      <ToolBar>
        <Typography variant="h5">Bootcamps</Typography>
      </ToolBar>
    </AppBar>
  );
};

export default Navbar;

import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const Navitem = ({ item }) => {
  return (
    <Grid item xs={item.xs}>
      <Link to={item.to}>
        <Button fullWidth variant="contained">
          {item.title}
        </Button>
      </Link>
    </Grid>
  );
};

export default Navitem;

import { Card, CardContent, Grid } from "@mui/material";
import Navitem from "./NavItem";
import { navdata } from "./Data/navdata";

export const Nav = () => {
  return (
    <Card sx={{ bgcolor: "lightsteelblue" }}>
      <CardContent>
        <Grid container spacing={2}>
          {navdata.map((item) => (
            <Navitem item={item} />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Nav;

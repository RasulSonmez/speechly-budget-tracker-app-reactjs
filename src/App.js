import React from "react";
import { Grid } from "@material-ui/core";

import Main from "./components/Main/Main.jsx";
import Details from "./components/Details/Details.jsx";

import useStyles from "./styles";
function App() {
  const classes = useStyles();
  return (
    <>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ height: "100vh" }}
        sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
      >
        <Grid item xs={12} sm={6}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid item xs={12} sm={4} sx={{ m: 2 }}>
            <Details title="Income" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <Details title="Expense" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;

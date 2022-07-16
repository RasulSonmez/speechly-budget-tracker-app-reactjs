import React from "react";
import { Grid, Typography } from "@material-ui/core";

import {
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";
import Main from "./components/Main/Main.jsx";
import Details from "./components/Details/Details.jsx";

import useStyles from "./styles";

function App() {
  const classes = useStyles();

  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Expense" />
        </Grid>
        <PushToTalkButtonContainer>
          <PushToTalkButton />
        </PushToTalkButtonContainer>
        <Typography
          component="h2"
          style={{ color: "#ffff", marginTop: "5rem" }}
        >
          Created by
          <a
            className={classes.link}
            style={{
              color: "#9e9e9e",
              textDecoration: "none",
            }}
            href="https://github.com/RasulSonmez"
          >
            {" "}
            Rasul Sonmez
          </a>{" "}
        </Typography>
      </Grid>
    </div>
  );
}

export default App;

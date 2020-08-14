import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useState } from "react";
import ConfirmedCase from "../components/ConfirmedCase";
import ProbableCase from "../components/ProbableCase";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

export default () => {
  const [tab, setTab] = useState(0);
  return (
    <React.Fragment>
      <CssBaseline />
      <Typography
        style={{
          fontFamily: "fantasy",
          color: "#3f51b5",
          marginLeft: "8px",
          fontSize: "3rem",
        }}
        variant="h2"
        component="h2"
      >
        VISUAL COVID NZ
      </Typography>
      <AppBar position="static">
        <Tabs
          value={tab}
          onChange={(e, value) => setTab(value)}
          aria-label="simple tabs example"
        >
          <Tab label="Confirmed Cases" />
          <Tab label="Probable Cases" />
        </Tabs>
      </AppBar>
      <Container style={{ marginTop: "8px" }} maxWidth="lg">
        <Paper hidden={tab != 0}>
          <ConfirmedCase />
        </Paper>
        <Paper hidden={tab != 1}>
          <ProbableCase />
        </Paper>
      </Container>
    </React.Fragment>
  );
};

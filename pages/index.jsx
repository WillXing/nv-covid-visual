import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useState } from "react";
import ConfirmedCase from "../components/ConfirmedCase";
import ProbableCase from "../components/ProbableCase";

export default () => {
  const [tab, setTab] = useState(0);
  return (
    <div>
      <Typography variant="h2" component="h2">
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
      <Paper hidden={tab != 0}>
        <ConfirmedCase />
      </Paper>
      <Paper hidden={tab != 1}>
        <ProbableCase />
      </Paper>
    </div>
  );
};

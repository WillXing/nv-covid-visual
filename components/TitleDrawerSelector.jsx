import Fab from "@material-ui/core/Fab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Drawer from "@material-ui/core/Drawer";
import ListItemText from "@material-ui/core/ListItemText";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useState } from "react";

const TitleDrawerSelector = ({ titles, title, setTitle }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <React.Fragment>
      <Fab
        style={{ margin: "8px" }}
        variant="extended"
        onClick={() => setShowDrawer(true)}
      >
        <MoreVertIcon />
        {title.label}
      </Fab>
      <Drawer
        anchor="bottom"
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
      >
        <div
          role="presentation"
          onClick={() => setShowDrawer(false)}
          onKeyDown={() => setShowDrawer(false)}
        >
          <List>
            {titles.map((title, index) => (
              <ListItem
                button
                key={title.keyword}
                onClick={() => setTitle(title)}
              >
                <ListItemText primary={title.label} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default TitleDrawerSelector;

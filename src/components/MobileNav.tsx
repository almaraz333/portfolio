import { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Menu, Close, Mail, DeveloperMode, Person } from "@material-ui/icons";
import Pdf from "../Assets/ColtonAlmaraz_Resume.pdf";

export const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <div className="mobile-nav">
      <Button
        variant="outlined"
        color="primary"
        className="button px-5"
        href={Pdf}
      >
        Resume
      </Button>
      <Button
        onClick={toggleDrawer(true)}
        color="primary"
        className="menu-button"
      >
        <Menu fontSize="large" />
      </Button>
      <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem button>
              <ListItemIcon onClick={() => setOpen(false)}>
                <Close />
              </ListItemIcon>
            </ListItem>
            {["About", "Projects", "Contact"].map((item) => (
              <a href={`#${item}`} key={item}>
                <ListItem button>
                  <ListItemIcon>
                    {item === "About" ? (
                      <Person />
                    ) : item === "Projects" ? (
                      <DeveloperMode />
                    ) : (
                      <Mail />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              </a>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
};

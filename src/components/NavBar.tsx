import { Box, Button, Typography } from "@material-ui/core";
import { Logo } from "./Logo";

export const NavBar = () => {
  return (
    <div className="nav">
      <Logo />
      <Box
        className="links"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography color="primary" variant="subtitle1">
          00. <span style={{ color: "white" }}>About</span>
        </Typography>
        <Typography color="primary" variant="subtitle1">
          01. <span style={{ color: "white" }}>Projects</span>
        </Typography>
        <Typography color="primary" variant="subtitle1">
          02. <span style={{ color: "white" }}>Contact</span>
        </Typography>
        <Button variant="outlined" color="primary" className="button">
          Resume
        </Button>
      </Box>
    </div>
  );
};

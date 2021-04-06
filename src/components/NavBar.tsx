import { Box, Button, Typography } from "@material-ui/core";

export const NavBar = () => {
  return (
    <Box
      className="nav"
      display="flex"
      justifyContent="space-between"
      maxWidth="30vw"
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
  );
};

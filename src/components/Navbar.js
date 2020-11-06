import React, { Fragment } from "react";
import {
  AppBar,
  Avatar,
  FormControl,
  IconButton,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";

// Icons
import SettingsIcon from "@material-ui/icons/Settings";
import ReceiptIcon from "@material-ui/icons/Receipt";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontWeight: "bold",
  },
  logo: {
    color: "#0892d0",
  },
  navbar: {
    padding: "0.2%",
    marginBottom: "5px",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar
        position="static"
        color="transparent"
        className={classes.navbar}
      >
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
          >
            Rep<span className={classes.logo}>suite</span>
          </Typography>
          <IconButton>
            <ReceiptIcon color="primary" />
          </IconButton>
          <IconButton>
            <SettingsIcon color="primary" />
          </IconButton>
          <IconButton>
            <Avatar
              alt="Bhavleen Singh"
              src="/static/images/avatar/1.jpg"
              style={{ marginRight: "5px" }}
            />
          </IconButton>
          <FormControl className={classes.formControl}>
            <InputLabel>Profile</InputLabel>
            <Select autoWidth value={1}>
              <MenuItem value={1}>
                <strong>Bhavleen Singh</strong>
              </MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;

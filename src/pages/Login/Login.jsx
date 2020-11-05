import React, { useState } from "react";
import {
  Box,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import RightGridImage from "../../images/rightGridImage.png";

// Style
import useStyles from "./login.style";

// Icons
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import MoneyOffIcon from "@material-ui/icons/MoneyOff";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import {
  Visibility,
  VisibilityOff,
} from "@material-ui/icons";

const Login = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  return (
    <Box>
      <Grid container>
        <Grid
          item
          sm={12}
          md={6}
          className={classes.leftGrid}
        >
          <h1>
            Rep<span className={classes.logo}>suite</span>.
          </h1>
          <Box style={{ textAlign: "center" }}>
            <Box
              style={{
                width: "43%",
                margin: "auto",
              }}
            >
              <Typography
                variant="h3"
                style={{ fontWeight: "bold" }}
              >
                Hey There <span>👋</span>
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ fontWeight: "bold" }}
              >
                Welcome back to Rep
                <span className={classes.logo}>suite</span>.
              </Typography>

              <form autoComplete="off">
                <FormControl variant="outlined">
                  <InputLabel>Enter email...</InputLabel>
                  <OutlinedInput
                    type="email"
                    size="small"
                    style={{ margin: "5% 0" }}
                    value={values.email}
                    onChange={handleChange("email")}
                  />
                </FormControl>

                <FormControl variant="outlined">
                  <InputLabel>Password...</InputLabel>
                  <OutlinedInput
                    type={
                      values.showPassword
                        ? "text"
                        : "password"
                    }
                    value={values.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleShowPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                {/* helperText="Use 8 or more characters to make a strong password" */}
              </form>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          sm={12}
          md={6}
          className={classes.rightGrid}
        >
          <img
            alt="working_hard"
            src={RightGridImage}
            width="60%"
            className={classes.imageAlign}
          />
          <Typography
            variant="subtitle2"
            style={{
              lineHeight: "2.5rem",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            <ChatBubbleIcon fontSize="small" /> Fully
            Automated Comment Moderation
            <br />
            <AutorenewIcon fontSize="small" /> Take a
            backseat while we automate your repo
            <br />
            <MoneyOffIcon fontSize="small" /> Start with a
            free trial
            <br />
            <ThumbUpIcon fontSize="small" /> Best SAAS in
            the industry
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;

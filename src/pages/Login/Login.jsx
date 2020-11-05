import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import RightGridImage from "../../images/rightGridImage.png";
import { toast } from "react-toastify";

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
import { Link } from "react-router-dom";

const Login = ({ history }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const { email, password, showPassword } = values;

  const handleChange = (name) => (evt) => {
    setValues({ ...values, [name]: evt.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (email && password) {
      history.push("/dashboard");
    } else {
      toast.error("Please Input Correct Data");
    }
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
                width: "55%",
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

              <form
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <TextField
                  variant="outlined"
                  label="Enter Email..."
                  name="email"
                  type="email"
                  className={classes.textBox}
                  value={email}
                  onChange={handleChange("email")}
                  fullWidth
                  size="small"
                />
                <TextField
                  variant="outlined"
                  label="Password..."
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className={classes.textBox}
                  value={password}
                  onChange={handleChange("password")}
                  fullWidth
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        <IconButton
                          onClick={handleClickShowPassword}
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                {/* helperText="Use 8 or more characters to make a strong password" */}
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.buttonCss}
                  type="submit"
                >
                  Sign In
                </Button>
                <br />
                <Typography variant="body2">
                  New User?{" "}
                  <Link to="/">Signup instead</Link>
                </Typography>
                <div
                  style={{
                    width: "100%",
                    height: "11px",
                    borderBottom: "1px solid black",
                    textAlign: "center",
                    margin: "8% 0",
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      backgroundColor: "white",
                      padding: "0 7px",
                    }}
                  >
                    Or continue with
                  </span>
                </div>
                <Button className={classes.actionBtn}>
                  <i
                    className="fab fa-google fa-2x"
                    style={{ color: "red" }}
                  ></i>
                </Button>
                <Button
                  className={classes.actionBtn}
                >
                  <i
                    className="fab fa-facebook fa-2x"
                    style={{ color: "blue" }}
                  ></i>
                </Button>
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

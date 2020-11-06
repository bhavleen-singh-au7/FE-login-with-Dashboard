import {
  AppBar,
  Checkbox,
  Grid,
  LinearProgress,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";

// Style
import useStyles from "./dashboard.style";

// Icons
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Navbar className={classes.mb} />
      <div className={classes.body}>
        <Grid container>
          <Grid
            item
            lg={2}
            style={{
              backgroundColor: "red",
              padding: "20px 10px",
            }}
          >
            <Paper className={classes.pagesInfo}>
              <h3>Pages and Channels</h3>
              <Paper
                style={{ margin: "4% 0", padding: "4% 2%" }}
              >
                <Checkbox
                  color="primary"
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                  checked
                />
                Rachna Ranode{" "}
                <i
                  className="fab fa-youtube fa-lg"
                  style={{ color: "red" }}
                ></i>
              </Paper>
              <Paper
                style={{ margin: "4% 0", padding: "4% 2%" }}
              >
                <Checkbox
                  color="primary"
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                  checked
                />
                Rachna.ranode3{" "}
                <i
                  className="fab fa-instagram fa-lg"
                  style={{ color: "red" }}
                ></i>
              </Paper>
              <Paper
                style={{ margin: "4% 0", padding: "4% 2%" }}
              >
                <Checkbox
                  color="primary"
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                />
                Rachna Ranode{" "}
                <i
                  className="fab fa-facebook fa-lg"
                  style={{ color: "blue" }}
                ></i>
              </Paper>
              <Paper
                style={{ margin: "4% 0", padding: "4% 2%" }}
              >
                <Checkbox
                  color="primary"
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                  checked
                />
                Rachna.ranode3{" "}
                <i
                  className="fab fa-instagram fa-lg"
                  style={{ color: "red" }}
                ></i>
              </Paper>
              <h3 style={{ textAlign: "left" }}>Status</h3>
              <Paper
                style={{
                  margin: "4% 0",
                  padding: "4% 0",
                }}
              >
                <Checkbox
                  color="primary"
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                  checked
                />
                <strong>Requires Manual Action</strong>{" "}
              </Paper>
              <Paper
                style={{ margin: "4% 0", padding: "4% 2%" }}
              >
                <Checkbox
                  color="primary"
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                  checked
                />
                <strong>Marked as safe by:</strong>{" "}
                <Paper style={{ fontSize: "12px" }}>
                  <Checkbox
                    color="primary"
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<CheckCircleIcon />}
                    checked
                    size="small"
                    style={{ marginLeft: "10%" }}
                  />
                  Manual Action
                  <br />
                  <Checkbox
                    color="primary"
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<CheckCircleIcon />}
                    checked
                    size="small"
                    style={{ marginLeft: "10%" }}
                  />
                  AI{" "}
                </Paper>
              </Paper>
              <Paper
                style={{ margin: "4% 0", padding: "4% 2%" }}
              >
                <strong>Hidden By</strong>
                <Paper style={{ fontSize: "12px" }}>
                  <Checkbox
                    color="primary"
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<CheckCircleIcon />}
                    size="small"
                    style={{ marginLeft: "10%" }}
                  />
                  Manual Action
                  <br />
                  <Checkbox
                    color="primary"
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<CheckCircleIcon />}
                    checked
                    size="small"
                    style={{ marginLeft: "10%" }}
                  />
                  AI <br />
                  <Checkbox
                    color="primary"
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<CheckCircleIcon />}
                    size="small"
                    style={{ marginLeft: "10%" }}
                  />
                  Keywords{" "}
                </Paper>
              </Paper>
            </Paper>

            <Paper
              className={classes.pagesInfo}
              elevation={3}
            >
              <h3>Plan Usage</h3>
              <h4>Accounts Connected</h4>
              <LinearProgress
                className={classes.linearProgress}
                variant="determinate"
                value={66}
                color="secondary"
              />
              <Typography
                variant="caption"
                display="block"
                style={{ textAlign: "right" }}
                gutterBottom
              >
                2 of 3
              </Typography>
              <h4>Comments Processed</h4>
              <LinearProgress
                className={classes.linearProgress}
                variant="determinate"
                value={50}
                color="secondary"
              />
              <Typography
                variant="caption"
                display="block"
                style={{ textAlign: "right" }}
                gutterBottom
              >
                5,000 of 10,000
              </Typography>
            </Paper>
          </Grid>
          <Grid
            item
            lg={7}
            style={{ backgroundColor: "blue" }}
          >
            <Paper>Center Card</Paper>
          </Grid>
          <Grid
            item
            lg={3}
            style={{ backgroundColor: "green" }}
          >
            <Paper>Right Body</Paper>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default Dashboard;

import {
  Avatar,
  Button,
  Checkbox,
  Grid,
  IconButton,
  InputAdornment,
  LinearProgress,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";

// Style
import useStyles from "./dashboard.style";

// Icons
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CheckIcon from "@material-ui/icons/Check";
import BeenhereOutlinedIcon from "@material-ui/icons/BeenhereOutlined";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import NotInterestedIcon from "@material-ui/icons/NotInterested";

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
            style={{
              padding: "20px 10px",
            }}
          >
            <Paper className={classes.pagesInfo}>
              <Grid container style={{ margin: "5% 0" }}>
                <Grid style={{ marginRight: "10px" }}>
                  <Avatar
                    alt="Rachna Ranade"
                    src="/static/images/avatar/1.jpg"
                    className={classes.large}
                  />
                </Grid>
                <Grid>
                  <Typography
                    variant="h5"
                    style={{ fontWeight: "bold" }}
                  >
                    Rachna Ranade
                  </Typography>
                  <Typography
                    variant="caption"
                    display="block"
                    gutterBottom
                  >
                    2:03 PM Today
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="subititle1">
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Libero ipsam odio enim
                eius esse accusantium qui, corporis
                exercitationem voluptas.
              </Typography>

              <img
                style={{
                  margin: "5% 0",
                  borderRadius: "10px",
                }}
                alt="waste_Image"
                src="https://images.newindianexpress.com/uploads/user/imagelibrary/2020/2/19/w900X450/ICMRnjj.jpg"
                width="100%"
              />

              <Grid container style={{ margin: "5% 0" }}>
                <Grid style={{ marginRight: "10px" }}>
                  <Avatar
                    alt="Prayag Mukhi"
                    src="/static/images/avatar/1.jpg"
                  />
                </Grid>
                <Grid style={{ flexGrow: 1 }}>
                  <Typography
                    variant="subtitle1"
                    style={{ fontWeight: "bold" }}
                  >
                    Rachna Ranade
                  </Typography>
                  <Typography
                    variant="caption"
                    display="block"
                    gutterBottom
                  >
                    2:03 PM Today
                  </Typography>
                </Grid>
                <Grid style={{ textAlign: "right" }}>
                  <CheckIcon style={{ color: "green" }} />
                  <BeenhereOutlinedIcon color="primary" />
                  <VisibilityOffIcon
                    style={{ color: "yellow" }}
                  />
                </Grid>
              </Grid>
              <Typography variant="subititle1">
                Prayag should marry piyush Prayag should he
                do that marry piyush Prayag should marry
                piyush Prayag should he do that marry piyush
              </Typography>
              <TextField
                style={{ margin: "5% 0" }}
                variant="outlined"
                label="Write a reply..."
                type="text"
                fullWidth
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <SentimentSatisfiedIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <IconButton
                style={{
                  fontSize: "small",
                  color: "blue",
                }}
              >
                Like <ThumbUpAltIcon />
              </IconButton>
              <IconButton
                style={{
                  fontSize: "small",
                  color: "red",
                }}
              >
                Ban <NotInterestedIcon />
              </IconButton>
              <Button
                style={{
                  backgroundColor: "green",
                  color: "white",
                  marginLeft: "30%",
                }}
              >
                Reply
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default Dashboard;

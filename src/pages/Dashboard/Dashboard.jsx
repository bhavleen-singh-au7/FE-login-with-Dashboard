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
import VisibilityOffTwoToneIcon from "@material-ui/icons/VisibilityOffTwoTone";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import ErrorOutlinedIcon from "@material-ui/icons/ErrorOutlined";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import InstagramIcon from "@material-ui/icons/Instagram";

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
            md={3}
            className={classes.sectionTab}
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
            md={9}
            sm={12}
            style={{ padding: "0 2%" }}
          >
            <Grid container>
              <Grid
                item
                xs={6}
                sm={3}
                style={{ margin: "auto" }}
              >
                <Typography variant="body2">
                  <span style={{ fontWeight: "bold" }}>
                    Data Range:
                  </span>{" "}
                  Last 7 Days
                </Typography>
              </Grid>

              <Grid
                item
                xs={6}
                sm={3}
                style={{ paddingRight: "10px" }}
              >
                <Paper
                  style={{
                    borderRadius: "10px",
                    marginTop: "5%",
                    paddingRight: "10px",
                  }}
                >
                  <Grid container>
                    <Grid
                      item={11}
                      style={{ flexGrow: 1, padding: "3%" }}
                    >
                      <Typography variant="body2">
                        <strong>
                          Require manual <br />
                          Action
                        </strong>
                      </Typography>
                      <Typography variant="h6">
                        <strong>34</strong>
                      </Typography>
                    </Grid>
                    <Grid
                      item={1}
                      style={{ margin: "auto" }}
                    >
                      <ErrorOutlinedIcon
                        color="secondary"
                        fontSize="large"
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              <Grid
                item
                xs={6}
                sm={3}
                style={{ paddingRight: "10px" }}
              >
                <Paper
                  style={{
                    borderRadius: "10px",
                    marginTop: "5%",
                  }}
                >
                  <Grid container>
                    <Grid
                      item={11}
                      style={{ flexGrow: 1, padding: "3%" }}
                    >
                      <Typography variant="subtitle2">
                        <strong>
                          Marked as Safe
                          <br />.
                        </strong>
                      </Typography>
                      <Typography variant="h6">
                        <strong>128</strong>
                      </Typography>
                    </Grid>
                    <Grid
                      item={1}
                      style={{
                        margin: "auto",
                        paddingRight: "10px",
                      }}
                    >
                      <BeenhereOutlinedIcon
                        color="primary"
                        fontSize="large"
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              <Grid
                item
                xs={6}
                sm={3}
                style={{ paddingRight: "10px" }}
              >
                <Paper
                  style={{
                    borderRadius: "10px",
                    marginTop: "5%",
                  }}
                >
                  <Grid container>
                    <Grid
                      item={11}
                      style={{ flexGrow: 1, padding: "3%" }}
                    >
                      <Typography variant="subtitle2">
                        <strong>
                          Hidden
                          <br />.
                        </strong>
                      </Typography>
                      <Typography variant="h6">
                        <strong>128</strong>
                      </Typography>
                    </Grid>
                    <Grid
                      item={1}
                      style={{
                        margin: "auto",
                        paddingRight: "10px",
                      }}
                    >
                      <VisibilityOffTwoToneIcon
                        style={{ color: "yellow" }}
                        fontSize="large"
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
            >
              Showing 36 Comments
            </Typography>
            <Paper
              elevation={3}
              className={classes.pagesInfo}
            >
              <Grid container>
                <Grid style={{ marginRight: "3%" }}>
                  <Avatar
                    alt="Prayag Mukhi"
                    src="/static/images/avatar/1.jpg"
                    className={classes.large}
                  />
                </Grid>

                <Grid style={{ flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    style={{ fontWeight: "bold" }}
                    color="primary"
                  >
                    Prayag Mukhi
                  </Typography>
                  <Typography
                    variant="caption"
                    display="block"
                    gutterBottom
                  >
                    2:03 PM Today
                  </Typography>
                </Grid>
                <Grid>
                  <ErrorOutlinedIcon
                    color="secondary"
                    fontSize="large"
                  />
                </Grid>
              </Grid>
              <Grid container style={{ marginTop: "3% 0" }}>
                <Grid
                  item
                  xs={11}
                  style={{
                    paddingRight: "3%",
                    margin: "2% 0",
                  }}
                >
                  <Typography variant="subtitle1">
                    Prayag should marry piyush Prayag should
                    he do that marry piyush Prayag should
                    marry piyush Prayag should he do that
                    marry piyush Prayag should marry piyush
                    Prayag should he do that marry piyush
                  </Typography>
                </Grid>
                <Grid style={{ margin: "auto" }}>
                  <ArrowForwardIosIcon />
                </Grid>
              </Grid>
              <Grid container>
                <Grid style={{ flexGrow: "1" }}>
                  <IconButton>
                    <InstagramIcon
                      color="secondary"
                      style={{ marginTop: "3px" }}
                    />
                    <Typography variant="subtitle2">
                      Rachana.ranode3
                    </Typography>
                  </IconButton>
                </Grid>
                <Grid
                  style={{
                    textAlign: "right",
                    margin: "auto",
                  }}
                >
                  <BeenhereOutlinedIcon
                    color="primary"
                    style={{ marginRight: "20px" }}
                  />
                  <VisibilityOffIcon
                    style={{
                      color: "yellow",
                      marginRight: "20px",
                    }}
                  />
                  <CheckIcon
                    style={{
                      color: "green",
                    }}
                  />
                </Grid>
              </Grid>
            </Paper>
            <Paper
              elevation={3}
              className={classes.pagesInfo}
            >
              <Grid container>
                <Grid style={{ marginRight: "10px" }}>
                  <Avatar
                    alt="Prayag Mukhi"
                    src="/static/images/avatar/1.jpg"
                    className={classes.large}
                  />
                </Grid>
                <Grid style={{ flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    style={{ fontWeight: "bold" }}
                    color="primary"
                  >
                    Prayag Mukhi
                  </Typography>
                  <Typography
                    variant="caption"
                    display="block"
                    gutterBottom
                  >
                    2:03 PM Today
                  </Typography>
                </Grid>
                <Grid>
                  <ErrorOutlinedIcon
                    color="secondary"
                    fontSize="large"
                  />
                </Grid>
              </Grid>
              <Grid container style={{ marginTop: "3% 0" }}>
                <Grid
                  item
                  xs={11}
                  style={{
                    paddingRight: "3%",
                    margin: "2% 0",
                  }}
                >
                  <Typography variant="subtitle1">
                    Prayag should marry piyush Prayag should
                    he do that marry piyush Prayag should
                    marry piyush Prayag should he do that
                    marry piyush Prayag should marry piyush
                    Prayag should he do that marry piyush
                  </Typography>
                </Grid>
                <Grid style={{ margin: "auto" }}>
                  <ArrowForwardIosIcon />
                </Grid>
              </Grid>
              <Grid container>
                <Grid style={{ flexGrow: "1" }}>
                  <IconButton>
                    <InstagramIcon
                      color="secondary"
                      style={{ marginTop: "3px" }}
                    />
                    <Typography variant="subtitle2">
                      Rachana.ranode3
                    </Typography>
                  </IconButton>
                </Grid>
                <Grid
                  style={{
                    textAlign: "right",
                    margin: "auto",
                  }}
                >
                  <BeenhereOutlinedIcon
                    color="primary"
                    style={{ marginRight: "20px" }}
                  />
                  <VisibilityOffIcon
                    style={{
                      color: "yellow",
                      marginRight: "20px",
                    }}
                  />
                  <CheckIcon
                    style={{
                      color: "green",
                    }}
                  />
                </Grid>
              </Grid>
            </Paper>
            <Paper
              elevation={3}
              className={classes.pagesInfo}
            >
              <Grid container>
                <Grid style={{ marginRight: "10px" }}>
                  <Avatar
                    alt="Prayag Mukhi"
                    src="/static/images/avatar/1.jpg"
                    className={classes.large}
                  />
                </Grid>
                <Grid style={{ flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    style={{ fontWeight: "bold" }}
                    color="primary"
                  >
                    Prayag Mukhi
                  </Typography>
                  <Typography
                    variant="caption"
                    display="block"
                    gutterBottom
                  >
                    2:03 PM Today
                  </Typography>
                </Grid>
                <Grid>
                  <ErrorOutlinedIcon
                    color="secondary"
                    fontSize="large"
                  />
                </Grid>
              </Grid>
              <Grid container style={{ marginTop: "3% 0" }}>
                <Grid
                  item
                  xs={11}
                  style={{
                    paddingRight: "3%",
                    margin: "2% 0",
                  }}
                >
                  <Typography variant="subtitle1">
                    Prayag should marry piyush Prayag should
                    he do that marry piyush Prayag should
                    marry piyush Prayag should he do that
                    marry piyush Prayag should marry piyush
                    Prayag should he do that marry piyush
                  </Typography>
                </Grid>
                <Grid style={{ margin: "auto" }}>
                  <ArrowForwardIosIcon />
                </Grid>
              </Grid>
              <Grid container>
                <Grid style={{ flexGrow: "1" }}>
                  <IconButton>
                    <InstagramIcon
                      color="secondary"
                      style={{ marginTop: "3px" }}
                    />
                    <Typography variant="subtitle2">
                      Rachana.ranode3
                    </Typography>
                  </IconButton>
                </Grid>
                <Grid
                  style={{
                    textAlign: "right",
                    margin: "auto",
                  }}
                >
                  <BeenhereOutlinedIcon
                    color="primary"
                    style={{ marginRight: "20px" }}
                  />
                  <VisibilityOffIcon
                    style={{
                      color: "yellow",
                      marginRight: "20px",
                    }}
                  />
                  <CheckIcon
                    style={{
                      color: "green",
                    }}
                  />
                </Grid>
              </Grid>
            </Paper>
            <Paper
              elevation={3}
              className={classes.pagesInfo}
            >
              <Grid container>
                <Grid style={{ marginRight: "10px" }}>
                  <Avatar
                    alt="Prayag Mukhi"
                    src="/static/images/avatar/1.jpg"
                    className={classes.large}
                  />
                </Grid>
                <Grid style={{ flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    style={{ fontWeight: "bold" }}
                    color="primary"
                  >
                    Prayag Mukhi
                  </Typography>
                  <Typography
                    variant="caption"
                    display="block"
                    gutterBottom
                  >
                    2:03 PM Today
                  </Typography>
                </Grid>
                <Grid>
                  <ErrorOutlinedIcon
                    color="secondary"
                    fontSize="large"
                  />
                </Grid>
              </Grid>
              <Grid container style={{ marginTop: "3% 0" }}>
                <Grid
                  item
                  xs={11}
                  style={{
                    paddingRight: "3%",
                    margin: "2% 0",
                  }}
                >
                  <Typography variant="subtitle1">
                    Prayag should marry piyush Prayag should
                    he do that marry piyush Prayag should
                    marry piyush Prayag should he do that
                    marry piyush Prayag should marry piyush
                    Prayag should he do that marry piyush
                  </Typography>
                </Grid>
                <Grid style={{ margin: "auto" }}>
                  <ArrowForwardIosIcon />
                </Grid>
              </Grid>
              <Grid container>
                <Grid style={{ flexGrow: "1" }}>
                  <IconButton>
                    <InstagramIcon
                      color="secondary"
                      style={{ marginTop: "3px" }}
                    />
                    <Typography variant="subtitle2">
                      Rachana.ranode3
                    </Typography>
                  </IconButton>
                </Grid>
                <Grid
                  style={{
                    textAlign: "right",
                    margin: "auto",
                  }}
                >
                  <BeenhereOutlinedIcon
                    color="primary"
                    style={{ marginRight: "20px" }}
                  />
                  <VisibilityOffIcon
                    style={{
                      color: "yellow",
                      marginRight: "20px",
                    }}
                  />
                  <CheckIcon
                    style={{
                      color: "green",
                    }}
                  />
                </Grid>
              </Grid>
            </Paper>
            <Paper
              elevation={3}
              className={classes.pagesInfo}
            >
              <Grid container>
                <Grid style={{ marginRight: "10px" }}>
                  <Avatar
                    alt="Prayag Mukhi"
                    src="/static/images/avatar/1.jpg"
                    className={classes.large}
                  />
                </Grid>
                <Grid style={{ flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    style={{ fontWeight: "bold" }}
                    color="primary"
                  >
                    Prayag Mukhi
                  </Typography>
                  <Typography
                    variant="caption"
                    display="block"
                    gutterBottom
                  >
                    2:03 PM Today
                  </Typography>
                </Grid>
                <Grid>
                  <ErrorOutlinedIcon
                    color="secondary"
                    fontSize="large"
                  />
                </Grid>
              </Grid>
              <Grid container style={{ marginTop: "3% 0" }}>
                <Grid
                  item
                  xs={11}
                  style={{
                    paddingRight: "3%",
                    margin: "2% 0",
                  }}
                >
                  <Typography variant="subtitle1">
                    Prayag should marry piyush Prayag should
                    he do that marry piyush Prayag should
                    marry piyush Prayag should he do that
                    marry piyush Prayag should marry piyush
                    Prayag should he do that marry piyush
                  </Typography>
                </Grid>
                <Grid style={{ margin: "auto" }}>
                  <ArrowForwardIosIcon />
                </Grid>
              </Grid>
              <Grid container>
                <Grid style={{ flexGrow: "1" }}>
                  <IconButton>
                    <InstagramIcon
                      color="secondary"
                      style={{ marginTop: "3px" }}
                    />
                    <Typography variant="subtitle2">
                      Rachana.ranode3
                    </Typography>
                  </IconButton>
                </Grid>
                <Grid
                  style={{
                    textAlign: "right",
                    margin: "auto",
                  }}
                >
                  <BeenhereOutlinedIcon
                    color="primary"
                    style={{ marginRight: "20px" }}
                  />
                  <VisibilityOffIcon
                    style={{
                      color: "yellow",
                      marginRight: "20px",
                    }}
                  />
                  <CheckIcon
                    style={{
                      color: "green",
                    }}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid
            item
            lg={3}
            md={3}
            className={classes.sectionMobile}
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
              <Typography variant="subtitle2">
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
              <Typography variant="subtitle2">
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
                  marginLeft: "25%",
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

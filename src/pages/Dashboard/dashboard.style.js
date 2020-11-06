import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logo: {
    color: "#0892d0",
  },
  body: {
    backgroundColor: "#d7f2f4",
  },
  pagesInfo: {
    margin: "4% 0",
    padding: "4%",
    borderRadius: "10px",
  },
  linearProgress: {
    height: 10,
    borderRadius: 5,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  sectionMobile: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  sectionTab: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
}));

export default useStyles;

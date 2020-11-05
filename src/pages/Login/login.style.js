import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  rightGrid: {
    backgroundColor: "#229aca",
    height: "100vh",
    textAlign: "center",
    color: "white",
    lineHeight: "2rem",
  },
  leftGrid: {
    height: "100vh",
    padding: "3%",
  },
  logo: {
    color: "#0892d0",
  },
  imageAlign: {
    margin: "10% 0",
  },
}));

export default useStyles;
